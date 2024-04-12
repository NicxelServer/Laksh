import "./App.css";
import Allroutes from "./component/Allroutes";
//import Registration from "./Registration";
//import UserHome from "./UserHome";
//import AdminHome from "./AdminHome";
import { LoginUser } from "./redux/Authentication/auth.action";
  function App() {
    return (
      <div>
        <Allroutes /> 
        {/* <Registration /> */}
        {/* <UserHome /> */}
        {/* < AdminHome/> */}
      </div>
    );
  }

export default App;
