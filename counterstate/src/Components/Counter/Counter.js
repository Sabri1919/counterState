import React from 'react'
import './Counter.css'
import { Button, Form } from 'react-bootstrap'

class Counter extends React.Component {
    state ={
        count:0,
        inText: "",
    }


    // Incrementation

    addClick = () => {
        this.setState({
            count : this.state.count +1
        })
    }

    // Décrementation

    minusClick = () => {
        this.state.count > 0 && this.setState ({
            count : this.state.count -1 
        }) 
    }


    handleChange = (e) => {
        this.setState({
            inText: e.target.value
        })
    }


    // Component life cycle
    componentDidMount = () => {
        console.log("component did mount")
    }


    componentDidUpdate = (prevProps, prevState) => {
        console.log("component did update")
        console.log(prevState)
    }


    componentWillUnmount = () => {
        console.log("component will unmount")
    }





    render() {
        console.log("Component render")
        return (
            <div>
                <h1>This is a counter</h1>
                <div className="counterContent">
                    <Button variant="success" onClick={this.addClick}>+</Button>
                    <h2>{this.state.count}</h2>
                    <Button variant="danger" onClick={this.minusClick}>-</Button>
                </div>
                <Form.Control type="text" onChange={this.handleChange} placeholder="Enter your E-mail" />
                <h3>{this.state.inText}</h3>
            </div>
        );
    }
    
}

export default Counter
