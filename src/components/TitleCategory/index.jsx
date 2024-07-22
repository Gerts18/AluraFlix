import styles from './TitleCategory.module.css'

const TitleCategory = ({children, color}) => {
  return (
    <h1 className={styles.texto} style={{backgroundColor: `${color}`}}>
        {children}
    </h1>
  )
}

export default TitleCategory