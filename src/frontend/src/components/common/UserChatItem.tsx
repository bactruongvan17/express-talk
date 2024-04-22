import AvatarSample from "../../assets/images/avatar-sample.jpg";

export default function UserChatItem() {
    return (
        <div className="user-item">
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
            }}>
                <img className="avatar" alt="User" src={AvatarSample} />
                <div className="info">
                    <span className="name">David Peters</span>
                    <span className="text">Hi, are you available tomorrow?</span>
                </div>
            </div>
            <div className="chat-info">
                <span className="last-time">10:35 AM</span>
                <span className="new-message">3<sup>+</sup></span>
            </div>
        </div>
    );
}