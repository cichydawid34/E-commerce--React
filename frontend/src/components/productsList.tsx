import router from "next/router";
import {FaCartPlus} from 'react-icons/fa'
type Props = {};

export default function ProductsList(Props: any) {
  const productClick = (id: number) => {
    router.replace(`/product/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-28 2xl:mx-[15%] xl:mx-14 mt-10 gap-10">
      {Props.data.map((product: any) => (
        <div
          className="group text-black shadow-lg p-5 pt-2  flex flex-col items-center gap-2 hover:scale-105 hover  transition-all rounded-2xl"
          onClick={() => productClick(product.id)}
        >
          <img src={product.image} className="aspect-square lg: h-48" />
          <h3 className="text-lg self-start mt-4  text-clip">
            {product.title}
          </h3>
          <div className="ml-0 mt-auto flex self-start w-full">
          <p className="text-lg ml-0 mt-auto self-start font-bold border-b-2 text-black ">
            ${product.price}
          </p>
          <FaCartPlus className="ml-auto mb-1 invisible group-hover:visible hover:scale-125" size={27} color="black"/>
          </div>
        </div>
      ))}
    </div>
  );
}
