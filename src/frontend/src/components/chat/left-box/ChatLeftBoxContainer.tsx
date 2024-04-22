import AccountBox from "./parts/AccountBox";
import SearchBox from "./parts/SearchBox";
import ListFriendChatBox from "./parts/ListFriendChatBox";

export default function ChatLeftBoxContainer() {
    return (
        <div className="left-chat-container">
            <AccountBox />
            <SearchBox />

            <hr style={{
                margin: "16px 0",
                backgroundColor: "#d9d9d9",
                height: "2px",
                border: 0,
            }} />

            <ListFriendChatBox />
        </div>
    );
}