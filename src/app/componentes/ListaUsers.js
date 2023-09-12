import { resolve } from "styled-jsx/css"
import styles from '../css/style.module.css'


export default async function ListaUsers({users}){
    await new Promise((resolve) => setTimeout(resolve, 2000))
        return(
            <div >     

                {users?.map((user, index) =>

                <div key={index} className={styles.card}>
                <h1>{user.name}</h1>
                <h2>{user.password}</h2>
                </div>
                
            )}</div>


        )
        

}