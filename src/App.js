import { Route, Switch } from "react-router-dom";
import Login from "./components/login.component";
import Navbar from "./components/navbar.component";
import Signup from "./components/sign-up.component";
import Home from "./components/home.component";

function App() {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route path="/login" render={ (props) => <Login {...props}/> }/>
                <Route path="/sign-up" render={ (props) => <Signup {...props}/> }/>
                <Route path="/" render={ (props) => <Home {...props}/> }/>
            </Switch>
        </>
    );
}

export default App;
