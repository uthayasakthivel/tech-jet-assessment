import React from "react"

const Card = ({ img, title, text, moreLink }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={moreLink}>Know More</a>
    </div>
  )
}

export default Card
