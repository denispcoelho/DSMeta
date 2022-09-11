import { BASE_URL } from "../../utils/request";
import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotificationButton from "../NotificationButton";
import "./style.css";
import { Sale } from "../models/sale";

function SalesCard() {
  
  
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate]= useState(min);
    const [maxDate, setMaxDate]= useState(max);

    const [sales, setSales]= useState<Sale[]>([]);

    useEffect(() => {
        
        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);
        console.log(dmin);
        
        
        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(response =>{
                setSales(response.data.content);
            })
    }, [minDate, maxDate]);
  
    return (
    <div className="DSMeta-Card">
      <h2 className="DsVendas">Vendas</h2>
      <div>
        <div className="dsmetacontroll-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => {setMinDate(date)}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmetacontroll-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => {setMaxDate(date)}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <table className="dsmeta-sales-table">
        <thead>
          <tr>
            <th className="showdata992">ID</th>
            <th className="showdata">Data</th>
            <th>Vendedor</th>
            <th className="showdata992">Visitas</th>
            <th className="showdata992">Vendas</th>
            <th>Total</th>
            <th>Notificar</th>
          </tr>
        </thead>
        <tbody>
            {sales.map(sale => {
                return (

                <tr key={sale.id}>
                    <td className="showdata992">{sale.id}</td>
                    <td className="showdata">{new Date(sale.date).toLocaleDateString()}</td>
                    <td>{sale.sellerName}</td>
                    <td className="showdata992">{sale.visited}</td>
                    <td className="showdata992">{sale.deals}</td>
                    <td>R$ {sale.amount.toFixed(2)}</td>
                    <td>
                        <div className="redtbm-container">
                            <NotificationButton saleId={sale.id}/>
                        </div>
                    </td>
                </tr>
                )
            
            })}


        </tbody>
      </table>
    </div>
  );
}

export default SalesCard;
