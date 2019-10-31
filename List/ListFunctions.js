import axios from 'axios';


export const getList = () => {
    return axios
    .get('api/products', {
        headers: {'Content-Type': "application/json"}
    })
    .then(res => {
        var data = []
        Object.keys(res.data).forEach((key) => {
            var val = res.data[key]
            data.push([val.ProductName], val.ProductID)
        })

        return data
    })
}

export const addToList = term => {
    return axios
    .post('api/product', {
        ProductName: term
    },{
        headers: {'Content-Type': "application/json"}
    })
    .then((response) => {
        console.log(response)
    })
}

export const deleteItem = term => {
    return axios
    .delete(`api/product/${term}`,{
        headers: {'Content-Type': "application/json"}
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const updateItem = (term, id) => {
    return axios
    .put(`api/product/${id}`,{
        ProductName: term
    },{
        headers: {'Content-Type': "application/json"}
    })
    .then((response) => {
        console.log(response)
    })
}

