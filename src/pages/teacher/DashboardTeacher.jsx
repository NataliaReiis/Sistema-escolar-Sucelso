import MenuAdmin from "../../components/AdminUser/MenuAdmin"
import BoxDashTeacher from "../../components/BoxDashTeacher";

import { Link } from "react-router-dom";
import { FiSearch,FiCalendar,FiVideo,FiFileText } from "react-icons/fi";
import {GiAcidTube,GiCoins} from "react-icons/gi"; 


export default function DashboardTeacher(){

    return(
        <>
            <section className="dashboard">
             <MenuAdmin name="Professor Celso" office="Professor de Ciencia e Engenharia da computação" dashboardLink="/dashboard-professor" />
             <div className="container-box">
                <h1>Seja bem vindo, Professor Celso Barreto</h1>
                <div className="infos-start">
                    <p>Semestre 2023.1</p>
                    <span>Meu Dashboard</span>
                    <span><FiCalendar/>Calendario</span>
                </div>
                <div className="content-box">

                  <Link to="/enviar-videos" ><BoxDashTeacher icon={<FiVideo size={"5em"} color="white" />} titleIcon="Publicar Video aula"/></Link> 
                  <Link to="/lançar-notas" ><BoxDashTeacher icon={<FiFileText size={"5em"} color="white" />} titleIcon="Lançar Notas"/></Link> 
                  <Link to="/consulta" ><BoxDashTeacher icon={<FiSearch size={"5em"} color="white" />} titleIcon="Consultas"/></Link> 

                    <span className="span">
                        <GiAcidTube color="white" size="3em"/> 
                        <div className="infos">
                            <h1>Disciplinas</h1>
                            <p>Quantidade de alunos</p>
                            <p>23</p>
                        </div>
                   </span>
                   <span className="span">
                       <GiCoins color="white" size="3em"/>
                       <div className="infos">
                            <h1>Cursos</h1>
                            <p>Quantidade de cursos</p>
                            <p>2</p>
                       </div>
                        
                   </span>
                </div>
          
             </div>
      
        </section>
         
        </>
    )
}