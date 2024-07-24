import TitleCategory from '../TitleCategory'
import styles from './Banner.module.css'
import background from './cinema.jpg'

const Banner = () => {
    return (
        <div className={styles.container} style={{ backgroundImage: `url(${background})` }}>
            <div className={styles.info}>
                <TitleCategory color={"#6BD1FF"}>
                    Adventures
                </TitleCategory>
                <h2 className={styles.movieTitle}>Kingdom of the planet of the Apes</h2>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque enim aliquam pariatur, ex qui ab ratione inventore nam, necessitatibus libero officia, cumque commodi! Quasi voluptatum expedita vero repellat id!</p>
            </div>
            <div
                className={styles.photo}
                style={{ color: `#6BD1FF`, backgroundImage: `url("https://assets-prd.ignimgs.com/2023/05/17/mission-impossible-dead-reckoning-part-one-ver2-button-1684350230547.jpg")` }}
            ></div>
        </div>
    )
}

export default Banner