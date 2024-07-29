import styles from './Card.module.css'
import editIcon from './editIcon.png'
import deleteIcon from './deleteIcon.png'

const Card = (props) => {
    const {color} = props;

    return (
        <figure className={styles.container} style={{ color: color }}>
            <img
                className={styles.imageCard}
                src="https://assets-prd.ignimgs.com/2023/05/17/mission-impossible-dead-reckoning-part-one-ver2-button-1684350230547.jpg" />
            <figcaption className={styles.buttonsContainer}>
                <button className={styles.button}>
                    <img src={deleteIcon} alt="" />
                    Delete
                </button>
                <button className={styles.button}>
                    <img src={editIcon} alt="" />
                    Edit
                </button>
            </figcaption>
        </figure>
    )
}

export default Card