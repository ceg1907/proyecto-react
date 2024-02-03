
import {CartWidget} from "../components/CartWidget"
import {UserWitget} from "../components/UserWitget"
import {Navbar} from "./Navbar"
import "./Header.css"

export const Header = () => {
    return (
        <header className="box-header">
            <div><span>LOGO</span></div>
            <Navbar />
            <div className='widget-header'>
                <CartWidget />
                <UserWitget />

            </div>
        </header>
    )
}