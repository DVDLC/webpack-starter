import "../css/components.css";
import "./styles.css";
import webpacklogo from '../assets/img/webpack-logo.png'

export const saludar = ( nombre ) => {
    

    const h1 = document.createElement( 'h1' ),
        header = document.createElement( 'header' )

    h1.innerText = `Your nav menu`
    header.append(h1)

    document.body.append( header )

    // img
    console.log(webpacklogo)
    const img = document.createElement('img')
    img.src = webpacklogo
    header.prepend(img)
}

