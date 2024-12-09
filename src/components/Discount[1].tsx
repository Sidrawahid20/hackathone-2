
export default function Discount() {
    return (
      <div className="flex items-center justify-center p-10 h-[597px] w-[1214px] mx-auto">
        <div className="relative bg-white shadow-lg rounded-lg flex items-center w-full max-w-[1214px]">
          {/* Left Section */}
          <div className="p-8 w-1/2">
            <div className="text-sm text-gray-600 space-x-3 mb-4">
              <span className="cursor-pointer hover:underline">Wood Chair</span>
              <span className="cursor-pointer hover:underline">Plastic Chair</span>
              <span className="cursor-pointer hover:underline">Sofa Collection</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              20% Discount Of All Products
            </h2>
            <p className="text-gray-700 mb-6">
              Aima Sofa Compact
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✔</span> Material expose like metals
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✔</span> Simple neutral colors
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✔</span> Clear lines and geometric figures
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✔</span> Material oppose like metals
              </li>
            </ul>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600">
              Shop Now
            </button>
          </div>
          {/* Right Section */}
          <div className="w-1/2 flex items-center justify-center relative">
            <div className="rounded bg-pink-100 w-85 h-85 absolute"></div>
            <img
              src="/discount sofa1.png"
              alt="discount sofa1"
              className="w-72 h-72 object-cover"
            />
          </div>
      
        </div>
      </div>
    );
  }
  