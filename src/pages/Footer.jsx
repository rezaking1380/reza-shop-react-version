import {useEffect , useState} from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import Loading from "../components/Loading";
export default function Footer() {
    const [categories, setcategories] = useState();
    

  const fetcher = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    setcategories(data);
  };

  
  
  useEffect(() => {
    fetcher();
  }, []);
  return (
     
    <>
    {!categories ? <Loading /> : 
    <div className="w-full bg-slate-900 text-gray-300 px-2">
      <div className="max-w-[1240px] grid-cols-2 mx-auto grid md:grid-cols-4 border-b-2 border-gray-600 py-8 text-center">
        <div>
          <h6 className="font-bold uppercase pt-2 text-lg">Categories</h6>
          <ul>
            {categories.map((category) => (
              <li key={category} className="py-1 text-base">{category}</li>
            ))}
            
            
          </ul>
        </div>
        <div className='text-start'>
          <h6 className="font-bold uppercase pt-2 text-lg">Contact Footer</h6>
          <ul>
            <li className="py-1 text-base">Address:
            <li>
            Cullman ,Frances Ct
            </li>
            </li>
            <li className="py-1 text-base">Email:
            <li>
            kevin@gmail.com
            </li>
            </li>
            <li className="py-1 text-base">Phone:
            <li>
            1-567-094-1345
            </li>
            </li>
            <li className="py-1 text-base">Opening Hours:
            <li>
            Monday - Sunday / 08.00AM - 19.00 (Except Holidays)
            </li>
            </li>
          </ul>
        </div>
        
        <div className="col-span-2 pt-8 md:pt-2 md:mr-3">
          <p className="font-bold uppercase text-lg">Subscribe our newsletter</p>
          <p className="py-4 text-base">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email .."
            />
            <button className="bg-amber-400 border-none rounded-md text-white p-2 mb-4">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4  mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="pt-4">Copyright © 2022 RezaNangir</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <a className="hover:text-amber-400" href="#">
            <FaFacebook />
          </a>
          <a className="hover:text-amber-400" href="#">
            <FaInstagram />
          </a>
          <a className="hover:text-amber-400" href="#">
            <FaTwitch />
          </a>
          <a className="hover:text-amber-400" href="#">
            <FaGithub />
          </a>
          <a className="hover:text-amber-400" href="#">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
    }
    
    </>
    
  );
}