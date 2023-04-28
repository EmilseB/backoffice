import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import { CategoriaProps } from "./Categorias";
import { CategoriaServices } from "@/services/CategoriaServices";
import { ProductServices } from "@/services/Productservices";
import { newProduct } from "@/models/ProductsInterfaces";
import { Typography } from "@mui/material";

export default function Precios() {
  const [categoria, setCategoria] = useState<CategoriaProps[]>([
    { categoria: "", __v: 0, _id: "" },
  ]);
  const [products, setProducts] = useState<newProduct[]>([]);

  const Categoria = () => {
    CategoriaServices.search()
      .then((res) => {
        setCategoria(res.data);
      })
      .catch((err) => alert("hubo un error"));
  };

  useEffect(() => Categoria(), []);

  const Products = () => {
    ProductServices.search()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => alert("hubo un error"));
  };

  useEffect(() => Products(), []);

  const Update = ()=>{
    ProductServices.update()
    .then((res)=>{
      // setProducts()
    })
    .catch((err)=> alert("hubo un error"))
  }

  return (
  <Paper>
    <Typography> Aumentar precios </Typography>



  </Paper>
)}
