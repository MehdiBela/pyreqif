import * as React from "react";

class TableHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDelete: false
        }
    }

    bgHover = "bg-primary";

    dragStart(e) {
        e.dataTransfer.setData("id", this.props.id);
    }

    dragExit(e) {
        e.target.classList.remove(this.bgHover);
    }

    allowDrop(e) {
        e.preventDefault();
        e.target.classList.add(this.bgHover);
    }

    mouseEnter() {
        this.setState({
            showDelete: true
        })
    }

    mouseLeave() {
        this.setState({
            showDelete: false
        })
    }

    render() {
        return (
            <th className={"position-relative"}
                onDragOver={(e) => this.allowDrop(e)}
                onDragStart={(e) => this.dragStart(e)}
                onDragLeave={(e) => this.dragExit(e)}
                onDragExit={(e) => this.dragExit(e)}
                onMouseEnter={() => this.mouseEnter()}
                onMouseLeave={() => this.mouseLeave()}
                draggable={true} id={this.props.id}>
                {this.props.name}
                {
                    this.state.showDelete ?
                        <a style={styles.closeBtn} onClick={() => this.props.removeHeader(this)}>&#10060;</a>
                        : ""
                }

            </th>
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

export default TableHeader;