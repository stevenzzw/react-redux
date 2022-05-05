import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import {creatAddPerson} from '../redux/person_action'

 class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        console.log(name, age);
        const newObj = { id: nanoid(), name, age }
       this.props.addPpl(newObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }



    render() {
        return (
            <div>
                <h2>Sum is {this.props.sum}</h2>
                <input ref={c => this.nameNode = c}></input>
                <input ref={c => this.ageNode = c}></input>
                <button onClick={this.addPerson}>Enter</button>
                <ul>
                    {
                        this.props.ppl.map((p)=>{
                            return <li key={p.id}>{p.name}---{p.age}</li>
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}

export default connect(

    state=>({
        ppl:state.person,
        sum:state.sum
    }
        ),
    {addPpl:creatAddPerson}
)(Person)
