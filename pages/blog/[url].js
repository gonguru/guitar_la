import Image from "next/image"
import Layout from "../../components/Layout"
import { dateFormater } from '../../helpers'
import styles from '../../styles/Entry.module.css'

const Entry = ({entry}) => {
    const { contenido, images, publishedAt, titulo } = entry
    return (
        <Layout pagina={titulo}>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entry}>
                    <Image src={images.medium.url} layout="responsive" objectFit="cover" alt={`imagen entrada ${titulo}`} width={800} height={600}/>
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{dateFormater(publishedAt)}</p>
                        <p className={styles.text}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/api/blogs`
    const response = await fetch(url)
    const result = await response.json()
    const paths = result.data.map(entry => {
        return {
            params: {url: entry.attributes.url}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params:{url}}) {
    const uri = `${process.env.API_URL}/api/blogs?filters[url][$eq]=${url}&populate=*`
    const response = await fetch(uri)
    const result = await response.json()
    const data = result.data[0]
    const entry = {
        id: data.id,
        publishedAt: data.attributes.publishedAt,
        contenido: data.attributes.contenido,
        titulo: data.attributes.titulo,
        resumen: data.attributes.resumen,
        images: data.attributes.imagen.data.attributes.formats
    }
    return {
        props: {
            entry
        }
    }
}

// export async function getServerSideProps({query:{id}}) {
//     const url = `${process.env.API_URL}/api/blogs/${id}?populate=*`
//     const response = await fetch(url)
//     const result = await response.json()
//     const entry = {
//         id: result.data.id,
//         publishedAt: result.data.attributes.publishedAt,
//         contenido: result.data.attributes.contenido,
//         titulo: result.data.attributes.titulo,
//         resumen: result.data.attributes.resumen,
//         images: result.data.attributes.imagen.data.attributes.formats
//     }
//     return {
//         props: {
//             entry
//         }
//     }
// }

export default Entry