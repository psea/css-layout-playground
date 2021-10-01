import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divs: ["block", "inline", "inline", "block", "block"],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(i, event) {
    if (event.ctrlKey) {
      this.setState(state => {
        const divs = state.divs.slice(0, i).concat(state.divs[i]).concat(state.divs.slice(i,state.divs.length));
        return {divs: divs}; 
      });
    } else {
      this.setState(state => {
        const divs = state.divs.slice();
        divs[i] = divs[i] === "block" ? "inline" : "block";
        return {divs: divs};
      });
    }
  }

  render() {
    const divs = []
    this.state.divs.forEach((type, i) => {
      divs.push(<div className={"box-"+type} key={i} onClick={(event) => this.clickHandler(i, event)}>Box {i}</div>)
    });

    return (
      <React.Fragment>
        {divs}
      </React.Fragment>
    );
  }
}

export default App;
