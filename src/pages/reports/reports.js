import React, { useContext } from 'react'
import {
    XYPlot,
    DiscreteColorLegend,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    VerticalBarSeries,
} from 'react-vis';
import Layout from '../../components/layout/layout';
import styles from './style.module.scss'
import MaintenanceContext from '../../context/MaintenanceContext';
import { formatMaintenances } from './config';

const Reports = () => {
    const stateMaintenance = useContext(MaintenanceContext);
    const { maintenances } = stateMaintenance;

    // console.log("maintennaces in report", maintenances);

    const groupTypes = formatMaintenances(maintenances)

    console.log("esto es groupTypes", groupTypes)

  return (
    <Layout>
        <div className={styles.container}>
            <XYPlot width={window.innerWidth * 0.8}
                className={styles.xyPlot}
                xType="ordinal"
                // stackBy="y"
                height={500}
            >
                <VerticalGridLines /> 
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                { groupTypes.map(group => <VerticalBarSeries 
                    key={group.title}
                    color={group.color}
                    data= {group.data}
                />)}
            </XYPlot>
        </div>
    </Layout>
  )
}

export default Reports;