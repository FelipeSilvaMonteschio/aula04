'use client'
import styles from '../css/style.module.css'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Navbar () {
    const { push, refresh } = useRouter();

    function sair (e) {
        e.preventDefault();
        Cookies.remove('token')
        localStorage.clear('nome')
        push('/')
        refresh()
    }

    return (
        <html lang="pt-br">
          <body className={styles.divflex}>
            <div id="minhadiv" className={styles.navbar}>

            <div className={styles.btndiv} >
                <img id={styles.image} src='https://img2.gratispng.com/20180802/xaw/kisspng-clip-art-portable-network-graphics-computer-icons-user-staff-person-man-profile-boss-circle-svg-png-5b62ed560cb369.529707841533209942052.jpg' />
                {localStorage.getItem("Nome")}</div>


              <a  href='/pages/dashboard'><button id={styles.button}>home</button></a>
              <a  href='/pages/register'><button id={styles.button}>register </button></a>
              <a  href='/pages/alterar'><button id={styles.button}>alterar</button></a>
              <button onClick={sair} id={styles.button}>Sair</button>
            </div>
        </body>
    </html>
)
}