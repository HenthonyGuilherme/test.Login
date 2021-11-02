import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const  schema = yup.object().shape({
  username: yup.string().required('Verifique se todos os dados foram preenchidos corretamente!'),
  
})

const LoginForm = () => {

  const { register, handleSubmit,formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function handleCadastro(data){
    console.log(data)
    alert('tudo certo')
  }

  function click(){
    alert('foi')
  }


  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit(handleCadastro)}>
        <Input label="Usuário" type="text" name="username" {...register('username') } />
        <span>{errors.username?.message}</span>

        <Input label="Senha" type="password" name="password" />
        <span></span>

        <Button type="submit">Entrar</Button>
      </form>
      <Link className={styles.perdeu} to="/login/perdeu" onClick={() =>click()}>
        Perdeu a Senha? 
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
