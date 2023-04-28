import axios from "axios"

export const CategoriaServices={
    search:()=>{
        return axios.get("http://localhost:3001/categorias")
    }
}