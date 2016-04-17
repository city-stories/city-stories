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
        console.log(this.state.eventData)
        var hide = (this.state.eventData.title === '')

        return (
            <aside>
                <section hidden={hide}>
                    <hr />
                    <h2>Event Details</h2>
                    <h4>{this.state.eventData.title}</h4>
                    <p>{this.state.eventData.description}</p>
                    <hr />
                </section>
            </aside>
        )
    }
})

export default EventDetails
