import styles from './Category.module.css'
import TitleCategory from '../TitleCategory'
import Card from '../Card'

const Category = () => {
  return (
    <section className={styles.section}>
        <TitleCategory color={'#6BD1FF'}>
          Adventures
        </TitleCategory>
        <div className={styles.content}>
          <Card/>
          <Card/>
        </div>
    </section>
  )
}

export default Category