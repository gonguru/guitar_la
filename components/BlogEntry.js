import Link from 'next/link'
import Image from 'next/image'
import { dateFormater } from '../helpers'
import styles from '../styles/Entry.module.css'

const BlogEntry = ({entry}) => {
    //available images = thumbnail, small and medium
    const { id, publishedAt, contenido, titulo, resumen, images, url } = entry
  return (
    <article>
        <Image src={`${images.medium.url}`} layout='responsive' objectFit='cover' width={150} height={150} alt={`imagen blog ${titulo}`}/>
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{dateFormater(publishedAt)}</p>
            <p>{resumen}</p>
            <Link href={`/blog/${url}`}>Leer entrada</Link>
        </div>
    </article>
  )
}

export default BlogEntry