
const addproductinitialState = {
  status: "idel",
  productIds: [],
  count: 0,
};

export const Addproduct = (state = addproductinitialState, action) => {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        count: state.count + 1,
      };

    case "dec":
      return {
        ...state,
        count: state.count - 1,
      };
    case "Add_product_id":
      return {
        ...state,
        productIds: [
          ...state.productIds,
          {
            id: action.id,
            image: action.image,
            title: action.title,
            price: action.price,
          },
        ],
        status: (state.status = "success"),
      };
    case "Remove_product":
      const newCart = state.productIds.filter((item) => item !== action.id);
      return {
        ...state,
        productIds: [...newCart],
      };
    case "Shop_successfull":
      return {
        ...state,
        productIds: [],
        count: 0,
      };

    default:
      return state;
  }
};

const allproductinitialstate = {
    allproduct: [],
    status: 'idel',

}

export const Allproduct = (state= allproductinitialstate,action) => {
    switch (action.type) {
        case "All_product_Request":
      return {
        ...state,
        status: 'loading',
      };
      case "All_product_Success":
      return {
        ...state,
        allproduct: action.products,
        status: 'success',
      };
      case "All_product_Fail":
      return {
        ...state,
        allproduct: action.products,
        status: 'error',
      };
        default:
            return state
    }
}

const categoryinitialstate = {
    category: [],
    status: 'idel',

}

export const category = (state= categoryinitialstate,action) => {
    switch (action.type) {
        case "All_category_Request":
      return {
        ...state,
        status: 'loading',
      };
      case "All_category_Success":
      return {
        ...state,
        category: action.category,
        status: 'success',
      };
      case "All_category_Fail":
      return {
        ...state,
        category: action.category,
        status: 'error',
      };
        default:
            return state
    }
}



