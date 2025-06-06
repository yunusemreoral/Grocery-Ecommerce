import Link from "next/link"
import { FC } from "react"
import { MdRemoveShoppingCart } from "react-icons/md"


const EmptyCart:FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <MdRemoveShoppingCart className="text-6xl text-gray-400 mb-4"/>

      <h1 className="text-gray-600 mb-6">Sepetiniz Boş</h1>

      <Link href="/" className="bg-green-600 text-white px-6 py-4 rounded-md font-medium hover:bg-green-700 transition">
      Hemen Alışverişe Başla
      </Link>
    </div>
  )
}

export default EmptyCart
