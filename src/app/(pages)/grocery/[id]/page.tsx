import { FC } from "react"
import { getProductById } from "@/service/product-service";
import { FaArrowLeft, FaShoppingBasket } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import OrganicBadge from "@/components/detail/organic-badge";
import { TbWeight } from "react-icons/tb";
import { MdOutlineLocalShipping } from "react-icons/md";
import OrderButtons from "@/components/detail/order-buttons";
import ProductInfo from "@/components/detail/product-info";
import ProductDetails from "@/components/detail/product-details";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

const Grocery:FC<Props> = async ({params}) => {
    const {id} = await params;

    const {grocery} = await getProductById(id);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* back  to home */}
      <div className="mb-6">
        <Link href="/" className="flex items-center gap-2 text-green-600 hover:underline">
        <FaArrowLeft/>
        <span>Anasayfaya Dön</span>
        </Link>
      </div>

{/* product details */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
       <ProductDetails grocery={grocery} />

        {/* product info */}
        <ProductInfo grocery={grocery}/>
      </div>
    </div>
  )
}

export default Grocery
