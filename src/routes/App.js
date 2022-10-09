import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from "../pages/dashboard"
import Login from "../pages/login"
import AuthContext from "../context/AuthContext";
import useAuthState from "../hooks/useAuthState";
import useMaintenanceState from '../hooks/useMaintenanceState';
import MaintenanceContext from "../context/MaintenanceContext";


const App = () => {
    const auth = useAuthState();
    const maintenance = useMaintenanceState();
    console.log("este es auth en app", auth)
    return (
        <MaintenanceContext.Provider value={maintenance}>
            <AuthContext.Provider value={auth}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Index/>} />
                        <Route path="/login" element={<Login/>} />
                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
        </MaintenanceContext.Provider>
    )
}

export default App;