'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styles from './css/style.module.css'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("erro no e-mail ou senha!")
      }
      push('/pages/dashboard');
    } catch {
      toast.error("erro na aplicação")
      refresh();
    }
  }
  return (
    <div>

      <form className={styles.register} onSubmit={handlerLogin}>
      <h1>Login</h1>


        <label id={styles.label}>Email</label>
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input><br/>



        <label id={styles.label}>Senha</label>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input><br/>


        <button id={styles.button}>Entrar</button>

        
      </form>
      <ToastContainer />
    </div>
  )
}
