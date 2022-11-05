import {useState, useEffect} from "react";
import { watchUserChanges, watchMaintenance } from "../services/firebase";

const initialMaintenance = {
    maintenances: [],
};

let isSetup = false;

const useMaintenanceState = () => {
    const [stateMaintenance, setStateMaintenance] = useState(initialMaintenance);

    useEffect(() => {
        watchUserChanges((user) => {
            if (user && !isSetup) {
                isSetup = true;

                watchMaintenance((maintenances) => {
                    setStateMaintenance( {maintenances})
                })
            }
        })
        watchUserChanges();
    }, []) 
    return stateMaintenance;
}

export default useMaintenanceState;