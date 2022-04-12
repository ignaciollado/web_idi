/*javaScript para recoger el contenido del formulario de contacto y enviarlo a la ¿¿¿¿API???? que está en la URL baseURL*/

import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:9000",
})

export default instance;
