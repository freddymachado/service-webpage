import Navbar from "./Navbar"
import { useEffect } from "react"

const Layout = ({children, footer=true}) => {

    return (
        
    <>
    <Navbar />
    <main className="container py-4">
        {children}
    </main>
    { footer && (
        
        <footer className="bg-primary text-light text-center">
            <div className="container p-4">
                <h1>&copy; Servicios BABASI 888 C.A.</h1>
                <p>2012 - {new Date().getFullYear()}</p>
                <p>Todos los derechos reservados.</p>
            </div>

        </footer>
    )}
</>
    )
}

export default Layout;