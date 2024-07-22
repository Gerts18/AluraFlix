import styles from './TitleCategory.module.css'

const TitleCategory = ({children}) => {
  return (
    <div className={styles.texto}>
        {children}
    </div>
  )
}

export default TitleCategory