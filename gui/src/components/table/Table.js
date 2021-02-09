import * as React from "react";
import TableHead from "./TableHead";

class Table extends React.Component {

    mouseEnter(e) {
        if (e.target.children.length) {
            e.target.children[0].classList.remove("d-none");
        }
    }

    mouseLeave(e) {
        if (e.target.children.length) {
            e.target.children[0].classList.add("d-none");
        }
    }

    render() {
        return (
            <div className={this.props.data ? "d-block" : "d-none"}>
                <table>
                    <TableHead/>
                    <tbody>
                    {this.props.data ? this.props.data.map((i, count) => {
                        return (
                            <tr key={`tr-${count}`}>
                                {i.map((j, count2) => {
                                    return (
                                        <td key={`td${count}${count2}`} className={"position-relative"}
                                            onMouseEnter={(e) => this.mouseEnter(e)}
                                            onMouseLeave={(e) => this.mouseLeave(e)}
                                        >
                                            {j}
                                            <a style={styles.closeBtn} className={"d-none"} onClick={() => {
                                                this.props.removedColumns(count2);
                                            }}>
                                                &#10060;
                                            </a>
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

const styles = {
    closeBtn: {
        position: "absolute",
        top: 2,
        right: 2,
        fontSize: "0.8em"
    }
};

export default Table;