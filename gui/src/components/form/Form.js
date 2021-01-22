import * as React from "react";
import FormLabel from "./FormLabel";
import FormSubmit from "./FormSubmit";

class Form extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <FormLabel />
                    <FormSubmit />
                </form>
            </div>
        )
    }
}

export default Form;