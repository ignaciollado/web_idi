import { useState, useEffect } from 'react'
import '../css/politicadecookies.css'

export default function  PoliticaDeCookies (props)  {
    const {id} = props;
    const URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/pages/${id}`;
    const [politicadecookies, setPoliticaDeCookies] = useState()
    
    const peticionGET = async ()=>{
        const parsedPage = await fetch(URI_IDI_PAGE)
                                .then (response => response.json())
                                .then (data => data.content.rendered);
        setPoliticaDeCookies(parsedPage)    
    }

    useEffect(()=>{peticionGET()},[])
    return (
        <div className="politicadecookies__grid" dangerouslySetInnerHTML={ {__html:  politicadecookies} } />
    )
}