import React from 'react'

const EventDetails = React.createClass({
    showEventDetails(event){
        return event.detail.data;
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
                <h3>Event Details</h3>
            </aside>
        )
    }
})

export default EventDetails
