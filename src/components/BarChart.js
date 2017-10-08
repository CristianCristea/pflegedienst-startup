import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar, defaults } from 'react-chartjs-2';

// TODO: add proptypes, add onClick - show a modal with donaught chart - german, foreign

export default class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedRecords: [],
      totalPopulation: {},
      labels: [],
      populationNumber: [],
      backgroundColor: [],
      borderColor: []
    };
  }

  sortRecords() {
    const sortedRecords = this.props.records.sort((a, b) => {
      return a['NAME'] < b['NAME'] ? -1 : 1;
    });

    // remove last elem - population for whole city
    const totalPopulation = sortedRecords.pop();

    // after sortedRecords is in the state, store chart data
    this.setState(
      {
        sortedRecords: sortedRecords,
        totalPopulation: totalPopulation
      },
      () => {
        this.createChartData();
      }
    );
  }

  createChartData() {
    const labels = [];
    const populationNumber = [];
    const backgroundColor = [];
    const borderColor = [];

    this.state.sortedRecords.forEach(record => {
      labels.push(this.props.formatName(record['NAME']));
      populationNumber.push(record['BASISWERT_1']);
      backgroundColor.push('rgba(255, 204, 0, .6)');
      borderColor.push('rgb(115, 119, 191)');
    });

    this.setState({
      labels: labels,
      populationNumber: populationNumber,
      backgroundColor: backgroundColor,
      borderColor: borderColor
    });
  }

  componentDidMount() {
    this.sortRecords();

    // set default chart values
    defaults.global.defaultColor = 'rgba(255, 204, 0, .6)';
    defaults.global.defaultFontColor = '#212121';
    defaults.global.defaultFontFamily =
      "'Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'";
  }

  render() {
    const {
      labels,
      populationNumber,
      backgroundColor,
      borderColor
    } = this.state;

    return (
      <div className="bar-chart">
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: 'Year 2000',
                data: populationNumber,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1
              }
            ]
          }}
        />
      </div>
    );
  }
}

BarChart.propTypes = {
  records: PropTypes.array.isRequired,
  formatName: PropTypes.func.isRequired
};
