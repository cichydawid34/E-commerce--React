import router from "next/router";
import {FaCartPlus} from 'react-icons/fa'
import Skeleton ,{SkeletonTheme}from "react-loading-skeleton";
type Props = {};

export default function SkeletonProductCard(Props: any) {


  return (
    <SkeletonTheme baseColor="#D3D3D3" highlightColor="#CACACA">
        
        <div
          className="group text-black shadow-lg p-5 pt-2  flex flex-col items-center gap-2 hover:scale-105 hover  transition-all rounded-2xl"   
        >
          <Skeleton  width={300} className="h-48"/>
          <h3 className="text-lg self-start mt-4  text-clip">
          <Skeleton count={1} width={300} height={30}/>
          </h3>
          <div className="ml-0 mt-auto flex self-start w-full">
          <p className="text-lg ml-0 mt-auto self-start font-bold border-b-2 text-black ">
          <Skeleton count={1} width={70} height={30}/>
          </p> 
          </div>
        </div>
        


        
        </SkeletonTheme>
  );
}
