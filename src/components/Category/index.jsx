import styles from './Category.module.css'
import TitleCategory from '../TitleCategory'
import Card from '../Card'

const Category = ({children, color}) => {
  return (
    <section className={styles.section}>
        <TitleCategory color={color}>
          {children}
        </TitleCategory>
        <div className={styles.content}>
          <Card color = {color} />
          <Card color = {color}/>
        </div>
    </section>
  )
}

export default Category