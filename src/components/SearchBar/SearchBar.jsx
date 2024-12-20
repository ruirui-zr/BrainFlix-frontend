import Search from "../../assets/icons/search.svg"
import "./SearchBar.scss"

export default function SearchBar(){
    return(
        <>
            <div className="search-container">
                <img className="search-icon" src={Search} alt="Search Icon" />
                <input className="search-input" type="text" placeholder="Search" />
            </div>
        </>    
    )
}