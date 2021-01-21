const TableHeader = (props) => {
    return (
        <th style={styles.theaderStyle}>{props.name}</th>
    )
};

const styles = {
    theaderStyle: {
        backgroundColor: "#2980b9",
        cursor: "pointer",
        padding: "1em"
    }
}

export default TableHeader;