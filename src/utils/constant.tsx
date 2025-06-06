import { FaLeaf, FaShieldAlt } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";

const options = [
    {
        icon: <MdLocalShipping/>,
        title: "Hızlı Teslimat",
        description: "Aynı gün teslimat",
        bgColor: "bg-blue-100",
    },
    {
        icon: <FaLeaf/>,
        title: "Taze Ürünler",
        description: "Günlük taze ürünler",
        bgColor: "bg-green-100",
    },
    {
        icon: <FaMoneyBill1Wave/>,
        title: "Uygun Fiyatlar",
        description: "Uygun fiyatlar",
        bgColor: "bg-yellow-100",
    },
    {
        icon: <FaShieldAlt/>,
        title: "Güvenli Alışverş",
        description: "Güvenli alışveriş",
        bgColor: "bg-red-100",
    },
];

export {options};