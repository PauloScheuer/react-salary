import React, { Component } from 'react';
import './styles.css';

export default class InputReadOnly extends Component {
  render() {
    const { value, percent } = this.props;
    let show = '';
    if (percent === undefined || isNaN(percent)) {
      console.log(typeof (percent));
      show = '';
    } else {
      show = ` - ${Math.round(percent)}%`;
    }
    return (
      <input readOnly placeholder={Math.round(value) + show} className="read" />
    )
  }
}
