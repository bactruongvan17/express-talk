import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function InputBox() {
    return (
        <div className="input-box">
            <div style={{width: "calc(100% - 60px)"}}>
                <input type="text" className="input" placeholder="Write somthing..."></input>
            </div>
            <div className="icon-send-box">
                <FontAwesomeIcon className="icon" icon={faPaperPlane} />
            </div>
        </div>
    );
}