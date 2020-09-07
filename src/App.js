import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Whatwedo from "./pages/Whatwedo";
import Whoweare from "./pages/Whoweare";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import ScrollToTop from "./components/ScrollToTop";
import ToTopButton from "./components/ToTopButton";
import Footer from "./components/Footer";
import Donate from "./pages/Donate";

export default function App(props) {
    const loader = document.getElementById("loader-container");
    const body = document.getElementsByTagName("body")[0];
    const hideLoader = () => loader.classList.add("hide");

    // Remove loading page 500ms after page loads
    window.addEventListener("load", function () {
        setTimeout(() => {
            hideLoader();
            // Let body become scrollable
            body.classList.remove("no-scroll");
        }, 150);
    });
    return (
        <Router>
            <ScrollToTop />
            <Navbar body={body} />
            <ToTopButton />
            <Switch>
                <Route path="/donate">
                    <Donate />
                </Route>
                <Route path="/contactus">
                    <Contactus />
                </Route>
                <Route path="/aboutus">
                    <Aboutus />
                </Route>
                <Route path="/whoweare">
                    <Whoweare />
                </Route>
                <Route path="/whatwedo">
                    <Whatwedo />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}
