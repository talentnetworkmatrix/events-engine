import { AdminContent } from "../pages/AdminContent";
import { AdminDashboard } from "../pages/AdminDashboard";

const routesAdmin = [
  {
    path: '/admin',
    component: <AdminDashboard />,
    role: 'admin',
  },
  {
    path: '/admin-content',
    component: <AdminContent />,
    role: 'admin',
  },
]


export { routesAdmin };
