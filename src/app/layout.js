import styles from './css/style.module.css'

export const metadata = {
  title: 'Register users',
  description: 'Project for class PTAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={styles.divflex}>{children}</body>
    </html>
  )
}
