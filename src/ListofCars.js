import react from 'react'

class ListofCars extends react.Component {
   
    render() {
        if(this.props.list.length <= 1) {
            throw('list is only 1')
        }
        return (
            <>
                <h1>This is my list of cars component</h1>
                <ol>
                    {this.props.list.map(singlecar => 
                    <li key={singlecar.id} style={{ marginBottom: "10px"}}> 
                        <ul>
                            <li>Brand: {singlecar.brand}</li>
                            <li>Name: {singlecar.name}</li>
                            <li>Year of creation: {singlecar.year}</li>
                            <li>Origin: {singlecar.origin}</li>
                        </ul>
                    </li>)}
                </ol>
            </>
        )
    }
}

export default ListofCars

