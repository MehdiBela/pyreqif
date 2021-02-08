import TableHeader from "./TableHeader";
import * as React from "react";

class TableHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHeaders: [],
        };
        this.removeHeader = this.removeHeader.bind(this);
    }

    bgHover = "bg-primary";

    componentDidMount() {
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
        ];
        const tHeaders = headers.map((header, count) => {
            return <TableHeader name={header} key={`head${count}`} id={`head${count}`}
                                removeHeader={this.removeHeader}/>
        });
        this.setState({tableHeaders: tHeaders});
    }

    removeHeader(tableHeader) {
        const state = {...this.state};
        if (window.confirm(`Are you sure you want to delete ${tableHeader.props.name} ?`)) {
            state.tableHeaders.splice(state.tableHeaders.indexOf(state.tableHeaders.find(i => i.key === tableHeader.props.id)), 1);
            this.setState(state);
        }
    }

    /**
     * Drop event handler : swap elements, update state and display
     * @param e
     * @param self
     */
    drop(e, self) {
        for (const th of document.querySelectorAll(`th.${self.bgHover}`)) {
            th.classList.remove(this.bgHover);
        }
        const source = self.state.tableHeaders.find(i => i.key === e.dataTransfer.getData("id")),
            target = self.state.tableHeaders.find(i => i.key === e.target.id);
        let children = [...self.state.tableHeaders];
        children = self.swapItemsInArray(children, children.indexOf(source), children.indexOf(target));
        self.setState({tableHeaders: children})
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

    render() {
        return (
            <thead>
            <tr onDrop={(e) => this.drop(e, this)}>
                {
                    this.state.tableHeaders.map(i => i)
                }
            </tr>
            </thead>
        )
    }


}

export default TableHead;