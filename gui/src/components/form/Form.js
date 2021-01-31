import * as React from "react";
import FormLabel from "./FormLabel";
import FormSubmit from "./FormSubmit";
//import FormUploader from "./FormUploader";
import FormSuccessMsg from "./FormSuccesMsg";

class Form extends React.Component {
    render() {
        return (
            <div>
                <form id="form">
                    <FormLabel />
                    <FormSubmit />
                    <FormSuccessMsg />
                </form>
            </div>
        )
    }
}

export default Form;