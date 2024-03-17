import { useState } from 'react'
import './ProductCard.css'

export function ProductCard(props:any) {
  const [cost, setCost] = useState(props.price)
  const [quantity, setQuantity] = useState(1)
  const [general, setGeneral] = useState(cost * quantity)
  const [display, setDisplay] = useState('flex')

  return (
    <div>
      <div style={{display:display}} className="productCard" >
      <img className="productPic" src={props.image} />

      <div className="productInfo">
        <div>
          <h2>НАЗВАНИЕ: <span>{`${props.title}`}</span></h2>
          <h2>ЦЕНА: <span>{`${props.price} $`}</span></h2> 
        </div>
        <div>
          <p>ОПИСАНИЕ: <span>{`${props.description}`}</span></p>
        </div>
        <div>
          <h2>КОЛИЧЕСТВО: <span>{`${quantity}`}</span></h2>
        </div>
        <div className="buttons">
          <div className='plus'>
            <button onClick={() => {
              if (quantity < 10) {
                props.setIntermediate(props.intermediate + cost)
                setQuantity(quantity + 1)
                setGeneral(cost * quantity)
              }
              else{
                return(
                  console.log("Больше десяти нельзя")
                )
              }
            }}>+</button>
          </div>
          <div className="minus">
          <button onClick={() => {
            if (quantity > 1) {
                props.setIntermediate(props.intermediate - cost)
                setQuantity(quantity - 1)
                setGeneral(cost * quantity)
            }
            else{
              return(
                console.log("Больше десяти нельзя")
              )
            }
          }}>—</button>
          </div>
          <div className="delete">
          <button onClick={() => {
            setGeneral(cost * quantity)
            setDisplay('none')
            if(quantity > 1) {
              props.setIntermediate(props.intermediate - general - cost)
            }
            else{
              props.setIntermediate(props.intermediate - cost)
            }
            }}>delete</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

