import { SHOP_REQUEST, SHOP_SUCCESS, SHOP_FAILURE } from "./ShopType";

export const shopFetchRequest = () => {
    return {
        type: SHOP_REQUEST
    }
}

export const shopFetchSuccess = () => {
    return {
        type: SHOP_SUCCESS
    }
}

export const shopFetchFailure = () => {
    return {
        type: SHOP_FAILURE
    }
}

export const fetchShop = async() => {
    await fetch('https://pickneats.com/swiggyClone/api/user/get_shop.php', {
        method: 'POST',
        body: ({
            latitude: 10.3833,
            longitude: 78.8001,
            shop_id: 5
        }),
        headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        }
    })

        .then((response) =>  response.json())
        .then((json) => console.log('prem' + json));
}




// let data = {
//     "latitude": 10.3833,
//      "longitude": 78.8001, 
//      "shop_id": 5
// }
// console.log(fetch('https://pickneats.com/swiggyClone/api/user/get_shop.php', {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {"Content-type": "application/json; charset=UTF-8"}
// })
//     .then(response => console.log(response.json()) )
//     .then(json => console.log(json))
//     .catch(err => console.log(err)));
// return () => {
//      console.log('ch');
//     fetch('https://pickneats.com/swiggyClone/api/user/get_shop.php', {
//         method: 'POST',
//         headers: { "latitude": 10.3833, "longitude": 78.8001, "shop_id": 5 }
//     })
//         .then(response => console.log(response.json()) )
//         .then(json => console.log(json))
//         .catch(err => console.log(err));

// }