async function getProducts(){
    // Enviar la informacion al API
    const reqProducts = new Request(
        'https://my-json-server.typicode.com/paquitotero/cucumbo', // Cambiar por tu propia API
        {
            method: 'GET'
        }
    );

    let response = await fetch(reqRestaurants)
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

    return response;
}

async function renderRestaurants() {
    let restaurants = await getRestaurants();

    let restaurantsNode = document.getElementById('restaurantList');
    let articleNode = document.querySelector('#restaurantList article');
    articleNode.remove();

    restaurants.forEach((restaurant) => {
        let newArticle = articleNode.cloneNode(true);
        newArticle.children[0].src = restaurant.img_url;
        newArticle.children[1].children[0].innerText = restaurant.name;
        newArticle.children[1].children[1].innerText = restaurant.category;
        newArticle.children[1].children[2].innerText = restaurant.hour;
        newArticle.children[1].children[3].innerText = 'Envio $' + restaurant.delivery_cost;
        restaurantsNode.appendChild(newArticle);
    }
  );
}



renderRestaurants();
