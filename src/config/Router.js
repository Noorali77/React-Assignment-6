import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import LogIn from "../containers/LogIn";
import SignUp from "../containers/SignUp";
import Profile from "../containers/Profile";

function AppRouter(){
    return(
        <Router>
    <Switch>

        <Route  exact path='/' component={LogIn}  />
        <Route  exact path='/signup' component={SignUp}  />
        <Route  exact path='/profile' component={Profile}  />


          
        </Switch>
       

        </Router>
    )
}

export default AppRouter;