import Contacts from "../pages/Contacts";
import Registration from "../pages/Registration";

//cool wait to declare your routes without clustering the code
const routes = [
  {path: '/', name: 'Contacts', component: Contacts, exact: true },
  {path: '/newcontact', name: 'Registration', component: Registration, exact: true },
]

export default routes