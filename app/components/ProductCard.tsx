import Image from "next/image";

import Button from "./Button";

interface ProductCardProps {
  discount: string;
  deliveryTime: string;
  imageUrl: string;
  productName: string;
  quantity: string;
  price: number;
  originalPrice: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  discount,
  deliveryTime,
  imageUrl,
  productName,
  quantity,
  price,
  originalPrice,
}) => {
  return (
    <div className="max-w-[200px] p-3 border rounded-lg shadow-md hover:shadow-lg bg-white relative overflow-hidden">
      {/* Discount Badge */}
      <div className="bg-blue-500 text-white text-xs font-semibold px-2 py-2 absolute top-0 left-0 flex flex-col z-10">
        <span>{discount}</span> <span>OFF</span>
      </div>

      {/* Product Image */}
      <div className="w-full ">
        <div className="relative  h-20 mt-2 z-0 rounded-md overflow-hidden w-[50%] m-auto">
          <Image
            src={imageUrl}
            alt={`${productName} ${imageUrl}`}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>

      {/* Delivery Time */}
      <p className="text-gray-500 text-xs mt-2">🕒 {deliveryTime}</p>

      {/* Product Name */}
      <h2 className="text-sm font-semibold mt-1 line-clamp-2">{productName}</h2>

      {/* Quantity */}
      <p className="text-gray-600 text-sm mt-1">{quantity}</p>

      {/* Price */}
      <div className="flex items-center justify-between mt-2">
        <div>
          <p className="text-lg font-semibold">₹{price}</p>
          <p className="text-gray-400 line-through text-sm">₹{originalPrice}</p>
        </div>
        <Button buttonType="secondary">Add</Button>
      </div>
    </div>
  );
};

export default ProductCard;
