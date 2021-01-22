import * as React from "react";

class FormLabel extends React.Component {
    render() {
        return (
            <label>
                <p>Choisissez le fichier à importer (xls, xlsx)</p>
                <input type="file" accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
            </label>
        )
    }
}

export default FormLabel;