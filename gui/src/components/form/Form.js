import * as React from "react";
import FormLabel from "./FormLabel";
import FormSubmit from "./FormSubmit";
//import FormUploader from "./FormUploader";
import FormSuccesMsg from "./FormSuccesMsg";

class Form extends React.Component {
    render() {
        return (
            <div>
                <form id="form">
                    <FormLabel />
                    <FormSubmit />
gi                    <FormSuccesMsg />
                </form>
            </div>
        )
    }
}

export default Form;