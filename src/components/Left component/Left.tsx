import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard subcomponent/ProductCard';
import './Left.css'

export default function Left(props:any) {
  const [intermediate, setIntermediate] = useState(3241)
  props.setAmount(intermediate)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch('https://fakestoreapi.com/products');
        const result = await responce.json();
        props.setData(result);
        console.log(result)
      }
      catch (error) {
        console.error('Опять какая то ошибка', error);
      }
    };
    fetchData();
  }, [])
  return(
    <>
      <header><h1>КОРЗИНА | <span> BASKET</span></h1></header>
      <div className="container">
        {props.data.map((item:any) => (
          <ProductCard key = {item.id}
          {...item}
          setIntermediate = {setIntermediate}
          intermediate = {intermediate}/>
        ))}
      </div>
    </>
  )
}

