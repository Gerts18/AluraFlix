    import TitleCategory from '../TitleCategory'
import styles from './Banner.module.css'
    import background from './cinema.jpg'

    const Banner = () => {
    return (
        <div className={styles.container} style={{backgroundImage: `url(${background})`}}>
            <div className={styles.info}>
                <TitleCategory>
                    <h1>Front end</h1>
                </TitleCategory>
                <h2>Title movie</h2>
                <p>Description of the movie</p>
            </div>
            <img src={''} />
        </div>
    )
    }

    export default Banner