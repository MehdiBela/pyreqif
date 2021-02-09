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
            <select className={"form-select"}
                    onChange={(e) => {
                        this.props.onSelectConfiguration(this.state.configurations[e.target.selectedIndex - 1]);
                    }}
            >
                <option>Saved configurations ...</option>
                {this.state.configurations.map((config, i) => {
                    return <option value={i} key={`config${i}`}>
                        {config.name}
                    </option>
                })}
            </select>
        )
    }
}

export default ConfigurationSelect;