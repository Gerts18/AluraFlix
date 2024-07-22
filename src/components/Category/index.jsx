import styles from './Category.module.css'
import TitleCategory from '../TitleCategory'

const Category = () => {
  return (
    <section className={styles.section}>
        <TitleCategory color={'#6BD1FF'}>
          Adventures
        </TitleCategory>
        <div className={styles.content}>

        </div>
    </section>
  )
}

export default Category