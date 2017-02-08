import React from "react";
import {MainNavDrawer} from "./MainNavDrawer.jsx";
import {MainNavHeader} from "./MainNavHeader.jsx";

class App extends React.Component {

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">

                <MainNavHeader/>
                <MainNavDrawer/>

                <main className="mdl-layout__content">
                    <div className="page-content">
                        {this.props.children}
                    </div>
                </main>

            </div>
        )
    }

}

export default App;
