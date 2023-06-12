import React, { useEffect, useState }from 'react'
import { fetchGroup } from './Fetchs';

export default function Group({ group }) {

  return (
    <>
    {/* <img className="card-img-top" src="..." alt="Card cap"/> */}
    <div className="card-body">
        <h5 className="card-title">{ group.name } </h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    </div>
    </>
  )
}
