import * as React from "react";

class TableHead extends React.Component {
    render() {
        return (
            <thead>
            <tr onDrop={(e) => {
                this.props.drop(e);
            }}>
                {
                    this.props.headers.map(i => i)
                }
            </tr>
            </thead>
        )
    }
}

export default TableHead;