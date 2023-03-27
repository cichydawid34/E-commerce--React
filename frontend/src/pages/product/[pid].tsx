import Navbar from "@/components/navbar";
import IProduct from '../../interfaces/product'
export default function ProductDetail() {


  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 pt-12 gap-8 p-24">
        {/* Column 1 */}
        <div className="flex flex-col lg:col-span-2 col-span-4  w-[90%] mt-7 gap-4 ">
          <img
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/512ZY9SCkxL._SL1191_.jpg"
            className="rounded-lg hover:shadow-md p-1"
          />
          <img
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/512ZY9SCkxL._SL1191_.jpg"
            className="rounded-lg hover:shadow-md p-1"
          />
          <img
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/512ZY9SCkxL._SL1191_.jpg"
            className="rounded-lg hover:shadow-md p-1"
          />
        </div>
        {/* Column 2 */}
        <div className="lg:col-span-5 mt-7 col-span-8">
          <img
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/512ZY9SCkxL._SL1191_.jpg"
            className="rounded-lg"
          />
        </div>
        {/* Column 3 */}
        <div className="lg:col-span-5 col-span-12 rounded-xl p-8 flex flex-col gap-2 ">
          <h2 className="text-2xl font-bold">Title Exapmle product name</h2>
          <p className="text-zinc-500 text-sm">
            Brand: <span className="text-black"> Brand example</span>
          </p>

          <div className="flex w-[80%] justify-between my-1 mx-2">
            <p className="text-3xl">$50</p>
          </div>
          <div>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              voluptates excepturi asperiores natus hic rem vel. Cumque pariatur
              provident, enim hic aspernatur vitae, beatae delectus, at
              explicabo autem veniam facere deserunt vel quia perspiciatis
              numquam. Ullam molestias recusandae voluptatibus at repellendus
              totam minus adipisci harum temporibus autem, commodi delectus
              nisi.
            </p>
          </div>
          <div>
            <p className="text-zinc-500 text-sm mt-2">Color:</p>
            <div className="flex">
              <div className="h-11 w-11 bg-black rounded-full border-b-red-600 border-4 border-white hover:scale-105"></div>
              <div className="h-11 w-11 bg-blue-600 rounded-full  border-4 border-white hover:scale-105"></div>
            </div>
          </div>
          <button className="bg-zinc-800 hover:bg-gray-600  text-md text-white p-2 w-[50%] mt-8 ">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
