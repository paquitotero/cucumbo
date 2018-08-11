async function getProducts(category){
    // Enviar la informacion al API
    const reqProducts = new Request(
        'https://my-json-server.typicode.com/paquitotero/cucumbo/products?category=' + category, // Cambiar por tu propia API
        {
            method: 'GET'
        }
    );

    let response = await fetch(reqProducts)
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Something went wrong on api server!');
        }
    })
    .then((response) => {
        return response;
    }).catch((error) => {
        console.error(error);
    });

    console.log(response); //solo para ver que funcione
    return response;
}

async function renderMisCosas(category) {
    let products = await getProducts(category); //es la de hasta arriba

    let contenedorCorporal = document.getElementById(category + 'Products'); //el id del contenedor del article
    let articleNode = document.querySelector('#' + category + 'Products article'); //como css en clases y contenedor

    articleNode.remove();

    products.forEach((referenciaPorProducto) => { //linea 29
        let newArticle = articleNode.cloneNode(true); //linea 32 y true copia todos los hijos
        newArticle.children[0].children[0].src = referenciaPorProducto.img;
        newArticle.children[0].children[1].innerText = referenciaPorProducto.name; //los parentesis linea 36
        newArticle.children[0].children[2].innerText = referenciaPorProducto.price;
        contenedorCorporal.appendChild(newArticle);
    }
  );
}

renderMisCosas('corporal');
renderMisCosas('maquillaje');
