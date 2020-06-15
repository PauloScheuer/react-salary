import React, { Component } from 'react';
import InputFullSalary from './components/inputs/InputFullSalary';
import InputReadOnly from './components/inputs/InputReadOnly';
import ProgressBarSalary from './components/bar/ProgressBarSalary';
import { calculateSalaryFrom } from './salary';
import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = { fullSalary: 1000 };
  }

  handleInputFullSalary = (event) => {
    const value = event.target.value;
    this.setState({
      fullSalary: value
    });
  }

  render() {
    const { baseINSS, baseIRPF, discountINSS, netSalary, discountIRPF } = calculateSalaryFrom(this.state.fullSalary);
    const percentINSS = (discountINSS * 100) / baseINSS;
    const percentIRPF = (discountIRPF * 100) / baseINSS;
    const percentNet = 100 - percentINSS - percentIRPF;
    return (
      <div className="container">
        <header>
          <h1>Calculadora de salário</h1>
        </header>
        <section className="secInput">
          <label className="t-sal">Seu salário</label>
          <InputFullSalary onChange={this.handleInputFullSalary} salary={this.state.fullSalary} />
        </section>
        <section className="readonly">
          <section className="secInput">
            <label className="b-inss">Base INSS</label>
            <InputReadOnly value={baseINSS} />
          </section>
          <section className="secInput">
            <label className="d-inss">Desconto INSS</label>
            <InputReadOnly value={discountINSS} percent={percentINSS} />
          </section>
          <section className="secInput">
            <label className="b-irpf">Base IRPF</label>
            <InputReadOnly value={baseIRPF} />
          </section>
          <section className="secInput">
            <label className="d-irpf">Desconto IRPF</label>
            <InputReadOnly value={discountIRPF} percent={percentIRPF} />
          </section>
          <section className="secInput">
            <label className="t-net">Salário líquido</label>
            <InputReadOnly value={netSalary} percent={percentNet} />
          </section>

        </section>
        <ProgressBarSalary percentINSS={percentINSS} percentIRPF={percentIRPF} percentNet={percentNet} />
      </div>
    )
  }
}

