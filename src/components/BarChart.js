import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';

// TODO: add proptypes, add onClick - show a modal with donaught chart - german, foreign

const BarChart = ({ records, formatName }) => {
  const labels = [];
  const populationNumber = [];
  const backgroundColor = [];
  const borderColors = [];
  const sortedRecords = records.sort((a, b) => {
    return a['NAME'] < b['NAME'] ? -1 : 1;
  });
  // remove last elem(evtl later use?) - population for whole city
  const totalPopulation = sortedRecords.pop();

  sortedRecords.forEach(record => {
    labels.push(formatName(record['NAME']));
    populationNumber.push(record['BASISWERT_1']);
    backgroundColor.push('rgba(255, 204, 0, .6)');
    borderColors.push('rgb(115, 119, 191)');
  });

  // set default chart values
  defaults.global.defaultColor = 'rgba(255, 204, 0, .6)';
  defaults.global.defaultFontColor = '#212121';
  defaults.global.defaultFontFamily =
    "'Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'";

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
              borderColor: borderColors,
              borderWidth: 1.2
            }
          ]
        }}
        options={{}}
      />
    </div>
  );
};

export default BarChart;
