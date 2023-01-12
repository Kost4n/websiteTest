
import './App.css';
import Header from "./Modules/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Style1 from "./Pages/Style1";
import Style2 from "./Pages/Style2";
import Style3 from "./Pages/Style3";
import Home from "./Pages/Home";
import Footer from "./Modules/Footer";


function App() {
    return (
      <>
          <div className="">
                <Header/>
              <Footer />
          </div>

  </>
  );
}

export default App;
