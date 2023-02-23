import React from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Beranda from "../Pages/Beranda";
import Gallery from "../Pages/Gallery";
import Deskripsi from "../Pages/Deskripsi";
import About from "../Pages/About"
import Webdev from "../Pages/Webdev";
import Pokemon from "../Pages/Pokemon";

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path = "/">
                        <Beranda/>
                    </Route>
                    <Route exact path = "/gallery">
                        <Gallery/>
                    </Route>
                    <Route exact path = "/webdev">
                        <Webdev/>
                    </Route>
                    <Route exact path = "/pokemon">
                        <Pokemon/>
                    </Route>
                    <Route exact path = "/desc">
                        <Deskripsi/>
                    </Route>
                    <Route exact path = "/about">
                        <About/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routes