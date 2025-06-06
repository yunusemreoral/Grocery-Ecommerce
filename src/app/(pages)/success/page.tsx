import Link from "next/link"
import { FC } from "react"
import { IoIosCheckmark as Checkmark } from "react-icons/io"

const SuccessPage:FC = () => {
  return (
    <div className="h-[80vh]">
      <div className="h-[50%] bg-green-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
            <Checkmark className="text-[70px]"/>
            <p className="font-semibold text-4xl text-center">Ödeme Başarılı Oldu.

            </p>
        </div>
      </div>

      <div className="h-[50px] p-10 mt-5 text-center text-black">
        <p className="text-lg">Siparişiniz yakında teslim edilecektir</p>
      <p className="mt-5 mb-10 text-zinc-800">
        Detaylar için mailinizi kontrol edebilirsiniz
      </p>

      <Link href="/orders" className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg hover:bg-green-100">Siparişlerim</Link>

      <br/>
      <br/>
      <br/>

 <Link href="/" className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg hover:bg-green-100">Anasayfaya Dön</Link>

      </div>
    </div>
  )
}

export default SuccessPage
