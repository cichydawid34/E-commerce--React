import router from "next/router";

type Props = {};

export default function ProductsList(Props: any) {
  const productClick = (id: number) => {
    router.replace(`/product/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-28 mt-10 gap-10">
      {Props.data.map((product: any) => (
        <div
          className="text-black shadow-lg p-5 pt-2  flex flex-col items-center gap-2 hover:scale-105 hover  transition-all"
          onClick={() => productClick(product.id)}
        >
          <img src={product.image} className="aspect-square lg:h-60" />
          <h3 className="text-lg self-start mt-4  text-clip">
            {product.title}
          </h3>
          <p className="text-lg ml-0 self-start font-bold border-b-2 text-black ">
            ${product.price}
          </p>
        </div>
      ))}
    </div>
  );
}
