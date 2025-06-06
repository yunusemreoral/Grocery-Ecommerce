
import { GetAllProductsResponse, GetProductByIdResponse } from "@/types";

// TEMEL API ADRESİ
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// BÜTÜN ÜRÜNLERİ GETİR
const getAllProducts = async (): GetAllProductsResponse => {
    const res = await fetch(`${BASE_URL}/api/groceries`);

    return res.json();
};

// ürün detayını getir
const getProductById  = async (id:string): GetProductByIdResponse => {
const res = await fetch(`${BASE_URL}/api/groceries/${id}`);

return res.json();
}

export {getAllProducts,getProductById};