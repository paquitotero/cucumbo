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

    let contenedorCorporal = document.getElementById('corporalProducts'); //el id del contenedor del article
    let articleNode = document.querySelector('#corporalProducts article'); //como css en clases y contenedor

    articleNode.remove();

    products.forEach((referenciaPorProducto) => { //linea 29
        let newArticle = articleNode.cloneNode(true); //linea 32 y true copia todos los hijos
        newArticle.children[0].children[0].src = 'img/corporal/AURA01.jpg';
        newArticle.children[0].children[1].innerText = referenciaPorProducto.name; //los parentesis linea 36
        newArticle.children[0].children[2].innerText = referenciaPorProducto.price;
        contenedorCorporal.appendChild(newArticle);
    }
  );
}

renderMisCosas();

async function renderMisCosas2() {
    let products = await getProducts(); //es la de hasta arriba

    let contenedorMaquillaje = document.getElementById('facialProducts'); //el id del contenedor del article
    let articleNode = document.querySelector('#facialProducts article'); //como css en clases y contenedor

    articleNode.remove();

    products.forEach((referenciaPorProducto) => { //linea 29
        let newArticle = articleNode.cloneNode(true); //linea 32 y true copia todos los hijos
        newArticle.children[0].children[0].src = 'img/maquillaje/paletas.jpg';
        newArticle.children[0].children[1].innerText = referenciaPorProducto.name; //los parentesis linea 36
        newArticle.children[0].children[2].innerText = referenciaPorProducto.price;
        contenedorMaquillaje.appendChild(newArticle);
    }
  );
}

renderMisCosas2();
