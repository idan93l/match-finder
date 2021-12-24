import React from "react";
import "./Item.css"

class Item extends React.Component {
  render = () => {
    return (
      <div>
        <img src={this.props.image} alt="" />
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
export default Item