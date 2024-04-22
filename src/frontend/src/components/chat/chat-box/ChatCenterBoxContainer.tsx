import UserItem from "../../common/UserItem";
import Conversation from "./part/Conversation";
import InputMessageContainer from "../../common/input-message/InputMessageContainer";

export default function ChatCenterBoxContainer() {
    return (
        <div className="center-chat-container">
            <UserItem />

            <hr style={{
                margin: "16px 0",
                backgroundColor: "#d9d9d9",
                height: "1px",
                border: 0,
            }} />

            <Conversation />

            <InputMessageContainer />
        </div>
    );
}