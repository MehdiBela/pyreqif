import * as React from "react";
import TableHead from "./TableHead";

class Table extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <TableHead/>
                    <tbody>
                    {this.props.data ? this.props.data.map((i, count) => {
                        return (
                            <tr key={`tr-${count}`}>
                                {i.map((j, count2) => {
                                    return (
                                        <td key={`td${count}${count2}`}>
                                            {j}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    }) : null
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;