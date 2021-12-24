import React from "react";

class Button extends React.Component {
  render = () => {
    return (
      <div>
        <button id={this.props.id} onClick={this.props.add}>{this.props.type}</button>
      </div>
    )
  }
}
export default Button