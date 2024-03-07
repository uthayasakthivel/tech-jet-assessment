import React, { useState } from "react"
import "../../App.css"
import "./style.css"
import resGif from "../../assets/restaurant.gif"
import retailGif from "../../assets/retail.gif"
import ecommGif from "../../assets/ecommerce.gif"
import serviceGif from "../../assets/ecommerce.gif"

import restaurant from "../../assets/restaurant.png"
import retail from "../../assets/retail.png"
import ecommerce from "../../assets/ecommerce.png"
import service from "../../assets/services.png"

import { RiCustomerService2Fill } from "react-icons/ri"
import { FaHotel, FaStore } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"

const data = [
  {
    id: 1,
    imageUrl: restaurant,
    title: "Restaurant",
    text: "Step up your dining game with Qubriux. Deliver personalized marketing, omnichannel campaigns.....",
    moreLink: "#",
    icon: <FaHotel />,
  },
  {
    id: 2,
    imageUrl: retail,
    title: "retail",
    text: "Elevate your retail experience with Qubriux, an AI-driven platform offering targeted campaigns,... ",
    moreLink: "#",
    icon: <FaStore />,
  },
  {
    id: 3,
    imageUrl: ecommerce,
    title: "Ecommerce",
    text: "Boost e-commerce revenue with Qubriux's hyper-personalized marketing. Tailored for......",
    moreLink: "#",
    icon: <FaStore />,
  },
  {
    id: 4,
    imageUrl: service,
    title: "Services",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt urna nec ligula. Lorem ipsum dolor sit",
    moreLink: "#",
    icon: <RiCustomerService2Fill />,
  },
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleCardClick = (index) => {
    setActiveIndex(index)
  }

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      moveLeft()
      setActiveIndex((prevIndex) => Math.max(0, prevIndex - 1))
    } else {
      moveRight()
      setActiveIndex((prevIndex) => Math.min(data.length - 1, prevIndex + 1))
    }
  }

  function moveRight() {
    const carousel = document.querySelector(".carousel")

    const currentPosition =
      parseInt(
        carousel.style.transform.replace(/[^0-9\-.,]/g, "").split(",")[0]
      ) || 0
    const newPosition = currentPosition - 420

    carousel.style.transform = `translateX(${newPosition}px)`
    carousel.style.transition = `transform 2s`
  }
  function moveLeft() {
    const carousel = document.querySelector(".carousel")

    const currentPosition =
      parseInt(
        carousel.style.transform.replace(/[^0-9\-.,]/g, "").split(",")[0]
      ) || 0
    const newPosition = currentPosition + 420

    carousel.style.transform = `translateX(${newPosition}px)`
    carousel.style.transition = `transform 2s`
  }

  return (
    <div className="retail-container">
      <div className="left-side">
        <div className="big-card-details">
          <div className="big-card-image">
            <img src={getGif(activeIndex)} alt={`GIF ${activeIndex + 1}`} />
            <div className="overlay"></div>
          </div>

          <div className="big-card-content">
            <h1>{data[activeIndex].title}</h1>
            <p>{data[activeIndex].text}</p>
            <a href={data[activeIndex].moreLink}>View All</a>
          </div>
        </div>
      </div>
      <div className="">
        <div className="carousel">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`card ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-image">
                <img src={item.imageUrl} alt={`Card ${index + 1}`} />
              </div>
              <h3>
                <span style={{ marginRight: "20px" }}>{item.icon}</span>
                {item.title}
              </h3>
              <p>{item.text}</p>
              <a href={item.moreLink}>
                Know More <FaArrowRightLong style={{ marginLeft: " 10px" }} />
              </a>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button
            className="left-arrow"
            disabled={activeIndex === 0}
            onClick={() => handleArrowClick("left")}
          >
            ←
          </button>
          <button
            className="right-arrow"
            disabled={activeIndex === data.length - 1}
            onClick={() => handleArrowClick("right")}
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}

function getGif(index) {
  switch (index) {
    case 0:
      return resGif
    case 1:
      return retailGif
    case 2:
      return ecommGif
    case 3:
      return serviceGif
    // Add more cases if needed
    default:
      return ""
  }
}

export default App
