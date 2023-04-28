import { newProduct } from '@/models/ProductsInterfaces';
import { ProductServices } from '@/services/Productservices';
import { Paper, Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { FC, useEffect, useState } from 'react'

export const AdministrarProductos:FC=()=> {
const [products,setProducts]=useState<newProduct[]>([])
  



  const Products=()=>{
    ProductServices.search()
      .then((res) => {
        setProducts(res.data);

      })
      .catch((err) => alert("hubo un error"))
    }
  
      useEffect(()=>(Products()),[]);
    





  return (
    <Grid>
    
      <Typography> Administrar Productos </Typography>
      <Paper>
      {products.map((product)=>(
        product.name,
        product.title
      ))}
      </Paper>
      
      </Grid> 

    
  )
}
