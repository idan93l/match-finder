import React from "react";
import "./Item.css"

class Item extends React.Component {
  render = () => {
    const {image, title} = this.props;
    return (
      <div>
        <img src={image} alt="" />
        <h1>{title}</h1>
      </div>
    )
  }
}
export default Item