import TableHeader from "./TableHeader";

const TableHead = (props) => {
    const headers = [
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
    return (
        <thead>
        {
            headers.forEach(i => {
                    return <TableHeader name={i}/>
                }
            )
        }
        </thead>
    )
}

export default TableHead;