import Button from "../Button/"

export default function ModelGrades(props){
    return(
        <>
            <div className="grades-model">
                <h1>{props.title}</h1>
                <hgroup>
                    <p>Média Final</p>
                    <p>{props.nota}</p>
                </hgroup>
                <hgroup>
                    <p>Status do Aluno</p>
                    <p>{props.situacaoAluno}</p>
                </hgroup>
                <Button text="Ver Avaliações" color="primary" size="small"/>
            </div>
        </>
    )
}