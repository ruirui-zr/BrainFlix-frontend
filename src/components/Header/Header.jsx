import "./Header.scss"
import Avatar from "../Avatar/Avatar.jsx"
import MainButton from "../MainButton/MainButton.jsx"
import SearchBar from "../SearchBar/SearchBar.jsx"
import Logo from "../Logo/Logo.jsx"

export default function Header(){
    return (
        <header>
            <div className="header">
            <div className="logo-container">
                <Logo />
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