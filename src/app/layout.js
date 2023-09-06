'use client'
import styles from './css/style.module.css'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const metadata = {
  title: 'Register users',
  description: 'Project for class PTAC',
}

export default function RootLayout({ children }) {
  function sair (e) {
    e.preventDefault();
    Cookies.remove('token')
    localStorage.clear('nome')
    refresh()
}

const { push, refresh } = useRouter();

  return (
    <html lang="pt-br">
      <body className={styles.divflex}>
        <div className={styles.navbar}>
          <a  href='/pages/dashboard'><button id={styles.button}>home</button></a>
          <a  href='/pages/register'><button id={styles.button}>register </button></a>
          <a  href='/pages/alterar'><button id={styles.button}>alterar</button></a>
          <button onClick={sair} id={styles.button}>Sair</button>
        </div>
        
        <div className={styles.child}>{children}</div>
        </body>
    </html>
  )
}
