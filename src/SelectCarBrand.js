import react from "react"



class SelectCarBrand extends react.Component {
    render() {
        return <>
            Brand <select onChange={this.props.onuserselect}>
            {this.props.list.map((singlecar) => <option value={singlecar.brand} key={singlecar.id}>{singlecar.brand}</option>)}
            </select>
        </>
    }
}

export default SelectCarBrand