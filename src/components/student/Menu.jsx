import { Link } from "react-router-dom";
import Logo from "../../assets/Logo-Sucelso.png"
import IconProfile from "../../assets/icon-profile.png"
import { FiHome, FiGrid, FiFileText, FiLogOut } from "react-icons/fi";

    
const Menu = (props) => {
    return(
    <>
    <section className="menu">
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="dados-aluno">

            <img src={IconProfile} alt="" />
            <h1>Natália Reis</h1>
            <h3>Ciência da computação</h3>

            <div className="dados-content">
                <span>Turma B - </span>
                <span>Matutino - </span>
                <span>22201514</span>
            </div>

        </div>
        <nav>
            <ul>
                <li><FiHome color="white"  /><Link to="/inicio" style={{paddingLeft:"10px", color:"white"}}>Home</Link></li>

                <li><FiGrid color="white"/><Link to="/sala-de-aula"  style={{paddingLeft:"10px", color:"white"}}>Sala Virtual</Link></li>

                <li><FiFileText color="white" /><Link to="/notas"  style={{paddingLeft:"10px", color:"white"}}>Notas e Avaliações</Link></li>
                
                <li><FiLogOut color="white"/><Link to="/"  style={{paddingLeft:"10px", color:"white"}}>Sair</Link></li>
            </ul>
        </nav> 
    </section>
    </>
   )   
}

export default Menu;