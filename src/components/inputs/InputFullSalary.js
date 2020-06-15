import React, { Component } from 'react';
import './styles.css';

export default class InputFullSalary extends Component {
  render() {
    const { onChange, salary } = this.props;
    return (
      <input onChange={onChange} type="number" className="full" placeholder={salary} />
    )
  }
}
