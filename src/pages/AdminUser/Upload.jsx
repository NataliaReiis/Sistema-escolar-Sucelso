import MenuAdmin from "../../components/AdminUser/MenuAdmin"


export default function Upload(){
    return(
        <>
            <section  className="dashboard">

                 <MenuAdmin name="Coordenador Celso" office="Coordenador de  Tecnologia da Informação" dashboardLink="/dashboard-coordenador" />

                <div className="upload">
                    <h1>Enviar video Aula</h1>
                    <div className="container-video">
                        <div className="video">
                            <input type="file" name="arquivo" />
                        </div>
                        <div className="content-options">
                            <div className="title-video">
                                <label htmlFor="">Título</label>
                                <input type="text" />
                            </div>

                            <div className="options-course">
                                <label htmlFor="">Curso</label>
                                <select name="" id="">
                                    <option value="">Ciência da computação</option>
                                    <option value="">Engenharia da computação</option>
                                </select>
                            </div>

                            <div className="options-class">
                                <label htmlFor="">Turma</label>
                                <select name="" id="">
                                    <option value="">Turma A</option>
                                    <option value="">Turma B</option>
                                    <option value="">Turma C</option>
                                </select>
                            </div>
                        </div>
                            
                    </div>
                    <div className="content-textarea">
                            <label htmlFor="">Descrição</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                         </div>

                  
                </div>
            </section>
        </>
    )
}