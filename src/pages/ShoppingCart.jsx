import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import Loading from "../components/Loading";
import Swal from "sweetalert2";

export default function Shoping() {
  const dispatch = useDispatch();

  const productShop = useSelector((state) => state.Addproduct.productIds);
  const countShop = useSelector((state) => state.Addproduct.count);

  const subtotal =
    productShop &&
    productShop
      .reduce((total, item) => (total += Number(item.price)), 0)
      .toFixed(2);

  function handelclick(e) {
    e.preventDefault();

    if (productShop.length !== 0) {
      Swal.fire({
        icon: "success",
        title: "Thank You",
        text: "Your purchase was successful",
      });
      dispatch({ type: "Shop_successfull" });
    } else {
      Swal.fire({
        icon: "info",
        title: "Not products !",
        text: "Please select a product",
      });
    }
  }

  return (
    <>
      {productShop ? (
        <div className="w-full pt-20">
          <div className="w-full">
            <span className="text-xl font-bold ml-5">Shopping Cart</span>
            {countShop ? (
              <ul className="my-6 divide-y divide-gray-200 pb-24 max-w-5xl mx-auto">
                {productShop.map((product) => (
                  <li className="flex items-center justify-between mx-3 md:mx-4 my-3 flex-col sm:flex-row">
                    <div className="flex items-center mt-3">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-contain object-center"
                        />
                      </div>
                      <Link
                        to={`product/${product.id}`}
                        className="ml-3 text-lg font-medium"
                      >
                        {product.title}
                      </Link>
                    </div>
                    <div className="flex items-center my-4 sm:my-2">
                      <div className="mx-4">
                        <span className="text-lg font-bold mb-3">
                          ${product.price}
                        </span>
                      </div>
                      <div>
                        <button
                          onClick={() => (
                            dispatch({
                              type: "Remove_product",
                              id: product,
                            }),
                            dispatch({ type: "dec" })
                          )}
                          type="button"
                          className="font-medium text-amber-400 hover:text-red-500 px-4"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <span className="flex justify-center items-center text-xl font-semibold h-[70vh]">
                  Empty...
                </span>
              </div>
            )}
            <div className="flex items-center fixed bottom-0 bg-gray-100 py-5 justify-around w-full">
              <div>
                <span className="text-lg font-medium">Subtotal :</span>
                <span className="md:ml-5 font-bold text-lg">${subtotal}</span>
              </div>
              <div>
                <button
                  onClick={(e) => handelclick(e)}
                  className="flex items-center justify-center rounded-md border border-transparent bg-amber-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-400"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
