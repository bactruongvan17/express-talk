import UserItem from "../../../common/UserItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export default function AccountBox() {
    return (
        <div className="account-box">
            <UserItem />
            <FontAwesomeIcon className="icon-edit" icon={faPenToSquare} />
        </div>
    );
}