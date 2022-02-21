export async function obtieneUnPost(id) {
    const URI_IDI_POST = `http://app.idi.es/wp-json/wp/v2/posts/${id}`;
    const elPostPedido = await fetch(URI_IDI_POST)
    .then(res =>res.json())
    .catch((e)=>{console.log(e)});
        return elPostPedido;
  }	

const obtiene_post = {
    obtieneUnPost,
}

export default obtiene_post;
