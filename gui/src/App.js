import * as React from "react";
import './App.css';
import './style.css';
import Table from "./components/table/Table";
import Form from "./components/form/Form";
import  "bootstrap/dist/css/bootstrap.min.css";


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
                <div className={"grid"}>
                    <div className={"d-flex"}>
                        <div className={"mx-auto"}>
                            <h1 className={"text-center py-2"}>Excel to ReqIF Converter</h1>
                            <Form onDataLoaded={this.dataLoaded}/>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <Table data={this.state.data}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
