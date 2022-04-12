import React from 'react'
import { useState, useEffect } from 'react';
import './css/noticias.css'

export default function Noticias(props) {
    const totalPaginas = 4;
    const URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/posts?_fields[]=content.rendered&_fields[]=link&_fields[]=title.rendered&_fields[]=date&_fields[]=id&per_page=${totalPaginas}`;
    const [noticias, setNoticias] = useState()
    
    //const dataFromtheApi = await obtenerNoticias.obtienePage(totalPaginas);
    
    const peticionGET = async ()=>{
        const response = await fetch(URI_IDI_PAGE)
        const responseJSON = await response.json()
        setNoticias(responseJSON)          
    }

    useEffect(()=>{peticionGET()},[])

    return (
        <div className="noticiagrid">
        <ul>
            {
                !noticias ? 'Cargando...':
                noticias.map((noticia,index)=>{return <li><a href={noticia.id}>{noticia.title.rendered}</a>{noticia.link}{noticia.date}</li>})
            }
        </ul>    
        </div>
    )
}
