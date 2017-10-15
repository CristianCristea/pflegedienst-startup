import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Jumbotron from './components/Jumbotron';
import BarChart from './components/BarChart';
import InfoBar from './components/InfoBar';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: []
    };
  }

  // filter raw data(csv string) into array of lines
  processCSVData(csvStringData) {
    const lines = csvStringData.split(/\n/);
    return lines.filter(line => {
      return (
        line.indexOf('gesamt') !== -1 && line.indexOf('Gesamtstadt') === -1
      );
    });
  }

  // remove empty elems and split each line(string) into own array
  sanitizeData(arr) {
    return arr.map(line => {
      let lineArr = line.replace(/"/g, ' ').split(/, /);
      let filterElements = lineArr.filter(elem => {
        return elem.trim().match(/\S/);
      });
      return filterElements;
    });
  }

  // return an array of obj(one obj for each district)
  agingRateDistricts(districtsData) {
    return districtsData.map(district => {
      return {
        agingRate: Number(district[3].replace(',', '.')),
        oldPop: Number(district[4]),
        youngPop: Number(district[5]),
        year: Number(district[8]),
        cityDistrict: district[11].trim()
      };
    });
  }

  formatName(string) {
    return string.replace(/[^a-zA-Z|-]/gi, '');
  }

  componentDidMount() {}

  render() {
    const csvData = this.processCSVData(this.props.agingRateData);
    const rawDistrictsData = this.sanitizeData(csvData);
    const records = this.agingRateDistricts(rawDistrictsData);

    return (
      <div className="App">
        <Header />
        <Sidebar />
        <div className="wrapper">
          <InfoBar />
          <div className="inner-wrapper">
            <Jumbotron title="Population over 65" />
            <BarChart records={records} formatName={this.formatName} />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
