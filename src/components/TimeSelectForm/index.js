import React, { Component } from "react";
import moment from "moment";
import TimePicker from "../TimePicker";

class TimeSelectForm extends Component {
  state = {
    // value: moment()
    value: moment('10:00', "HH:mm:ss")
  };

  handleChange = value => this.setState({ value });

  handleSubmit = e => {
    e.preventDefault();
    alert(moment(this.state.value).format("hh:mm a"));
  };

  render = () => (
    <form onSubmit={this.handleSubmit}>
      <TimePicker value={this.state.value} onChange={this.handleChange} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TimeSelectForm;
