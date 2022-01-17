import React from "react";
import Map from "./components/Map";
import Header from "./components/Header";
import Tracker from "./components/tracker-stats";

class App extends React.Component {
  state = {
    statistics: [],
    global: {},
    loading: true
  }

  componentDidMount() {

    fetch("https://disease.sh/v3/covid-19/countries").then(res => res.json()).then(res => {
      let statistics = [];
      res.forEach(data => {
        statistics.push(data);
      })

      this.setState({ statistics: statistics })
    })
    fetch("https://disease.sh/v3/covid-19/all").then(res => res.json()).then(res => {
      this.setState({ global: res, loading: false })
    })
  }

  componentWillUnmount() {
    this.setState({
      statistics: [],
      global: {},
      loading: true
    })
  }

  render() {
    return(
      <div className="App">
        {this.state.loading ? <h1>Please wait...</h1> :
        <div>
          <Header />
          <Map data={this.state.statistics}/>
          <Tracker data={this.state.global}/>
        </div>
        }
      </div>
    )
  }
}

export default App;