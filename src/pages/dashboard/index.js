import React, { useContext, useState } from "react";
import moment from "moment";
import MaintenanceContext from "../../context/MaintenanceContext";
import Maintenance from "../maintenance/maintenance";
import Layout from "../../components/layout/layout";
import styles from "./style.module.scss";


const initialStateMtto = {
    maintenanceId: null,
    isOpen: false,
  }
    
  const Dashboard = () => {
  const [stateMtto, setStateMtto] = useState(initialStateMtto);
  const { maintenanceId, isOpen } = stateMtto;
  const stateMaintenance = useContext(MaintenanceContext);
  const {maintenances} = stateMaintenance;

  const mtto = maintenances.find(n => n.id === maintenanceId);

  return (
    <Layout>
      <div className={styles.container}>
        <div
          className={styles.buttonFloat}
          onClick={() => setStateMtto({ maintenanceId: null, isOpen: true })}
        >
          +
        </div>
        <table className={styles.table} cellSpacing="0">
          <thead>
            <tr className={styles.tableHeader}>
              <th>Orden</th>
              <th>Fecha</th>
              <th>Equipo</th>
              <th>Autor</th>
              <th>Actividad</th>
            </tr>
          </thead>
          <tbody>
            {maintenances.map((row) => {
              return (
                <tr
                  key={row.id}
                  className={styles.tableRow}
                  onClick={() =>
                    setStateMtto({
                      maintenanceId: row.id,
                      isOpen: true,
                    })
                  }
                >
                  <td>{row.id}</td>
                  <td>{moment(row.date).format("DD MMM YYYY hh:mm a")}</td>
                  <td>{row.equipment}</td>
                  <td>{row.author}</td>
                  <td>{row.activity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {isOpen && (
        <Maintenance
          mtto={mtto}
          onClose={() => setStateMtto({ maintenanceId: null, isOpen:false })}
        />
      )}
    </Layout>
  );
};

export default Dashboard;
