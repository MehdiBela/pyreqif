const TableHeader = (props) => {
    const bgHover = "bg-primary";

    function dragStart(e) {

    }

    function dragExit(e) {
        e.target.classList.remove(bgHover);
    }

    function allowDrop(e) {
        e.preventDefault();
        e.target.classList.add(bgHover);
    }

    return (
        <th style={styles.headerStyle} onDragOver={allowDrop} onDragStart={dragStart} onDragLeave={dragExit} onDragExit={dragExit}>
            {props.name}
        </th>
    )
};

const styles = {
    headerStyle: {
        cursor: "pointer",
        padding: 2
    }
}

export default TableHeader;