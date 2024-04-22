import ChatLeftBoxContainer from "./left-box/ChatLeftBoxContainer";
import ChatCenterBoxContainer from "./chat-box/ChatCenterBoxContainer";
import ChatRightBoxContainer from "./right-box/ChatRightBoxContainer";

export default function Chat() {
    return (
        <div className="chat-container">
            <ChatLeftBoxContainer />
            <ChatCenterBoxContainer />
            <ChatRightBoxContainer />
        </div>
    );
}