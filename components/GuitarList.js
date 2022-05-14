import Guitar from "./Guitar"
import styles from "../styles/GuitarList.module.css"

const GuitarList = ({guitars}) => {
  return (
    <div className={styles.list}>
        {guitars.map(guitar => (
            <Guitar guitar={guitar} key={guitar.id}/>
        ))}
    </div>
  )
}

export default GuitarList