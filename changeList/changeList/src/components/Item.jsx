import React from 'react'

const Item = ({item}) => {
  return (
    <article>
            <h2>{item.name}</h2>
            <p>{item.role}</p>
            <p>{item.department}</p>
            <p>ID: {item.id}</p>
    </article>
  )
}

export default Item