import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tickTock(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tickTock() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return <span>{this.state.date.toLocaleTimeString()}</span>
  }
}

export default Clock
