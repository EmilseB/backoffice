import axios from "axios"

export const ProductServices={
    search:()=>{
        return axios.get("http://localhost:3001/products")
    },

update:()=>{
    return axios.patch("http://localhost:3001/products")
}





}