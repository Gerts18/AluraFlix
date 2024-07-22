    import styles from './Banner.module.css'
    import background from './cinema.jpg'

    const Banner = () => {
    return (
        <div className={styles.container} style={{backgroundImage: `url(${background})`}}>
            <div className={styles.info}>
                <h1>Title Category</h1>
                <h2>Title movie</h2>
                <p>Description of the movie</p>
            </div>
            <img src={''} />
        </div>
    )
    }

    export default Banner