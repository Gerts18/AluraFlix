import styles from './Banner.module.css'
import logo from './LogoMain.png'

const Banner = () => {
  return (
    <header className={styles.header}>
        <div>
            <img src={logo} alt='Logo de Alura Flix' />
        </div>
        <div className={styles.buttonsContainer}>
            <button>Home</button>
            <button>Nuevo Video</button>
        </div>
    </header>
  )
}

export default Banner
