import Upload from "../../assets/icons/upload.svg"
import "./MainButton.scss"

export default function MainButton(){
    return(
    <button className = "main-button"><img className = "main-button__icon" src={Upload} />UPLOAD</button>
)
}
