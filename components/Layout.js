import Navbar from "./Navbar"
import { useEffect } from "react"

const Layout = ({children, footer=true}) => {

    return (
        
    <>
    <Navbar />
    <main className="container py-4">
        {children}
    </main>
</>
    )
}

export default Layout;