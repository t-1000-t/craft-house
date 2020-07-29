import React, { Component } from "react";

class FormAnket extends Component {
  state = {
    nameCompany: "",
    products: "",
    equipment: "",
    areaStart: 0,
    areaFinish: 0

  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("OK!");
  };


  render() {
    const { nameCompany, products, equipment, areaStart, areaFinish } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Название компании (юридическое или физическое лицо предприниматель):
          <input name="nameCompany" type="name" value={nameCompany} onChange={this.handleChange}/>
        </label>
        <label>
          Группа товаров/услуг и название, которое будет реализовываться:
          <input name="products" type="text" value={products} onChange={this.handleChange}/>
        </label>
        <label>
          Оборудование, мощность и т.д.:
          <input name="equipment" type="text" value={equipment} onChange={this.handleChange}/>
        </label>
        <label>
          Площадь аренды (от):
          <input name="areaStart" type="number" value={areaStart} onChange={this.handleChange}/>
        </label>
        <label>
          до
          <input name="areaFinish" type="number" value={areaFinish} onChange={this.handleChange}/>
          кв. м.):
        </label>
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default FormAnket;