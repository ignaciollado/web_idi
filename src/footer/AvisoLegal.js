import React from 'react'
import { useState, useEffect } from 'react'
// import pageDeWordPress from '../api_rest/obtenerUnaPAGE'
import '../css/avisolegal.css'

export default function AvisoLegal(props) {
    const {id} = props;
    const URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/pages/${id}`;
    const [avisoLegal, setAvisoLegal] = useState()
    
    const peticionGET = async ()=>{
        const parsedPage = await fetch(URI_IDI_PAGE)
                                .then (response => response.json())
                                .then (data => {
                                    return data.title.rendered + data.content.rendered;
                                    });
                                setAvisoLegal(parsedPage)    
    }
    useEffect(()=>{peticionGET()},[])
    return (
        <div className="avisoLegal__grid" dangerouslySetInnerHTML={ {__html:  avisoLegal} } />
    )
}
