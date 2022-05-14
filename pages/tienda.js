import GuitarList from "../components/GuitarList"
import Layout from "../components/Layout"

const Tienda = ({guitars}) => {
  return (
    <Layout pagina="Tienda virtual">
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>
        <GuitarList guitars={guitars}/>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/api/guitarras?populate=imagen`
  const response = await fetch(url)
  const result = await response.json()

  const guitars = result.data.map(guitar => {
    return {
      id: guitar.id,
      nombre: guitar.attributes.nombre,
      descripcion: guitar.attributes.descripcion,
      precio: guitar.attributes.precio,
      url: guitar.attributes.url,
      image: guitar.attributes.imagen.data[0].attributes.url
    }
  })

  return {
    props:{
      guitars
    }
  }
}

export default Tienda