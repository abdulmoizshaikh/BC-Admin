import { actionTypes, apiCreator } from "../common";


export const addProduct = (body) => dispatch => {
    return apiCreator(
        { method: 'POST', endPoint: '/product/add', body: body },
        actionTypes.ADD_PRODUCT,
        dispatch)
}



export const getProductsCategories = () => dispatch => {
    return apiCreator(
        { method: 'GET', endPoint: '/product/categories' },
        actionTypes.GET_PRODUCT_CATEGORIES,
        dispatch)
}
