import React, { Component } from "react";
import { connect } from "react-redux";
import { SmurfList } from "../components";
import { fetchData, createSmurf } from "../actions";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() {
    this.props.fetchData();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = e => {
    const { name, age, height } = this.state;
    this.props.createSmurf({ name, age, height });
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    if (this.props.fetchingSmurfs) {
      return <p>fetching smurfs</p>;
    }

    return (
      <div className="App">
        <form>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button onClick={() => this.addSmurf()} type="button">
            Add to the village
          </button>
        </form>

        <div>
          <SmurfList smurfs={this.props.smurfs} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurfs: state.addingSmurfs
});

export default connect(
  mapStateToProps,
  { fetchData, createSmurf }
)(App);
