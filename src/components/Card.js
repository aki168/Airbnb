import React from "react"

export default function Card(props) {

  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }

  // console.log(props);
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--img" src={`images/${props.coverImg}`} alt="card-pic" />
      <div className="card--stats">
        <img className="card--star" src="images/star.png" alt="rate" />
        <span>{props.stats.rating}</span>
        <span className="gray">{props.stats.reviewCount}・</span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )

}
