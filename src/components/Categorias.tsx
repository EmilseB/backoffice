import { CategoriaServices } from '@/services/CategoriaServices';
import Paper from '@mui/material/Paper'
import React, { useEffect, useState } from 'react'

export interface CategoriaProps{
  categoria:string,
  __v:number,
  _id:string
}


export default function () {

const [categoria,setCategoria]=useState<CategoriaProps[]>([{categoria:'',__v:0,_id:''}])

  const Categoria=()=>{
    CategoriaServices.search()
      .then((res) => {
        setCategoria(res.data);

      })
      .catch((err) => alert("hubo un error"))
    }
  
      useEffect(()=>(Categoria()),[]);
    console.log('categoria', categoria)
  return (
    <Paper>

    </Paper>
)}
