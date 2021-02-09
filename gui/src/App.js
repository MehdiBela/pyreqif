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
            data: null,
            removedColumns: []
        };
        this.dataLoaded = this.dataLoaded.bind(this);
        this.removedColumns = this.removedColumns.bind(this);
    }

    dataLoaded(data) {
        this.setState({
            data: data,
            removedColumns: []
        })
    }

    removedColumns(colIndex) {
        if (window.confirm(`Are you sure you want to remove column ${colIndex + 1} ?`)) {
            const state = {...this.state};
            for (const i of state.data) {
                i.splice(colIndex, 1);
            }
            state.removedColumns = [...this.state.removedColumns, colIndex];
            this.setState(state);
        }
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
                        <div className={"mx-auto"} style={styles.width400}>
                            <Form onDataLoaded={this.dataLoaded} removedColumns={this.state.removedColumns}/>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <Table data={this.state.data} removedColumns={this.removedColumns}/>
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
    },
    width400: {
        minWidth: 400
    }
};

export default App;
