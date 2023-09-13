'use client'
import { ToastContainer, toast } from 'react-toastify'
import styles from '../../css/style.module.css'
import Navbar from '@/app/componentes/navbar'
import 'react-toastify/dist/ReactToastify.css'


export default function register() {
    function registrar (e) {
        e.preventDefault();
        toast.success('formulario registrado com secesso');
    }

    return(
        <div className={styles.divflex}>
            <Navbar />
        <form className={styles.register} onSubmit={registrar}>
            <h1>Registro</h1>

            <div id="blocos">
            <label id={styles.label}>Nome</label>
            <input className={styles.input} type="text" id="btnInput" placeholder="Insira seu Nome" required/>
            </div>

            <div id="blocos">
                <label id={styles.label}>Email</label>
                <input className={styles.input} type="email" id="btnInput" placeholder="Insira seu Email" required/>
            </div>

            <div id="blocos">
                <label id={styles.label}>Senha</label>
                <input className={styles.input} type="password" id="btnInput" placeholder="Insira sua Senha" required/>
            </div>

            <button id={styles.btn} >Cadastrar</button>

        </form>
        <ToastContainer />
        </div>
    )
}