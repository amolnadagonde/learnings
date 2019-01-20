import React from "react";
import ReactDOM from "react-dom";

export default class DurationCalculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            eventName: '',
            dateValue: '',
            eventDetails: {}
        }
        this.handleEventNameChange = this.handleEventNameChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputDateChange = this.handleInputDateChange.bind(this);
    }

    handleEventNameChange(event){
        this.setState({
            eventName: event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        console.log("in handleSubmit");
        this.setState((prevState, props)=>({
            eventDetails: {
                eventName: prevState.eventName,
                dateValue: prevState.dateValue, 
            }
        }))
    }

    handleInputDateChange(event){
        console.log("in handleInputDateChange");
        this.setState({
            dateValue: event.target.value,
        })
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <label>Enter the event name:</label>
                <input
                    type="text"
                    onChange={this.handleEventNameChange}
                    value={this.state.eventName}
                />
                <input 
                    type="date"
                    onChange={this.handleInputDateChange}
                    value={this.state.dateValue}
                />
                <input type="submit" value="SUBMIT" />
                <RenderEventDetails eName={this.state.eventName} eDate={this.state.dateValue} />
            </form>
        )
    }
}

class RenderEventDetails extends React.Component{
    render(){
        return(
            <div>
                <p>Your event name is: {this.props.eName}</p>
                <p>Date for the event is: {this.props.eDate}</p>
            </div>
        )
    }
}