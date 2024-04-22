import AvatarSample from "../../assets/images/avatar-sample.svg";

export default function ReceiverMessageItem() {
    return (
        <div className="receiver-message-item">
            <div className="message-group">
                <div className="message">
                    Hi David, have you got the project report pdf?
                </div>
                <div className="message">
                    OK, I will just sent it here. Plz be sure to fill the details by today end of the day
                </div>
            </div>
            <img className="avatar" alt="Avatar" src={AvatarSample} />
        </div>
    );
}