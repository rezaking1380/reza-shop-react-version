

export const categories = () => async (dispatch) => {
    dispatch({ type: 'All_category_Request' })
    await fetch('/products/categories')
        .then(res => dispatch({ type: 'All_category_Success', category: res.data }))
        .catch(err => dispatch({ type: 'All_category_Fail', category: err.message }))
}

export const allproduct = () => async (dispatch) => {
    dispatch({ type: 'All_product_Request' })
    await fetch('/products')
        .then(res => dispatch({ type: 'All_product_Success', products: res.data }))
        .catch(err => dispatch({ type: 'All_product_Fail', products: err.message }))
}
