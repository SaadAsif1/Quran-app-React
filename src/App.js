import React, { Component } from "react";
import { AnchorButton, Button, Code, H5, Intent } from "@blueprintjs/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import About from "./Components/About";
import axios from "axios";

class App extends Component {
  state = {
    data: [],
    loading: false
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const res = await axios.get(
      `http://quranapi.azurewebsites.net/api/verse/?chapter=1&start=1&end=1`
    );
    this.setState({ data: res.data, loading: false });
  };

  nums = async (start, end, surah) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `http://quranapi.azurewebsites.net/api/verse/?chapter=${surah}&start=${start}&end=${end}`
    );
    this.setState({ data: res.data, loading: false });
  };

  render() {
    return (
      <Router>
        <div>
          <Button icon='stop' />
          <Navbar nums={this.nums} />
          <div className='container' style={{ padding: "2rem" }}>
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <Content
                    data={this.state.data}
                    loading={this.state.loading}
                  />
                )}
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
