import "./Header.scss"
import Avatar from "../Avatar/Avatar.jsx"
import MainButton from "../MainButton/MainButton.jsx"
import SearchBar from "../SearchBar/SearchBar.jsx"
import LogoIcon from "../../assets/logo/BrainFlix-logo.svg"
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <header>
            <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <img className="logo" src={LogoIcon} alt="brainflix_logo" />
                </Link>
            </div>
            <div className="tablet__headerbar">
                <div className="mobile__headerbar">
                    <SearchBar />
                    <div className="avatar--mobile">
                        <Avatar />
                    </div>
                </div>
                <MainButton />
                <div className="avatar--tablet">
                    <Avatar />
                </div>
            </div>
            </div>
        </header>
    )
}