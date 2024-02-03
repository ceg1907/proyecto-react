import {Navbar} from "./Navbar"

export const Header = () => {
    return (
        <header>
            <div><span>LOGO</span></div>
            <Navbar />
            <div>
                <button>carrito</button>
                <button>Registrarse</button>
            </div>
        </header>
    )
}