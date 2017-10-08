import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Jumbotron from './components/Jumbotron';
import BarChart from './components/BarChart';
import InfoBar from './components/InfoBar';
import Footer from './components/Footer';
import Loading from './components/Loading';

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
    const proxyUrl = 'https://cors-anywhere.herokuapp.com';
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

  formatName(string) {
    return string.replace(/[^a-zA-Z|-]/gi, '');
  }

  componentDidMount() {
    this.getData(
      'https://www.opengov-muenchen.de/api/action/datastore_search',
      { resource_id: 'fe9aeef9-3479-407c-b38f-db73a4dadf9f' }
    );
  }

  render() {
    const totalPopulationRecords = this.filterRecords(
      this.state.records,
      'INDIKATOR_AUSPRAEGUNG',
      'gesamt'
    );
    const firstYearRecords = this.filterRecords(
      totalPopulationRecords,
      'JAHR',
      '2000'
    );

    return (
      <div className="App">
        <Header />
        <Sidebar />
        <div className="wrapper">
          <InfoBar />
          <div className="inner-wrapper">
            <Jumbotron title="Population over 65" />
            {firstYearRecords.length === 0 ? (
              <Loading />
            ) : (
              <BarChart
                records={firstYearRecords}
                formatName={this.formatName}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
