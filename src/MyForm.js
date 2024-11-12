import react from 'react'
import InputComponent from './InputComponent'

const onsubmit = (event) => {
    event.preventDefault() // prevents the page from reloading
    let inputs = event.target.getElementsByTagName('input')
    for (const item of inputs) {
      console.log(item.value)
    }
}

class MyForm extends react.Component {
    render() {
        return <div>
            <h1>My form</h1>
            <form onSubmit={onsubmit}>
                <InputComponent name="name" type="text"/>
                <InputComponent name="address" type="text"/>
                <InputComponent name="father" type="text"/>

                
                <input type='submit'/>
            </form>
        </div>
    }
}

export default MyForm