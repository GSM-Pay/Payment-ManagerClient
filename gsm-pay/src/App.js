import React, { Component } from 'react';
import { Home, StudentList,Payment } from 'pages';
import { Route} from 'react-router-dom';
class App extends Component {
    render() {      
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/studentlist" component={StudentList} />
                <Route path="/payment" component={Payment} />
            </div>
        );
    };
};
export default App;