import React from "react";
import {render} from "react-dom";

class App extends React.Component{
    render(){
        return (
          <div className="container">
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <h1> Hello !!</h1>
                    <a href="https://www.youtube.com/watch?v=G40iHC-h0c0&t=228s"><h2> Youtube Tutorial </h2></a>
              </div>
            </div>
          </div>
        );
    }
}

render(<App/>,document.getElementById("app"));