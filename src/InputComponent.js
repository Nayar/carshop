import react from "react"

class InputComponent extends react.Component {
    render() {
        return <>
            <label>{this.props.name}: </label>
            <input type={this.props.type} placeholder={this.props.name}/>
            <br/>
        </>
    }
}

export default InputComponent