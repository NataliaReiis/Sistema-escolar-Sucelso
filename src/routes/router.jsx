import App from "../App"
import HomeStudent from "../pages/student/HomeStudent.jsx"
import Room from "../pages/student/Room"
import NotesEvaluations from "../pages/student/NotesEvaluations"
import DashboardAdmin from "../pages/AdminUser/DashboardAdmin"
import DashboardTeacher from "../pages/teacher/DashboardTeacher"
import Query from "../pages/AdminUser/Query"
import ThrowNotes from "../pages/AdminUser/ThrowNotes"
import Upload from "../pages/AdminUser/Upload"

import {createBrowserRouter} from "react-router-dom";
/* import { Navigate } from 'react-router-dom';
 */

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, 
    },
    { 
        path: "inicio",
        element: <HomeStudent />,
    },
    {
        path: "sala-de-aula",
        element: <Room />,
    },
    {
        path: "notas",
        element: <NotesEvaluations />,
    },
    {
        path: "dashboard-coordenador",
        element: <DashboardAdmin />,
    },
    {
        path: "dashboard-professor",
        element: <DashboardTeacher />,
    },
    {
        path: "consulta",
        element: <Query />,    
    },
    {
        path: "lançar-notas",
        element: <ThrowNotes />,
    },
    {
        path: "enviar-videos",
        element: <Upload />,
    }, 
  
])

export default router;