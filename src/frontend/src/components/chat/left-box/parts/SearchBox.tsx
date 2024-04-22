import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBox() {
    return (
        <div className="search-box">
            <FontAwesomeIcon className="icon" icon={faSearch} />
            <input type="text" placeholder="Search here..." />
        </div>
    );
}