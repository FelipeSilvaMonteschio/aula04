import { resolve } from "styled-jsx/css"
import styles from '../css/style.module.css'


export default async function ListaUsers({users}){
    await new Promise((resolve) => setTimeout(resolve, 2000))
        return(
            <div className={styles.cardconteiner}>     

                {users?.map((user, index) =>

                <div key={index} className={styles.card}>
                <h1 id={styles.name}>{user.name}</h1>
                <h2 id={styles.password}>{user.password}</h2>
                </div>
                
            )}</div>


        )
        

}