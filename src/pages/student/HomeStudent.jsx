import CarrosselAulasHome from "../../components/student/CarrouselClasses";
import Menu from "../../components/student/Menu"
import {FiFileText } from "react-icons/fi";

export default function HomeAluno(){
return (
    <>
      <section className="display">
        <Menu />   
        <div className="content-home">
            <h1>Seja bem vindo, Aluno!</h1> 
            <div className="span">
                <span>Semestre 2023.1</span>
                <span><FiFileText/> Notas e Avaliações</span>
            </div>
           
            <h2 className="title-carrousel">Analise Orientada a Objetos</h2>
            <div className="carrousel">
                <CarrosselAulasHome  subTitle={"Diagramas e o papel no desenvolvimento de sistemas"} aula={"AULA 1"}/>
                <CarrosselAulasHome  subTitle={"Diagramas e o papel no desenvolvimento de sistemas"} aula={"AULA 2"}/>
                <CarrosselAulasHome  subTitle={"Diagramas e o papel no desenvolvimento de sistemas"} aula={"AULA 3"}/>
                <CarrosselAulasHome  subTitle={"Diagramas e o papel no desenvolvimento de sistemas"} aula={"AULA 4"}/>
            </div>
            <h2 className="title-carrousel">Clean Architecture API</h2>
            <div className="carrousel">
                <CarrosselAulasHome  subTitle={"Diagramas e o papel no desenvolvimento de sistemas"} aula={"AULA 1"} color={"#04A527"}/>
                <CarrosselAulasHome  subTitle={"Diagramas e o papel no desenvolvimento de sistemas"} aula={"AULA 2"} color={"#04A527"}/>
                <CarrosselAulasHome  subTitle={"Diagramas e o papel no desenvolvimento de sistemas"} aula={"AULA 3"} color={"#04A527"}/>
                <CarrosselAulasHome  subTitle={"Diagramas e o papel no desenvolvimento de sistemas"} aula={"AULA 4"} color={"#04A527"}/>
            </div>
        </div>

      

      </section>

        
    </>
    )
}
