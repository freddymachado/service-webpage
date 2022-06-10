import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from "next/router";


const Navbar = () => {

  const router = useRouter()
  const activeClass = (route) => { return router.pathname === route ? "nav-link active" : "nav-link" }

  return (
    <nav 
    className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Servicios BABASI 8888 C.A.</a>    
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link href="/">
                    <a className={activeClass("/")} aria-current="page">Inicio</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/schedule">
                    <a className={activeClass("/schedule")}>Agendar Servicio</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/contact">
                    <a className={activeClass("/contact")} >Contacto</a>
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar;