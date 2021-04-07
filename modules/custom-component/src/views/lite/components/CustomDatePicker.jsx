import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export class CustomDatePicker extends React.Component {
  state = {
    startDate: new Date(),
  }
  componentDidMount() {
    console.log('I was triggered during componentDidMount')

    this.setState({
      startDate: new Date()
    });
    this.handleChange = this.handleChange.bind(this);

    console.log(this.state.startDate)
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });

    this.props.onSendData({ type: 'text', text: date.toLocaleDateString() })
  }

  render() {
    return (
      <React.Fragment>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </React.Fragment>
    )
  }
}