
export async function obtenerPage(id) {
	const URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/pages/${id}`;
	const laPagePedida = await fetch(URI_IDI_PAGE)
		                        .then((res) => res.json())
		                        .then(pagina => {
                                        console.log(pagina.content.rendered);
                                        return pagina;
                                    })
		                        .catch((e) => e);
	return laPagePedida;
}

const obtiene_pagina = {
	obtenerPage,
};
export default obtiene_pagina;
