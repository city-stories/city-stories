import React from 'react'

const EventDetails = React.createClass({
    getInitialState() {
      return {selected: {}}
    },
    showEventDetails(event){
      this.setState({ selected: event.detail.data })
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
                <div>
                  <div>{JSON.stringify(this.state.selected)}</div>
                  <div>{this.state.selected.name || this.state.selected.title}</div>
                  <div>{this.state.selected.description}</div>
                </div>
            </aside>
        )
    }
})

export default EventDetails
