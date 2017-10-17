import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar, defaults } from 'react-chartjs-2';

export default class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedRecordsOver65: [],
      sortedRecordsDeaths: [],
      chartData: {}
    };
  }

  sortRecords(records) {
    return records.sort((a, b) => {
      return a['cityDistrict'] < b['cityDistrict'] ? -1 : 1;
    });
  }

  createChartData(records, label, bgColor, bdColor) {
    const labels = [];
    const numbers = [];
    const backgroundColor = [];
    const borderColor = [];

    records.forEach(record => {
      labels.push(this.props.formatName(record['cityDistrict']));
      numbers.push(record['numbers']);
      backgroundColor.push(bgColor);
      borderColor.push(bdColor);
    });

    return {
      labels: labels,
      datasets: [
        {
          label: label,
          data: numbers,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 1
        }
      ]
    };
  }

  storeRecords() {
    const sortedRecordsOver65 = this.sortRecords(this.props.recordsOldPop);
    const sortedRecordsDeaths = this.sortRecords(this.props.recordsDeaths);

    this.setState(
      {
        sortedRecordsOver65: sortedRecordsOver65,
        sortedRecordsDeaths: sortedRecordsDeaths
      },
      () => {
        this.btnDefaultChartValues.click();
      }
    );
  }

  changeChartData(e) {
    let data = {};
    if (e.target.value === 'deaths') {
      data = this.createChartData(
        this.state.sortedRecordsDeaths,
        'Deaths',
        '#212121',
        'rgba(255, 204, 0, .6)'
      );
    } else if (e.target.value === 'over65') {
      data = this.createChartData(
        this.state.sortedRecordsOver65,
        'Over 65',
        'rgba(255, 204, 0, .6)',
        '#212121'
      );
    }

    this.setState({ chartData: data });
  }

  componentWillMount() {
    this.storeRecords();
  }

  componentDidMount() {
    // set default chart values
    defaults.global.defaultColor = 'rgba(255, 204, 0, .6)';
    defaults.global.defaultFontColor = '#212121';
    defaults.global.defaultFontFamily =
      "'Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'";
  }

  render() {
    return (
      <div className="bar-chart">
        <button
          value="over65"
          className="chart-btn"
          onClick={e => this.changeChartData(e)}
          ref={btn => (this.btnDefaultChartValues = btn)}
        >
          Over 65
        </button>
        <button
          value="deaths"
          className="chart-btn"
          onClick={e => this.changeChartData(e)}
        >
          Deaths
        </button>
        <Bar data={this.state.chartData} />
      </div>
    );
  }
}

BarChart.propTypes = {
  recordsOldPop: PropTypes.array.isRequired,
  formatName: PropTypes.func.isRequired
};
