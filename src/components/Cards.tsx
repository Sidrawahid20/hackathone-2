import Image from "next/image"

function Cards(){
    return(
        <main>
    <div className="w-full flex justify-center item-center">
  <div className="w-[80%] h-full">

               {/* Featured products */}
    <div>
       <span className="border-l-gap border-red-500 text-red-500 mb-9 font-bold"></span>
        <h2 className="text w-367 h-42 font-bold mt-5">Featured products</h2>
        </div>
        {/* products */}
        {/* container boxes */}
    <div className="gap-8 flex justify-between relative border rounded mt-5">
       <div>
        <div className="w-[120px] h-[170px] bg-gray-200 flex justify-center item-center">
        <img width="100x" height="100px" src="/Component 8.png" alt="component 8"/></div>
        
            {/* title */}
            <div className="flex flex-col">
                <span className="font-bold pt-3 text-blue-800">Y523201</span>
                <span className="font-bold">$42.00</span>
            </div>
            </div>

       <div>
       <div className="w-[120px] h-[170px] bg-gray-200 flex justify-center item-center">
       <img width="100px" height="100px" src="/component0.png" alt="component0"/></div>
       
          {/* title */}
         <div className="flex flex-col">
          <span className="font-bold pt-3 text-blue-800">Y523201</span>
           <span className="font-bold">$42</span>
            </div>
       </div>

         <div>
         <div className="w-[120px] h-[170px] bg-gray-200 flex justify-center item-center">
         <img width="100px" height="100px" src="component 31.png" alt="component 31"/></div>
            {/* title */}
         <div className="flex flex-col">
          <span className="font-bold pt-3 text-blue-800">Y523201</span>
           <span className="font-bold">$42</span>
            </div>
         </div>
        
           <div>
           <div className="w-[120px] h-[170px] bg-gray-200 flex justify-center item-center">
           <img width="100px" height="100px" src="/component 12.png" alt="component 12"/></div>
           {/* title */}
         <div className="flex flex-col">
          <span className="font-bold pt-3 text-blue-800">Y523201</span>
           <span className="font-bold">$42</span>
            </div>

           </div>
        
</div>
</div>
</div>
<img />
</main>
    )
}
export default Cards
