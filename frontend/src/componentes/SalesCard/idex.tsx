import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotificationButton from "../NotificationButton";
import "./style.css";

function SalesCard() {
  return (
    <div className="DSMeta-Card">
      <h2 className="DsVendas">Vendas</h2>
      <div>
        <div className="dsmetacontroll-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmetacontroll-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
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
          <tr>
            <td className="showdata992">#001</td>
            <td className="showdata">08/07/22</td>
            <td>Anakin</td>
            <td className="showdata992">10</td>
            <td className="showdata992">11</td>
            <td>R$ 500,00</td>
            <td>
              <div className="redtbm-container">
                <NotificationButton />
              </div>
            </td>
          </tr>
          <tr>
            <td className="showdata992">#002</td>
            <td className="showdata">08/07/22</td>
            <td>Luke</td>
            <td className="showdata992">12</td>
            <td className="showdata992">14</td>
            <td>R$ 800,00</td>
            <td>
              <div className="redtbm-container">
                <NotificationButton />
              </div>
            </td>
          </tr>
          <tr>
            <td className="showdata992">#003</td>
            <td className="showdata">08/07/22</td>
            <td>Leia</td>
            <td className="showdata992">15</td>
            <td className="showdata992">12</td>
            <td>R$ 900,00</td>
            <td>
              <div className="redtbm-container">
                <NotificationButton />
              </div>
            </td>
          </tr>
          <tr>
            <td className="showdata992">#004</td>
            <td className="showdata">08/07/22</td>
            <td>Han</td>
            <td className="showdata992">09</td>
            <td className="showdata992">10</td>
            <td>R$ 300,00</td>
            <td>
              <div className="redtbm-container">
                <NotificationButton />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesCard;
