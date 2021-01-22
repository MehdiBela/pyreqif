import TableHeader from "./TableHeader";

const TableHead = (props) => {
    const bgHover = "bg-primary",
        headers = [
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

    const tableHeaders = headers.map((header, count) => {
        return <TableHeader name={header} key={`head${count}`}/>
    });

    function drop(e) {
        for (const th of document.querySelectorAll(`th.${bgHover}`)) {
            th.classList.remove(bgHover);
        }
    }

    return (
        <thead onDrop={drop}>
        <tr>
            {
                tableHeaders.map(i => i)
            }
        </tr>
        </thead>
    )

};

export default TableHead;