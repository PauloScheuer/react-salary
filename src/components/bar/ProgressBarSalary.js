import React, { Component } from 'react'
import './styles.css';

export default class ProgressBarSalary extends Component {
  render() {
    const { percentINSS, percentIRPF, percentNet } = this.props;
    return (
      <div className="bar">
        <div className="inss" style={{ width: `${percentINSS}%` }}></div>
        <div className="irpf" style={{ width: `${percentIRPF}%` }}></div>
        <div className="net" style={{ width: `${percentNet}%` }}></div>
      </div>
    )
  }
}
