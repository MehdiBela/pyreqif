import * as React from "react";
import './App.css';
import './style.css';
import Table from "./components/table/Table";
import Form from "./components/form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import TableHeader from "./components/table/TableHeader";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.removeHeader = this.removeHeader.bind(this);
        const headers = [
            "ReqIF.LongName",
            "ReqIF.ChapterName",
            "ReqIF.Description",
            "ReqIF.ForeignID",
            "ReqIF.Identifier",
            "IE PUID",
            "ReqIF.Name",
            "ReqIF.Prefix",
            "ReqIF.Text"
        ].map((header, count) => <TableHeader name={header} key={`head${count}`} id={`head${count}`}
                                              removeHeader={(tableHeader) => {
                                                  this.removeHeader(tableHeader);
                                              }}
            />
        );

        this.state = {
            data: null,
            headers: headers,
            removedColumns: []
        };
        this.dataLoaded = this.dataLoaded.bind(this);
        this.drop = this.drop.bind(this);
        this.removedColumns = this.removedColumns.bind(this);
        this.selectConfiguration = this.selectConfiguration.bind(this);
    }

    removeHeader(tableHeader) {
        const state = {...this.state};
        if (window.confirm(`Are you sure you want to remove ${tableHeader.props.name} ?`)) {
            state.headers.splice(state.headers.indexOf(state.headers.find(i => i.key === tableHeader.props.id)), 1);
            this.setState(state);
        }
    }

    bgHover = "bg-primary";

    /**
     * Drop event handler : swap elements, update state and display
     * @param e
     * @param self
     */
    drop(e) {
        // for (const th of document.querySelectorAll(`th.${this.bgHover}`)) {
        //     th.classList.remove(this.bgHover);
        // }
        const source = this.state.headers.find(i => i.key === e.dataTransfer.getData("id")),
            target = this.state.headers.find(i => i.key === e.target.id);
        e.target.classList.remove("bg-primary");
        let headers = [...this.state.headers];
        headers = this.swapItemsInArray(headers, headers.indexOf(source), headers.indexOf(target));
        const state = {...this.state};
        state.headers = headers;
        this.setState(state);
    }

    /**
     * Swap the position of two elements in array
     * @param items
     * @param indexA
     * @param indexB
     * @return {*[]}
     */
    swapItemsInArray(items, indexA, indexB) {
        const itemA = items[indexA];
        const clone = [...items];
        clone[indexA] = clone[indexB];
        clone[indexB] = itemA;
        return clone;
    }

    dataLoaded(data) {
        this.setState({
            data: data,
            headers: this.state.headers,
            removedColumns: [],
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

    selectConfiguration(config) {
        if (!config) {
            return;
        }
        const state = {...this.state};
        state.removedColumns = config.removed_columns;
        state.headers = config.headers.map((header, count) => {
                return (
                    <TableHeader name={header} key={`head${count}`} id={`head${count}`}
                                 removeHeader={(tableHeader) => {
                                     this.removeHeader(tableHeader);
                                 }}
                    />
                )
            }
        );
        for (const i of config.removed_columns) {
            try {
                state.data.splice(i, 1);
            } catch {
            }
        }
        this.setState(state);
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
                            <Form onDataLoaded={this.dataLoaded} removedColumns={this.state.removedColumns}
                                  onSelectConfiguration={this.selectConfiguration}/>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <Table data={this.state.data} removedColumns={this.removedColumns} drop={this.drop}
                                   headers={this.state.headers}/>
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
    },
};

export default App;
