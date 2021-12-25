import React from "react";
import Button from "../Button/Button.jsx";
import Counter from "../Counter/Counter.jsx";
import DATA from "../../Data.js";
import Item from "../Item/Item.jsx";

class Main extends React.Component {
  state = {
    yes: 0,
    no: 0,
    img: 0,
  };

  addTo = (e) => {
    if (this.state.img !== DATA.length) {
      this.setState((prevstate) => ({ img: prevstate.img + 1 }));
      e.target.id === "yes"
        ? this.setState((prevstate) => ({ yes: prevstate.yes + 1 }))
        : this.setState((prevstate) => ({ no: prevstate.no + 1 }));
    }
    return;
  };

  show = () => {
    if (this.state.img !== DATA.length) {
      return (
        <Item
          image={DATA[this.state.img].url}
          title={DATA[this.state.img].description}
        />
      );
    }
    if (this.state.yes <= this.state.no) {
      return <h1>Maybe bass guitars are not for you...</h1>;
    }
    return <h1>Rock on!</h1>;
  };

  render = () => {
    return (
      <div>
        <Button type="yes" id="yes" add={this.addTo} />
        <Button type="no" id="no" add={this.addTo} />
        <Counter count={this.state.yes} />
        <Counter count={this.state.no} />
        {this.show()}
      </div>
    );
  };
}
export default Main;
