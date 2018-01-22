import React from "react";

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:1
        }
        this.climb = this.climb.bind(this);
    }

    climb(){
        this.setState({
            count:this.state.count + 1
        });
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.climb}>+</button>

            </div>
        )
    }
}