import Menu from "../../components/student/Menu"
import NotasModel from "../../components/student/ModelGrades"


export default function NotasAvaliacoes(props){
    return(
        <>
        <section className="display ">
            <Menu />   
            <div className="container-grades">
                <h2>Notas e Avaliações</h2>
                <div className="content-grades">
                    <NotasModel title="Analise Orientada a Objetos" nota="10,00" situacaoAluno="APROVADO"/>
                    <NotasModel title="Analise Orientada a Objetos" nota="10,00" situacaoAluno="APROVADO"/>
                    <NotasModel title="Analise Orientada a Objetos" nota="10,00" situacaoAluno="APROVADO"/>
                    <NotasModel title="Analise Orientada a Objetos" nota="10,00" situacaoAluno="APROVADO"/>
                </div>
                
            </div>  
        </section>
       
        </>
    )
}