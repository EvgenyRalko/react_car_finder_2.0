import './statistics.less';
import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';


class Statistics extends React.Component {
    render() {
        return (
            <div className="statistics-wrapper">
                  <BarChart />
                  <PieChart />
            </div>
        )
    }
}

export default Statistics;
