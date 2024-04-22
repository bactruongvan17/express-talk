import UserChatItem from "../../../common/UserChatItem";

export default function ListFriendChatBox() {
    const listItems = [...new Array(6)].fill(0).map(item => 
        <UserChatItem />
    );
    return (
        <div className="list-chat">
            { listItems }
            <div style={{
                fontSize: "12px",
                color: "#959595",
                textAlign: "center",
            }}>Load more...</div>
        </div>
    );
}