import Upload from "../../assets/icons/upload.svg"
import "./MainButton.scss"
import { Link } from 'react-router-dom'

export default function MainButton(){
    return(
        <Link to="/upload" className="link-no-underline">
            <button className = "main-button"><img className = "main-button__icon" src={Upload} />UPLOAD</button>
        </Link>
)
}
