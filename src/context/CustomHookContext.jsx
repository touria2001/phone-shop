import { useContext } from "react";
import { ProductContext } from "./ProductProvider";


export function useProductContext() {
    const { state, dispatch } = useContext(ProductContext);
    return [state, dispatch ];
}