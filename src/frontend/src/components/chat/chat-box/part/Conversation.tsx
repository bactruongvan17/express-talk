import ReceiverMessageItem from "../../../common/ReceiverMessageItem";
import SenderMessageItem from "../../../common/SenderMessageItem";

export default function Conversation() {
    const messages = [
        {
            date: "April 17",
            messages: ["1", "2"],
        },
        {
            date: "April 18",
            messages: ["1", "2"],
        },
        {
            date: "April 19",
            messages: ["1", "2"],
        },
    ];

    const listItems = messages.map((m) => 
        <div className="conversation-by-date">
            <div className="date">{m.date}</div>
            <div className="list-messages">
                <SenderMessageItem />
                <ReceiverMessageItem />
            </div>
        </div>
    );
    return (
        <div className="conversation">
            {listItems}
        </div>
    );
}