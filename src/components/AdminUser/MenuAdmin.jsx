import { Link } from "react-router-dom";
import Logo from "../../assets/Logo-Sucelso.png"
import IconProfile from "../../assets/icon-profile.png"
import { FiHome, FiGrid, FiFileText, FiLogOut, FiVideo } from "react-icons/fi";

    
const MenuAdmin = (props) => {
    return(
    <>
    <section className="menu">
        <div className="logo"> <img src={Logo} alt="" /></div>
        <div className="dados"><img src={IconProfile} alt="" /><h1>{props.name}</h1><h3>{props.office}</h3></div>
        <nav>
            <ul>
                <li><FiHome color="white" /><Link to={props.dashboardLink} style={{paddingLeft:"10px", color:"white"}}>Dashboard</Link></li>
                <li><FiGrid color="white"/><Link to="/consulta"  style={{paddingLeft:"10px", color:"white"}}>Consultar </Link></li>
                <li><FiVideo color="white" /><Link to="/enviar-videos"  style={{paddingLeft:"10px", color:"white"}}>Video aulas</Link></li>
                <li><FiFileText color="white"/><Link to="/lançar-notas"  style={{paddingLeft:"10px", color:"white"}}>Lançar notas</Link></li> 
                <li><FiLogOut color="white"/><Link to="/"  style={{paddingLeft:"10px", color:"white"}}>Sair</Link></li>
            </ul>
        </nav> 
    </section>
    </>
   )   
}

export default MenuAdmin