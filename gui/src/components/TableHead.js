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
        <tr>
            {
                headers.map((header, count) => {
                        return <TableHeader name={header} key={`head${count}`}/>
                    }
                )
            }
        </tr>
        </thead>
    )
};

export default TableHead;