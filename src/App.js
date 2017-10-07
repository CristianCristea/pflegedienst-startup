import React, { Component } from "react";
import axios from "axios";

// TODO: make 2 graphs - for 2000 and 2001 with city districts name and respective number
// TODO: duplicate records contain german, foreigns and total - select only total
// TODO: display each city district name - remove the number from it and number bar chart
// TODO: on click display a pie chart with the german and foreign

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: []
    };
  }

  getData(url, params = {}) {
    const proxyUrl = "https://cors-anywhere.herokuapp.com";
    axios
      .get(`${proxyUrl}/${url}`, { params: params })
      .then(response => {
        this.setState({ records: response.data.result.records });
      })
      .catch(err => {
        console.log(err);
      });
  }

  filterRecords(records, property, value) {
    return records.filter(record => {
      return record[property] == value;
    });
  }

  componentDidMount() {
    // this.getData(
    //   "https://www.opengov-muenchen.de/api/action/datastore_search",
    //   { resource_id: "fe9aeef9-3479-407c-b38f-db73a4dadf9f" }
    // );
  }

  render() {
    // const validRecords = this.filterRecords(this.state.records, "JAHR", "2015");

    return (
      <div className="App">
        <header>
          <h1>hello world</h1>
        </header>
      </div>
    );
  }
}

export default App;
