// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
constructor(){
    super()
    this.state = {
        mood: "happy"
    }
    //I have to bind because setState could not be read
    this.handleToggleClick = this.handleToggleClick.bind(this)

}
   

    handleToggleClick () {
     const {mood} = this.state;
     if (mood === 'happy'){
        this.setState({
            mood: 'sad'
        })

     }else{
         this.setState({
             mood: 'happy'
         })
     }

    }
    render() {
        return (
            <div onClick={this.handleToggleClick}>
         {this.state.mood}
                
            </div>
        )
    }
}
