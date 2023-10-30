import Modal from "../../components/Modal";
import { useState } from "react";
import Button from "../../components/Button";
import { Formik, Field, Form } from 'formik';


export default function RegisterStudent(props){

  const [isOpen, setIsOpen] = useState(false);
  
  return(
    <>
      <section className="modal-layout">
        {props.icon}
        <h1>{props.titleModal}</h1>
        <button className="button-open" onClick={() => setIsOpen(!isOpen)}>Novo cadastro</button>
        <Modal isOpen={isOpen}>
            <button className="button-close" onClick={() => setIsOpen(!isOpen)}>X</button>
            <h1>Novo cadastro de Discente</h1>

          <Formik
            initialValues={{
              nomeCompleto: '',
              email: '',
              cpf: '',
            }}
            onSubmit={(Values) =>{
              console.log(Values);
            }}
          >
            <Form>
              <div className="registro">
                <div> <label htmlFor="nomeCompleto">Nome Completo: </label><Field type="text" name="nomeCompleto" id="nomeCompleto"></Field></div>
                <div> <label htmlFor="email">E-mail: </label> <Field type="email" name="email" id="email"></Field></div>
                <div> <label htmlFor="cpf">CPF:</label> <Field type="text" name="cpf" id="cpf"></Field></div>

                <Button onclick={""} size={"medium"} color={"secondary"} text={"CADASTRAR"}></Button>
              </div>   
            </Form>
          </Formik>
             
        </Modal>
      </section>
       
    </>
  );
};

