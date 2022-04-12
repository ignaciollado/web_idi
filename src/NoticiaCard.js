import React from 'react'

export default function noticiaCard({pagina}) {
    return (
        <li key={pagina.id}>{pagina.title.rendered}</li>
    )
}

