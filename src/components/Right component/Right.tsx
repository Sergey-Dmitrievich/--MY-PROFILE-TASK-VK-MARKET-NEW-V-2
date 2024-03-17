import React from 'react'

export default function Right(props:any) {
  return (
    <div>
      <header>
      <h1>ОПЛАТА | <span>PAYMENT</span></h1>
    </header>
    <footer>
      <h2>К ОПЛАТЕ: <br />{props.amount} $</h2>
    </footer>
    </div>
  )
}
