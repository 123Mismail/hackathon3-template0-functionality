
import React from 'react'
 interface Btn {
    classes:string,
    text:string
 }
const BtnComponent = ({classes,text }:Btn) => {
  return (
    <div>
        <button className={classes}>{text}</button>
    </div>
  )
}

export default BtnComponent