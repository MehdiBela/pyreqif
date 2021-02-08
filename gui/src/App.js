import * as React from "react";
import './App.css';
import './style.css';
import Table from "./components/table/Table";
import Form from "./components/form/Form";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this.dataLoaded = this.dataLoaded.bind(this);
    }

    dataLoaded(data) {
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Excel to ReqIF converter</h1>
                <Form onDataLoaded={this.dataLoaded}/>
                <Table data={this.state.data}/>
            </div>
        );
    }

}

export default App;
