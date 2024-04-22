import ReceiverMessageItem from "../../../common/ReceiverMessageItem";
import SenderMessageItem from "../../../common/SenderMessageItem";

export default function Conversation() {
    return (
        <div className="conversation">
            <div className="conversation-by-date">
                <div className="date">April 19</div>
                <div className="list-messages">
                    <SenderMessageItem />
                    <ReceiverMessageItem />
                </div>
            </div>
        </div>
    );
}