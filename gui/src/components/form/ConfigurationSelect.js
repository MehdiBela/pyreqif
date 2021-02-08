import * as React from "react";

class ConfigurationSelect extends React.Component {
    constructor(props) {
        super(props);
        try {
            this.state = {
                // eslint-disable-next-line no-undef
                configurations: configurations
            }
        } catch {
            this.state = {
                // eslint-disable-next-line no-undef
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