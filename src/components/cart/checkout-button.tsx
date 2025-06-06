"use client";

import { FC, useState } from "react"
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import {checkoutAllItems} from "@/service/basket-service";

interface CheckoutButtonProps {
  isEmpty: boolean;
}

const CheckoutButton:FC<CheckoutButtonProps> = ({isEmpty}) => {
    const [isLoading,setIsLoading] = useState(false);

    const handleCheckout = async () => {
setIsLoading(true);

try {
    const {url} = await checkoutAllItems();
    window.location.href = url;
} catch (error) {
    console.log(error);
} finally {
    setIsLoading(false);
}
    };
    
  return (
    <button 
    disabled={isLoading || isEmpty}
    onClick={handleCheckout}
    className="flex items-center cursor-pointer justify-center gap-2 w-full bg-green-600 text-white px-4 h-10 rounded-md hover:bg-green-700 transition disabled:brightness-75">
      <MdOutlineShoppingCartCheckout/>
      Ödeme Yap
    </button>
  )
}

export default CheckoutButton
