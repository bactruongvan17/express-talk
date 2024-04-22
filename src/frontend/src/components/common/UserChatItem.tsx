import AvatarSample from "../../assets/images/avatar-sample.svg";

export default function UserChatItem() {
    return (
        <div className="user-item user-chat-item">
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
            }}>
                <div className="avatar">
                    <img alt="User" src={AvatarSample} />
                </div>
                <div className="info">
                    <span className="name">David Peters</span>
                    <span className="text">Hi, are you available tomorrow?</span>
                </div>
            </div>
            <div className="chat-info">
                <span className="last-time">10:35 AM</span>
                <span className="new-message">99</span>
            </div>
        </div>
    );
}