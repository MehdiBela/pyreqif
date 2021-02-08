import * as React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            errors: [],
            fileData: null,
        };
    }

    /**
     * Enable submit if provided file is valid else show error
     * @param e
     */
    enableInput(e) {
        const newState = {...this.state};
        if (e.target.files.length) {
            const file = e.target.files[0];
            if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                || file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
                newState.disabled = false;
            } else {
                newState.errors.push("Invalid file format, please choose a valid Excel spreadsheet. Supported formats are: .xlsx,.xlsm,.xltx,.xltm.");
                newState.disabled = true;
            }
        }
        this.setState(newState);
    }

    /**
     * @return {*[]} array of headers text with user ordering
     */
    getHeaders() {
        return [...document.querySelectorAll("th")].map(i => i.textContent);
    }

    /**
     * Submit event handler
     * Either set preview data or trigger reqif file download
     * @param e
     */
    submit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        if (this.state.fileData) {
            data.set("headers", JSON.stringify(this.getHeaders()));
        }
        fetch("http://localhost:5000/", {
            body: data,
            method: "post"
        })
            .then(res => res.json().then((data) => {
                if (res.status === 400) {
                    this.setState({errors: [data.error], fileData: null})
                } else {
                    if (data.data) {
                        this.setState({errors: [], fileData: data.data});
                        this.props.onDataLoaded(data.data);
                    } else if (data.hasOwnProperty("reqif")) {
                        // create link and trigger click event
                        const reqif = `data:application/octet-stream,${encodeURIComponent(data.reqif)}`,
                            a = document.createElement("a");
                        a.setAttribute("href", reqif);
                        a.setAttribute("download", "converted.reqif");
                        const event = document.createEvent('MouseEvents');
                        event.initEvent('click', true, true);
                        a.dispatchEvent(event);
                    }

                }
            }).catch((err) => {
                this.setState({errors: [err.message], fileData: null});
            }))
            .catch((err) => {
                this.setState({errors: [err.message], fileData: null});
            });
    };

    render() {
        return (
            <form onSubmit={this.submit} style={styles.form}>
                <input type={"file"} accept={".xls, .xlsx"} name={"file"}
                       onChange={(e) => e.target.files.length ? this.enableInput(e) : ""}/>
                <button disabled={this.state.disabled}>Submit</button>
                {
                    this.state.errors.map((error, count) => {
                        return <p key={`error${count}`} style={styles.alertError}>{error}</p>
                    })
                }
                <div style={this.state.fileData ? styles.dBlock : styles.dNone}>
                    <p>Drag and drop table headers until they match your file data</p>
                    <p>You can right click on a column header or on a column to remove it</p>
                    <label htmlFor={"name"}>Name this configuration</label>
                    <input name={"name"} id={"name"}/>
                    <button>Get ReqIF file</button>
                </div>
            </form>
        )
    }
}

const styles = {
    alertError: {
        padding: "1em",
        color: "#721c24",
        backgroundColor: "#f8d7da",
        borderColor: "#f5c6cb"
    },
    form: {
        marginBottom: "1em"
    },
    dNone: {
        display: "none"
    },
    dBlock: {
        display: "block"
    }
};

export default Form;