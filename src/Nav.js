import { Link } from "react-router-dom"
export default function NavBar(){
    return(

        <div>
        <nav className="nav">
        <Link className="nav-link active" to='/'>Calculator</Link>
        <Link className="nav-link active" to='/contact-us'>Contact Us</Link>
      
        </nav>
                </div>
   
    )
}