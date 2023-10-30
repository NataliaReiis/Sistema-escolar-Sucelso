import MenuAdmin from "../../components/AdminUser/MenuAdmin"


export default function Query(){
    return(
        <>
            <section  className="dashboard">
            <MenuAdmin name="Coordenador Celso" office="Coordenador de  Tecnologia da Informação"  dashboardLink="/dashboard-coordenador" />
    
                <div>
                  <h1>Filtro de busca:</h1>
                  <select name="" id="">
                    <option value="">Aluno</option>
                    <option value="">Curso</option>
                    <option value="">Turma</option>
                    <option value="">Professor</option>
                  </select>
                </div>
            </section>
        </>
    )
}

