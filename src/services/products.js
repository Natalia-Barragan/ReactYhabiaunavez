import { products } from "../Mock/products";

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        },);
    });
};
