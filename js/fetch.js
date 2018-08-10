async function getProducts(){
    // Enviar la informacion al API
    const reqProducts = new Request(
        'https://my-json-server.typicode.com/paquitotero/cucumbo/products', // Cambiar por tu propia API
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

async function renderMisCosas() {
    let products = await getProducts(); //es la de hasta arriba

    let contenedorCorporal = document.getElementById('corporalProduct'); //el id del contenedor del article
    let articleNode = document.querySelector('#corporalProduct article'); //como css en clases y contenedor

    articleNode.remove();

    products.forEach((referenciaPorProducto) => { //linea 29
        let newArticle = articleNode.cloneNode(true); //linea 32 y true copia todos los hijos
        newArticle.children[0].children[0].src = 'img/corporal/AURA01.jpg';
        contenedorCorporal.appendChild(newArticle);
    }
  );
}



renderMisCosas();
