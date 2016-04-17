import React from 'react'

const EventDetails = React.createClass({
    getInitialState(){
        return {
            eventData : {
                "id": "",
                "latitude": "",
                "longitude": "",
                "poster": "",
                "category": "",
                "description": "",
                "title": "",
                "date": "",
                "time": "",
                "attendees": ""
            }
        }
    },
    showEventDetails(event){
        this.setState({
            eventData: event.detail.data
        })
    },
    componentDidMount() {
        window.addEventListener('showEventDetails', this.showEventDetails);
    },
    componentWillUnmount() {
        window.removeEventListener('showEventDetails', this.showEventDetails);
    },
    render(){
        return (
            <aside>
                <h2>Event Details</h2>
                <h4>{this.state.eventData.title}</h4>
                <p>{this.state.eventData.description}</p>
                <hr />
            </aside>
        )
    }
})

export default EventDetails
