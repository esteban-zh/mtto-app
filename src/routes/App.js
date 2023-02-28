import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "../pages/login"
import Reports from '../pages/reports/reports';
import AuthContext from "../context/AuthContext";
import useAuthState from "../hooks/useAuthState";
import useMaintenanceState from '../hooks/useMaintenanceState';
import MaintenanceContext from "../context/MaintenanceContext";
import SecurityRoute from '../components/securityRoute';
import '.././style.scss'
import 'react-vis/dist/style.css'

const App = () => {
    const auth = useAuthState();
    const maintenance = useMaintenanceState();
    return (
        <MaintenanceContext.Provider value={maintenance}>
            <AuthContext.Provider value={auth}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login/>} />
                        <Route path="/" element={<SecurityRoute/>}/>
                        <Route path='/reports' element={<Reports/>}/>
                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
        </MaintenanceContext.Provider>
    )
}

export default App;