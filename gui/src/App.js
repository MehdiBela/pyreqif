import * as React from "react";
import './App.css';
import './style.css';
import Table from "./components/table/Table";
import Form from "./components/form/Form";
import "bootstrap/dist/css/bootstrap.min.css";


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
                    <div className={"row"}>
                        <div className={"col-12 py-2 mb-2"} style={styles.bgFra}>
                            <h2 className={"text-center"}>Excel to ReqIF Converter</h2>
                        </div>
                    </div>
                    <div className={"d-flex"}>
                        <div className={"mx-auto"}>
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

const styles = {
    bgFra: {
        backgroundColor: "#09357a",
        color: "#ffffff"
    }
};

export default App;
