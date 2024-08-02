import styles from './Footer.module.css'
import logo from '/img/LogoMain.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <img src={logo} alt="" />
    </footer>
  )
}

export default Footer