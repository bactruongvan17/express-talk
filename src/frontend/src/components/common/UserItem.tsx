import AvatarSample from "../../assets/images/avatar-sample.svg";

export default function UserItem() {
    return (
        <div className="user-item">
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
        </div>
    );
}