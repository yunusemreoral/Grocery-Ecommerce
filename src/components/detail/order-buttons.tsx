"use client";

import { FC, useState } from "react"
import { Product } from "@/types";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { addToBasket, checkoutSingleItem } from "@/service/basket-service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
  grocery: Product;
}

const OrderButtons:FC<Props> = ({grocery}) => {
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const [quantity,setQuantity] = useState<number>(0);
  const router = useRouter();

  // sepete ekle
  const handleAddToCart = () => {
    if (quantity < 1 || quantity > grocery.stock) return;

    setIsLoading(true);

    addToBasket(grocery._id, quantity)
    .then(() => {
      setQuantity(0);
router.refresh();
      toast.success(`${quantity} ${grocery.unit} ${grocery.name} sepete eklendi`);
    }).catch(() => {
      toast.error("Ürün sepete eklenemedi");
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  // hemen satım al
  const handleBuyNow = () => {
    if (quantity < 1 || quantity > grocery.stock) return;

    setIsLoading(true);

    checkoutSingleItem(grocery, quantity)
    .then((res) => {
      setQuantity(0);
      window.open(res.url, "_blank");
    })
    .catch((err) => {

    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div>
      {/* miktar seçimi */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center border border-gray-300 rounded">
          <button 
          disabled={quantity === 0}
          onClick={() => setQuantity(quantity - 1)}
          className="cursor-pointer p-3 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
            <FaMinus/>
          </button>

          <span className="px-3 py-2 border-x border-gray-300 min-w-[40px] text-center">
            {quantity}
          </span>

          <button 
          disabled={quantity === grocery.stock}
          onClick={() => setQuantity(quantity + 1)}
          className="cursor-pointer p-3 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
            <FaPlus/>
          </button>
        </div>
      </div>

      {/* butonlar */}
      <div className="flex items-center gap-3 mt-4">
        <button 
        onClick={handleAddToCart}
        disabled={quantity === 0 || isLoading}
        className="flex-1 flex items-center justify-center gap-2 text-green-600 border border-green-600 px-4 py-2 rounded-md hover:bg-green-100 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
          <FaShoppingCart/>
          Sepete Ekle
        </button>

          <button 
          onClick={handleBuyNow}
         disabled={quantity === grocery.stock || isLoading}
          className="flex-1 flex items-center justify-center gap-2 text-white border bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
          Hemen Satın Al
        </button>
      </div>
    </div>
  )
}

export default OrderButtons
