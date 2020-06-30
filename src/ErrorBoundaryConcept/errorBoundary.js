import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info) {
        console.log('componentDidCatch componentDidCatch', error, info)
    }
    render() {
        if (this.state.hasError) {
            return <div>Something Went Wrong!</div>
        }
        return this.props.children
    }
}

export default ErrorBoundary;
