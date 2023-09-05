'use client'
import { ToastContainer, toast } from 'react-toastify'
import styles from '../../css/style.module.css'
import 'react-toastify/dist/ReactToastify.css'


export default function register() {


    function registrar (e) {
        e.preventDefault();

        toast.success('formulario registrado com secesso');
    }

    return(
        <div>
        <form className={styles.register} onSubmit={registrar}>
            <h1>Registro</h1>

            <div id="blocos">
            <label id={styles.label}>Nome</label>
            <input type="text" id="btnInput" placeholder="Insira seu Nome"/>
            </div>

            <div id="blocos">
                <label id={styles.label}>Email</label>
                <input type="email" id="btnInput" placeholder="Insira seu Email" />
            </div>

            <div id="blocos">
                <label id={styles.label}>Senha</label>
                <input type="password" id="btnInput" placeholder="Insira sua Senha" />
            </div>

            <button id={styles.btn} >Cadastrar</button>

        </form>
        <ToastContainer />
        </div>
    )
}