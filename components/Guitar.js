import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Guitar.module.css"

const Guitar = ({guitar}) => {
  const { descripcion, image, nombre, precio, url} = guitar
  return (
    <div className={styles.guitar}>
        <Image objectFit="contain" layout="responsive" width={200 } height={350} src={image} alt={nombre}/>
        <div className={styles.content}>
          <h3>{nombre}</h3>
          <p>{descripcion}</p>
          <p>${precio}</p>
          <Link href={`/guitarras/${url}`}>Ver producto</Link>
        </div>
    </div>
  )
}

export default Guitar