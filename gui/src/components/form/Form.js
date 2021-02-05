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
     * Enable submit if provided file is valid
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

    submit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        fetch("http://localhost:5000/", {
            body: data,
            method: "post"
        })
            .then(res => res.json().then((data) => {
                if (res.status === 400) {
                    this.setState({errors: [data.error], fileData: null})
                } else {
                    this.setState({errors: [], fileData: data.data});
                    this.props.onDataLoaded(data.data);
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
    }
};

export default Form;