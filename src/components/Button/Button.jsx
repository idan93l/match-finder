import React from "react";

class Button extends React.Component {
  render = () => {
    const {id, add, type} = this.props;
    return (
      <div>
        <button id={id} onClick={add}>{type}</button>
      </div>
    )
  }
}
export default Button