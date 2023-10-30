import Modal from "../../components/Modal";
import { useState } from "react";
import Button from "../../components/Button";
import { Formik, Field, Form } from 'formik';

export default function RegisterDiscipline(props){

  const [isOpen, setIsOpen] = useState(false);
 
  return(
    <>
      <section className="modal-layout"> 
      {props.icon}
        <h1>{props.titleModal}</h1>
        <button className="button-open" onClick={() => setIsOpen(!isOpen)}>Novo cadastro</button>
        <Modal isOpen={isOpen}>
            <button className="button-close" onClick={() => setIsOpen(!isOpen)}>X</button>

            <h1>Novo cadastro de Turma</h1>
            <Formik
            initialValues={{
              nomeTurma: '',
              alunos: '',
          
            }}
            onSubmit={(Values) =>{
              console.log(Values);
            }}
          >
          <Form>
            <div className="registro">
              <div> <label htmlFor="nomeTurma">Nome da Turma </label><Field type="text" name="nomeTurma" id="nomeTurma"></Field></div>
              <div> <label htmlFor="alunos">Alunos: </label> <Field type="text" name="alunos" id="alunos"></Field> </div>

              <Button onclick={""} size={"medium"} color={"secondary"} text={"CADASTRAR"}></Button>
            </div>
          </Form>
        </Formik>
        </Modal>
      </section>
       
    </>
  );
};

