import icon from '../../src/assets/img/Notification-icon.svg'
import './NotificationButton/styles.css'

function NotificationButton() {
    return(
        <div className="redbtm">
            <img src={icon} alt="notificar"/>
        </div>
    )
}
        
  export default NotificationButton