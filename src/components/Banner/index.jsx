import Button from '../Button'
import styles from './Banner.module.css'
import logo from './LogoMain.png'

const Banner = () => {
  return (
    <header className={styles.header}>
        <div>
            <img src={logo} alt='Logo de Alura Flix' />
        </div>
        <div className={styles.buttonsContainer}>
            <Button color= {"#2271D1" } background={"rgba(0, 0, 0, 0.90)"} shadow >
              Home
            </Button>
            <Button color= {"#FFF"} background={"transparent"} >
              New Video
            </Button>
        </div>
    </header>
  )
}

export default Banner
