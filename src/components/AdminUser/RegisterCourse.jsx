import Modal from "../../components/Modal";
import { useState } from "react";
import Button from "../../components/Button";
import { Formik, Field, Form } from 'formik';

export default function RegisterCourse(props){
    
  const [isOpen, setIsOpen] = useState(false);

  return(
    <>
      <section className="modal-layout">
        {props.icon}
        <h1>{props.titleModal}</h1>
        <button className="button-open" onClick={() => setIsOpen(!isOpen)}>Novo cadastro</button>
        <Modal isOpen={isOpen}>
            <button className="button-close" onClick={() => setIsOpen(!isOpen)}>X</button>

            <h1>Novo cadastro de curso</h1>

            <Formik
            initialValues={{
              nomeCurso: '',
              area: '',
              carga: '',
            }}
            onSubmit={(Values) =>{
              console.log(Values);
            }}
          >
            <Form>
            <div className="registro">

              <div> <label htmlFor="nomeCurso">Nome do curso: </label> <Field type="text" name="nomeCurso" id="nomeCurso"></Field> </div>
              <div> <label htmlFor="area">Area </label> <Field type="text" name="area" id="area"></Field> </div>
              <div> <label htmlFor="carga">Carga Horaria</label><Field type="number" name="carga" id="carga"></Field> </div>

              <Button onclick={""} size={"medium"} color={"secondary"} text={"CADASTRAR"}></Button>
            </div>        
            </Form>
          </Formik>
        </Modal>
      </section>
       
    </>
  );
};

