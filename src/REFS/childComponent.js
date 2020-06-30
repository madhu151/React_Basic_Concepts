import React, { Component } from 'react';

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'mastan'
        }
    }
    handleClick() {
        this.setState({ name: 'madhu' });
        return this.state.name;
    }
    render() {
        return (
            <>
                <p>refs child component............{this.state.name}</p>
            </>
        );
    }
}

export default ChildComponent;