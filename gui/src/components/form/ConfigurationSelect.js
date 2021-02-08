import * as React from "react";

class ConfigurationSelect extends React.Component {
    constructor(props) {
        super(props);
        if (props.hasOwnProperty("configurations") && props.configurations.length) {
            this.state = {
                configurations: props.configurations
            }
        } else {
            this.state = {
                configurations: []
            }
        }
    }

    render() {
        return (
            <select>
                <option>Saved configurations ...</option>
                {this.state.configurations.map((config, i) => {
                    return <option value={config.headers} key={`config${i}`}>{config.name}</option>
                })}
            </select>
        )
    }
}

export default ConfigurationSelect;