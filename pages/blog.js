import Layout from '../components/Layout'
import BlogEntry from '../components/BlogEntry'
import styles from '../styles/Blog.module.css'

const Blog = ({entries}) => {
  return (
    <Layout pagina="Blog">
        <main className='contenedor'>
          <h2 className='heading'>Blog</h2>
          <div className={styles.entries}>
            {
              entries.map(entry => <BlogEntry key={entry.id} entry={entry}/>)
            }
          </div>
        </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/api/blogs?populate=*`
  const response = await fetch(url)
  const result = await response.json()
  const entries = result.data.map(entry => {
    return {
      id: entry.id,
      url: entry.attributes.url,
      publishedAt: entry.attributes.publishedAt,
      contenido: entry.attributes.contenido,
      titulo: entry.attributes.titulo,
      resumen: entry.attributes.resumen,
      images: entry.attributes.imagen.data.attributes.formats
    }
  })

  return {
    props: {
      entries
    }
  }
}

export default Blog