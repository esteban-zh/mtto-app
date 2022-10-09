import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import MaintenanceContext from '../../context/MaintenanceContext';

const Index = () => {
  const stateAuth = useContext(AuthContext);
  const { user } = stateAuth;
  const stateMaintenance = useContext(MaintenanceContext)
  console.log("stateAuth en dash", stateAuth)
  console.log("stateMaintenance en dash", stateMaintenance)

  return (
    <div>
      <h1> HELLOO!! {user && user.displayName}</h1>
      <h1> mantenimientos!! {stateMaintenance.maintenances.length}</h1>
    </div>
  )
}

export default Index;