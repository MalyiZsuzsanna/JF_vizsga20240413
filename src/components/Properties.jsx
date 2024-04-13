import React from 'react'
import {properties} from '../data'
import { SinglePropertie } from './SinglePropertie'

export const Properties = () => {
  console.log(properties)
  return (

    <div className='container'>
      <div className="d-flex justify-content-center gap-3 flex-wrap bg-#c7d2fe">
      <h3 className='w-100 m-3 text-center'>Aktuális ingatlan kínálatunk</h3>
      {properties.map(obj=>
      <SinglePropertie key={obj.id}{...obj}/>)}
    </div></div>
  )
}

