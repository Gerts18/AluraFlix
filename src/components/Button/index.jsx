import styles from "./Button.module.css"

const Button = ({ children,color,background, shadow = false}) => {



    return (
        <button 
            className={styles.button} 
            style={{
                color: color, 
                background: background,
                boxShadow: shadow && "0px 0px 12px 4px inset" 
            }}
        >
            {children}
        </button>
    )
}

export default Button
