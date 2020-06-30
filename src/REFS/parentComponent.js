import React, { Component } from 'react';
import ChildComponent from './childComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleClick() {
        console.log(this.refs.child.handleClick())
    }
    render() {
        return (
            <>
                <ChildComponent ref="child"></ChildComponent>
                <button onClick={() => this.handleClick()}>click me</button>
            </>
        );
    }
}

export default ParentComponent;