import { Link } from "react-router-dom"

function Nav(){

    return(
        <nav>
            <h1>Andres</h1>
           <Link to={"/"}> <button>Home</button></Link>
           <Link to={"/projects"}> <button>Projects</button></Link>
           <Link to={"/contact"}> <button>Contacts</button></Link>
           <Link to={"/resume"}> <button>resume</button></Link>
        </nav>
    )
}

export default Nav