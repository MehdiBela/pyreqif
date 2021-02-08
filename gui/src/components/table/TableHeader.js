import * as React from "react";

class TableHeader extends React.Component {
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

    render() {
        return (
            <th className={"position-relative"}
                onDragOver={(e) => this.allowDrop(e)}
                onDragStart={(e) => this.dragStart(e)}
                onDragLeave={(e) => this.dragExit(e)}
                onDragExit={(e) => this.dragExit(e)}
                draggable={true} id={this.props.id}>
                {this.props.name}
                <a style={styles.closeBtn} onClick={() => this.props.removeHeader(this)}>&#10060;</a>
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