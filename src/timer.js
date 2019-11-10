import React, { Component } from 'react';
import TimerStat from './TimerStat'
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ms: this.props.milliseconds,
            hours: 0,
            minutes: 0,
            seconds: 0,
            start: false
        }
    }
    startCounting = () => {
        this.setState({start: !this.state.start })
    }
    componentDidMount() {
            setInterval(() => {
                this.state.start ?
                this.setState({ms: this.state.ms + 1000 },() => this.convert())  : clearInterval(this.state.ms)
            },1000)

    }

    // convert ms to seconds
    convert = () => {
        this.setState({ hours: Math.floor((this.state.ms / 3600000) % 24) })
        this.setState({ minutes: Math.floor((this.state.ms / 60000) % 60) })
        this.setState({ seconds: Math.floor((this.state.ms / 1000) % 60) })
    }
    ResetCounting=()=>{
        this.setState({ ms: this.props.milliseconds, start: false }, () => this.convert());
    }
    
    render() {
        return (
        <div>
            <TimerStat ms={this.state.ms} time={{ hours: this.state.hours, minutes: this.state.minutes, seconds: this.state.seconds }} />
            <button onClick={this.startCounting}>{this.state.start ? 'Pause' : 'Start'}</button>
            <button onClick={this.ResetCounting}>Reset</button>
        </div>);
    }
}

export default Timer;