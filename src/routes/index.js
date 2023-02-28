import { routesUser } from "./routesUser";
import { routesAdmin } from "./routesAdmin";

const routesList =
[
  ...routesUser,
  ...routesAdmin,
]

export { routesList }