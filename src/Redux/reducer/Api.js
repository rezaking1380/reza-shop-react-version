

export const categories = () => async (dispatch) => {
    dispatch({ type: 'All_category_Request' })
    await fetch('https://fakestoreapi.com/products/categories')
        .then(res => dispatch({ type: 'All_category_Success', category: res.data }))
        .catch(err => dispatch({ type: 'All_category_Fail', category: err.message }))
}

export const allproduct = () => async (dispatch) => {
    dispatch({ type: 'All_product_Request' })
    await fetch('https://fakestoreapi.com/products')
        .then(res => dispatch({ type: 'All_product_Success', products: res.data }))
        .catch(err => dispatch({ type: 'All_product_Fail', products: err.message }))
}

export const register = (username, password) => async (dispatch) => {
    dispatch({ type: 'REGISTER_REQUEST' })
    await fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        body:JSON.stringify({
            username: username,
            password: password
        })
    }).then(res => dispatch({ type: 'REGISTER_SUCCESS', payload: res }))
        .catch(err => dispatch({ type: 'REGISTER_FAIL', payload: err.response.msg }))
}