import Menu from "../../components/student/Menu"
import { Link } from "react-router-dom";
import Chat from "../../assets/chat.png"
import { AiOutlineUser } from "react-icons/ai";


export default function Room(){
    return(
        <>
        <section className="display room">
            <Menu />   
            <div className="container-video">
                <h1>ROOM - Analise Orientada a Objetos</h1>
                <div className="title-room">
                    <p>Aula 1 - Diagramas e o papel no desenvolvimento de sistemas</p>
                    <p>08/09/2023</p>
                </div>
                <div className="links">
                    <Link to="/home-aluno">Voltar</Link>
                    <Link to="">Proximo</Link>   
                </div>
                <div className="content-video">
                    <p>Aqui vai ser inserido o video</p>
                </div>
                <div className="Forum">
                    <h1>Forum</h1>
                    <div className="nova-postagem">
                        Texto
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="duvidas-frequentes">
                        <h1>Duvidas recentes</h1>
                        <span><AiOutlineUser /></span>
                        <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                    </div>
                </div>
            </div>
            <div className="chat">
                <img src={Chat} alt="" />
            </div>
        </section>
        
        </>
    )
}