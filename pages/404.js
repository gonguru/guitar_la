import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
  return (
    <Layout>
        <div className={styles.not_found}>
            <h2 className='heading'>Página no encontrada</h2>
            <Link href="/">Volver a inicio</Link>
        </div>
    </Layout>
  )
}

export default NotFound