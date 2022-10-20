import React, { useContext, useState } from "react";
import moment from "moment";
import MaintenanceContext from "../../context/MaintenanceContext";
import Maintenance from "../maintenance/maintenance";
import Layout from "../../components/layout/layout";
import styles from "./style.module.scss";


const initialStateMtto = {
    maintenanceId: null,
  }
    
  const Dashboard = () => {
  const [stateMtto, setStateMtto] = useState(initialStateMtto);
  const { maintenanceId } = stateMtto;
  const stateMaintenance = useContext(MaintenanceContext);
  const {maintenances} = stateMaintenance;

  const mtto = maintenances.find(n => n.id === maintenanceId);

  return (
    <Layout>
      <div className={styles.container}>
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
                  onClick={()=>setStateMtto({
                    maintenanceId: row.id
                  })}
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
      {mtto && <Maintenance 
      mtto={mtto}
      onClose={() => setStateMtto({maintenanceId: null})} />}
    </Layout>
  );
};

export default Dashboard;
