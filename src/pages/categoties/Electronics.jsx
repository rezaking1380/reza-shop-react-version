import { useEffect, useState } from "react";
// import CircleLoader from "react-spinners/CircleLoader";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Electronics() {
  const [categories, setcategories] = useState();

  const fetcher = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/electronics?limit=3"
    );
    const data = await response.json();
    setcategories(data);
  };

  useEffect(() => {
    fetcher();
  }, [ ]);
  return (
    <>
      {!categories ? (
        <div></div>
      ) : (
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16  lg:max-w-none">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900">
                    Electronics
                  </h2>
                </div>
                <Link to={"/category/electronics"}>
                  <div className="flex items-center">
                    <div className="mr-3 text-xl">
                      <div> more </div>
                    </div>
                    <div>
                      <FaAngleRight className="text-xl" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {categories.map((callout) => (
                  <Link to={`product/${callout.id}`} key={callout.id}>
                    <div key={callout.title} className="group relative">
                      <div
                        className="relative w-full h-80 bg-white rounded-lg 
              overflow-hidden group-hover:opacity-75 sm:aspect-w-2 
              sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 flex justify-center p-5"
                      >
                        <img
                          src={callout.image}
                          alt={callout.title}
                          className=" h-full object-center"
                        />
                      </div>
                      <h3 className="mt-6 text-sm text-gray-500">
                        <a href={callout.href}>
                          <span className="absolute inset-0" />
                          {callout.name}
                        </a>
                      </h3>
                      <p className="text-base font-semibold text-gray-900 text-center">
                        {callout.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
