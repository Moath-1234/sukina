import React, { Component } from "react";

class TextInput extends Component {
    render() {
        const { label, placeholder, type, value, name } = this.props;

        return (
            <div className="text-input-block">
                <label>{label} </label>
                {type === "text" ? (
                    <input name={name} value={value} placeholder={placeholder} onChange={this.onChange} />
                ) : (
                    <textarea name={name} value={value} placeholder={placeholder} onChange={this.onChange} />
                )}
            </div>
        );
    }
    onChange = ({ target: { name, value } }) => {
        const { onFieldChange } = this.props;
        onFieldChange(name, value);
    };
}

export default TextInput;
