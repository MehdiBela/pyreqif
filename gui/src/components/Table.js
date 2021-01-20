import * as React from "react";
import TableHead from "./TableHead";

class Table extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <TableHead zeub={"abc"}/>
                    <tbody>
                    <tr>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
