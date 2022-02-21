import React from 'react'
import { useState, useEffect } from 'react';
//import optenerPagina from '../api_rest/obtenerUnaPAGE'
import '../css/politicadeprivacidad.css'

export default function PoliticaDePrivacidad(props) {
    const {id} = props;
    //const dataFromtheApi = optenerPagina.obtienePage({id});
    const URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/pages/${id}`;
    const [politicaPriv, setPoliticaPriv] = useState()
    
    const peticionGET = async ()=>{
        const parsedPage = await fetch(URI_IDI_PAGE)
                                .then (response => response.json())
                                .then (data => data.content.rendered);
                                setPoliticaPriv(parsedPage)    
    }
    useEffect(()=>{peticionGET()},[])
    return (
        <div className="politicadeprivacidad__grid" dangerouslySetInnerHTML={ {__html:  politicaPriv} } />
    )
}
