import React from 'react'
import { Link } from 'react-router-dom'

export default function TextWant(props) {
  return (
    <>
        <p>{props.text} <Link to={props.route}  > {props.name}</Link></p>
            

    </>
  )
}
