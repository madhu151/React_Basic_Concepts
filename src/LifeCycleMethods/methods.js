import React, { Component } from 'react';
import '../App.css'

class LFMethods extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: 'madhu'
        }
        console.log('constructor constructor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps ', props, state, this);
        return null;
    }
    componentDidMount() {
        console.log("componentDidMount was called here");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("should component update ", nextProps, nextState);
        return true;
    }
    getSnapshotBeforeUpdate(preProps, prevState) {
        console.log("getSnapshotBeforeUpdate ", preProps, prevState, this)
        //  return ({name:"getSnapshotBeforeUpdate"});
        return null;
    }
    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError')
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.log('componentDidCatch');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate was called here!", prevProps, prevState);
       // this.setState({name: "didupdate........"})
        if (1) {
            return <div> No cars left! </div>
        }
    }
    componentWillUnmount(){
        console.log("componentWillUnmount was called here!");
       // window.removeEventListener("restart");
      }
    render() {
        console.log('render method called', this.state, this.props)
        return (
            <div className="App">
                <p>Welcome to react life cycle methods comp.........{this.state.name}</p>
                <button onClick={() => this.setState({ name: 'render' })}>click here  </button>
            </div>
        )
    }
}

export default LFMethods;


