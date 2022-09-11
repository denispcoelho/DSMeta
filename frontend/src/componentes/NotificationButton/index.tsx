import axios, { Axios } from "axios";
import icon from "../../assets/img/Notificationicon.svg"
import { BASE_URL } from "../../utils/request";
import '../NotificationButton/styles.css'

type Props = {
    saleId: number;

}

function handleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        console.log("SUCESSO");
    });
}

function NotificationButton({saleId}: Props) {
    return(
        <div className="redbtm" onClick={()=> handleClick(saleId)}>
            <img src={icon} alt="notificar"/>
        </div>
    )
}
        
  export default NotificationButton