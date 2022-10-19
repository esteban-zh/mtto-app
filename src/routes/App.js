import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "../pages/login"
import AuthContext from "../context/AuthContext";
import useAuthState from "../hooks/useAuthState";
import useMaintenanceState from '../hooks/useMaintenanceState';
import MaintenanceContext from "../context/MaintenanceContext";
import SecurityRoute from '../components/securityRoute';
import '.././style.scss'

const App = () => {
    const auth = useAuthState();
    const maintenance = useMaintenanceState();
    return (
        <MaintenanceContext.Provider value={maintenance}>
            <AuthContext.Provider value={auth}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/dashboard" element={<SecurityRoute/>}/>
                        <Route path="/login" element={<Login/>} />
                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
        </MaintenanceContext.Provider>
    )
}

export default App;