import * as React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

class Table extends React.Component {
    render() {
        return (
            <div>
                <table style={styles.tableStyle}>
                    <TableHead/>
                    <tbody>
                    <tr>
                        <td>contenu 1A</td>
                        <td>contenu 2A</td>
                        <td>contenu 3A</td>
                        <td>contenu 4A</td>
                        <td>contenu 5A</td>
                        <td>contenu 6A</td>
                        <td>contenu 7A</td>
                        <td>contenu 8A</td>
                        <td>contenu 9A</td>
                    </tr>
                    <tr>
                        <td>contenu 1B</td>
                        <td>contenu 2B</td>
                        <td>contenu 3B</td>
                        <td>contenu 4B</td>
                        <td>contenu 5B</td>
                        <td>contenu 6B</td>
                        <td>contenu 7B</td>
                        <td>contenu 8B</td>
                        <td>contenu 9B</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const styles = {
    tableStyle: {
        width: "100%",
    }
}


export default Table;
