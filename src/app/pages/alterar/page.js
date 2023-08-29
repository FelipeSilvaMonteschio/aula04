import styles from '../../css/style.module.css'

export default function alterar() {
    return(
        <form className={styles.register} >
            <h1>Alterar</h1>

            <div id="blocos">
            <label id={styles.label}>Nome</label>
            <input type="name" id="btnInput" placeholder="Insira seu Nome"/>
            </div>

            <div id="blocos">
                <label id={styles.label}>Email</label>
                <input type="email" id="btnInput" placeholder="Insira seu Email" />
            </div>

            <div id="blocos">
                <label id={styles.label}>Senha</label>
                <input type="password" id="btnInput" placeholder="Insira sua Senha" />
            </div>

            <button id={styles.btn}> Alterar</button>

        </form>
    )
}