import Layout from "../components/Layout"
import Image from "next/image"
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
  return (
    <Layout pagina={"Nosotros"}>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" alt="imagen_nosotros" layout="responsive" width={600} height={450}/>
          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros