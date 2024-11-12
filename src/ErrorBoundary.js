import react from 'react'

// Component name should be capital

class ErrorBoundary extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    render() {
        if(this.state.hasError){
            return <>
                <h1 style={{
                    backgroundColor:'red'
                }}>This is my error boundary</h1>
            </>
        }
        else
            return this.props.children
    }
}

export default ErrorBoundary