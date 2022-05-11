import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
            <title>Guitar LA | {pagina}</title>
            <meta name="description" content="Sitio web de venta de guitarras"/>
        </Head>
        <Header/>

        {children}

        <Footer />
    </div>
  )
}

export default Layout