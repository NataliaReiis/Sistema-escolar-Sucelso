import React from 'react';
import BG from '../assets/BG.jpg';
import LogoLogin from '../assets/Logo-Sucelso-login.png';
import Button from '../components/Button';
import { Link } from "react-router-dom";
import { Formik, Field, Form } from 'formik';

export default function Login(){
    return(
        <>
            <section className="login-section">
                <div className="bg-login">
                    <img src={BG} alt="" />
                </div>
                
                <div className="container-login">
                    <img src={LogoLogin} alt="" />

                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        onSubmit={(Values) => {
                            console.log(Values);
                        }}
                    >
                        <Form>
                            <div className="content-login"> <Field type="email" name="email" placeholder='E-mail'/> <Field type="password" name="password" placeholder='Senha' /></div>

                            <div className="content-utils"> <Field type="checkbox" name="rememberMe" /> <label htmlFor="rememberMe"> Lembre-me</label> <a href="">Esqueceu a senha ?</a> </div> 

                            <div className="content-login-anotherUser"> <Link to="" style={{color:'#0D3345' , fontSize:'14px'}}> <Link to="/dashboard-coordenador">Login Coordenador</Link>  / <Link to="/dashboard-professor">Professor</Link></Link></div>
                            
                            <Button  type="button submit" text="Entrar" size="medium" color="primary">Entrar</Button>

                        </Form>
                    </Formik>
                </div>
            </section>
        </>
    )
}
