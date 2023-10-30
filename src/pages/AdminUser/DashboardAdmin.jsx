import {FiCalendar,FiVideo,FiUsers} from "react-icons/fi";
import {ImPencil, ImBook,ImUsers,ImUserPlus,ImCodepen } from "react-icons/im";
import {GiAcidTube,GiCoins} from "react-icons/gi";

import MenuAdmin from "../../components/AdminUser/MenuAdmin";
import RegisterStudent from "../../components/AdminUser/RegisterStudent";
import RegisterTeacher from "../../components/AdminUser/RegisterTeacher";
import RegisterCourse from "../../components/AdminUser/RegisterCourse";
import RegisterDiscipline from "../../components/AdminUser/RegisterDiscipline";



export default function DashboardAdmin(){
    return(
        <>
        <section className="dashboard">
             <MenuAdmin name="Coordenador Celso" office="Coordenador de  Tecnologia da Informação" dashboardLink="/dashboard-coordenador"  />
             <div className="container-box">
                <h1>Seja bem vindo, Coord. Celso Barreto</h1>
                <div className="infos-start"> <p>Semestre 2023.1</p> <span>Meu Dashboard</span><span><FiCalendar/>Calendario</span> </div>
                
                <div className="content-box">
                   
                   <RegisterStudent icon={<ImPencil size={"4em"} color="white" />} titleModal="Cadastrar Aluno" />
                   <RegisterTeacher icon={<ImUserPlus size={"4em"} color="white"/>} titleModal="Cadastrar Professor" />
                   <RegisterCourse icon={<ImBook size={"4em"} color="white"/>} titleModal="Cadastrar Curso" /> 
                    <RegisterDiscipline icon={<FiUsers size={"4em"} color="white"/>} titleModal="Cadastrar Turma" />
                   <span className="span"> <GiAcidTube color="white" size="2.5em"/> <div className="infos"><h1>Acadêmicos</h1><p>Quantidade de alunos</p> <p>1000</p></div> </span>
                   <span className="span"> <GiCoins color="white" size="3em"/> <div className="infos"> <h1>Cursos</h1> <p>Quantidade de cursos</p> <p>35</p> </div> </span>
                </div>
          
             </div>
      
        </section>        
        </>
    );
};