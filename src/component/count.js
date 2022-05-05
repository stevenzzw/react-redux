import React, { Component } from 'react'


export default class Count extends Component {


    // componentDidMount(){

    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    increment = () => {
        const { value } = this.selctNumber
        this.props.jia(value * 1)
    }
    decrement = () => {
        const { value } = this.selctNumber
        this.props.jian(value * 1)
    }
    incrementIfOdd = () => {
        const { value } = this.selctNumber
        if (this.props.count % 2 !== 0)
            this.props.jia(value * 1)

    }
    incrementAsync = () => {
        const { value } = this.selctNumber
        this.props.jianAsync(value * 1, 500)

    }



    render() {
        return (
            <div>
                <h1>The Sum is {this.props.count}, Total People Hava {this.props.pplSum}</h1>
                <select ref={c => this.selctNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>when Odd add</button>&nbsp;
                <button onClick={this.incrementAsync}>async add</button>&nbsp;
            </div>
        )
    }
}
