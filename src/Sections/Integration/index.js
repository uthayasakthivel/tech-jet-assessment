import React, { useEffect, useState } from "react"
import ellipse from "../../assets/Ellipse.png"
import Image1 from "../../assets/integration-1.png"
import Image2 from "../../assets/integration-2.png"
import Image3 from "../../assets/integration-3.png"
import dots from "../../assets/dot.png"
import "../../App.css"
import "./style.css"
import IntegrationText from "../../Components/IntegrationText"

function Integration() {
  const [hoveredHeading, setHoveredHeading] = useState("")

  const handleMouseEnter = (heading) => {
    setHoveredHeading(heading)
  }

  const handleMouseLeave = (heading) => {
    setHoveredHeading(heading)
  }
  const headings = ["pOSs", "Online ordering", "E-commerce store"]
  const paragraphs = [
    "Qubriux seamlessly integrates with Point of Sale (POS) systems, streamlining operations and unifying customer interactions. Effortlessly capture in-store data for enhanced engagement, loyalty, and personalized marketing. Revolutionize your connections with insightful analytics.",
    "Qubriux seamlessly integrates with online ordering platforms, offering a cohesive digital experience. Whether on your website or third-party platforms, Qubriux ensures a 360° view of interactions. Elevate your online presence and turn every order into an opportunity for enhanced engagement.",
    "Transform your online store using Qubriux's seamless integration with Shopify and other platforms. Leverage Qubriux's omnichannel marketing automation for tailored promotions, a personalized shopping journey, and lasting customer connections effortlessly.",
  ]
  return (
    <div className="integration-wrapper">
      <div className="integration-header">
        <h2 className="">
          Integrated with POSs, Online Ordering Platforms,
          <br /> Shopify and more.
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet.
        </p>
      </div>

      <div className="integration-body">
        <div className="integration-image">
          <div className="image-container">
            <img src={ellipse} alt="" className="ellipse" />
            <img src={Image1} alt="Image 1" className="image-1" />
            {hoveredHeading === "heading2" && (
              <img src={Image2} alt="Image 2" className="image-2" />
            )}
            {hoveredHeading === "heading3" && (
              <img src={Image3} alt="Image 3" className="image-3" />
            )}
            <div className="dots">
              <img src={dots} alt="" />
              <img src={dots} alt="" />
              <img src={dots} alt="" />
              <img src={dots} alt="" />
            </div>
          </div>
        </div>
        <div className="integration-text">
          <div
            onMouseEnter={() => handleMouseEnter("heading1")}
            onMouseLeave={() => handleMouseLeave("heading1")}
          >
            <IntegrationText heading={headings[0]} paragraph={paragraphs[0]} />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("heading2")}
            onMouseLeave={() => handleMouseLeave("heading1")}
          >
            <IntegrationText heading={headings[1]} paragraph={paragraphs[1]} />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("heading3")}
            onMouseLeave={() => handleMouseLeave("heading1")}
          >
            <IntegrationText heading={headings[2]} paragraph={paragraphs[2]} />
          </div>
        </div>
      </div>

      {/* <div className="">
        {hoveredHeading === "heading1" && <img src={Image1} alt="Image 1" />}
        {hoveredHeading === "heading2" && <img src={Image2} alt="Image 2" />}
        {hoveredHeading === "heading3" && <img src={Image3} alt="Image 3" />}
      </div>

      <div className="">
        <div
          onMouseEnter={() => setHoveredHeading("heading1")}
          onMouseLeave={() => setHoveredHeading("")}
        >
          Heading 1
        </h2>
        <h2
          onMouseEnter={() => setHoveredHeading("heading2")}
          onMouseLeave={() => setHoveredHeading("")}
        >
          Heading 2
        </h2>
        <h2
          onMouseEnter={() => setHoveredHeading("heading3")}
          onMouseLeave={() => setHoveredHeading("")}
        >
          Heading 3
        </h2>
      </div> */}
    </div>
  )
}

export default Integration
