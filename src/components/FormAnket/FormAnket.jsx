import React, { Component } from "react";
import shortid from "shortid";

const Subscribe = {
  water: {
    NO: "no",
    YES: "yes"
  },
  sewerage: {
    NO: "no",
    YES: "yes"
  },
  hood: {
    NO: "no",
    YES: "yes"
  },
  stock: {
    NO: "no",
    YES: "yes"
  }
};

class FormAnket extends Component {
  state = {
    nameCompany: "",
    products: "",
    equipment: "",
    areaStart: 0,
    areaFinish: 0,
    subscriptionWater: "no",
    subscriptionSewerage: "no",
    subscriptionHood: "no",
    subscriptionStock: "no",
    agreed: false
  };


  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubscribeChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleAgreedChange = (e) => {
    this.setState({
      agreed: e.target.checked
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const note = {
      id: shortid.generate(),
      date: new Date(),
      initialValue: this.state
    };

    console.log("NOTE", note);
  };


  render() {
    const { nameCompany, products, equipment, areaStart, areaFinish, subscriptionWater, subscriptionSewerage, subscriptionHood, subscriptionStock, agreed } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Название компании (юридическое или физическое лицо предприниматель):<br/>
          <input name="nameCompany" type="name" value={nameCompany} onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          Группа товаров/услуг и название, которое будет реализовываться:<br/>
          <input name="products" type="text" value={products} onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          Оборудование, мощность и т.д.:<br/>
          <input name="equipment" type="text" value={equipment} onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          Площадь аренды (от):<br/>
          <input name="areaStart" type="number" value={areaStart} onChange={this.handleChange}/>
        </label>
        <label>
          до
          <input name="areaFinish" type="number" value={areaFinish} onChange={this.handleChange}/>
          кв. м.):
        </label>
        <br/>
        {/*Вода*/}
        <div role="group">
          Вода
          <label>
            <input name="subscriptionWater" type="radio" value={Subscribe.water.NO}
                   checked={Subscribe.water.NO === subscriptionWater}
                   onChange={this.handleSubscribeChange}/>
            Нет
          </label>
          <label>
            <input name="subscriptionWater" type="radio" value={Subscribe.water.YES}
                   checked={Subscribe.water.YES === subscriptionWater}
                   onChange={this.handleSubscribeChange}/>
            Да
          </label>
        </div>
        <br/>
        {/*Канализация*/}
        <div role="group">
          Канализация
          <label>
            <input name="subscriptionSewerage" type="radio" value={Subscribe.sewerage.NO}
                   checked={Subscribe.sewerage.NO === subscriptionSewerage}
                   onChange={this.handleSubscribeChange}/>
            Нет
          </label>
          <label>
            <input name="subscriptionSewerage" type="radio" value={Subscribe.sewerage.YES}
                   checked={Subscribe.sewerage.YES === subscriptionSewerage}
                   onChange={this.handleSubscribeChange}/>
            Да
          </label>
        </div>
        <br/>
        {/*Вытяжка*/}
        <div role="group">
          Вытяжка
          <label>
            <input name="subscriptionHood" type="radio" value={Subscribe.hood.NO}
                   checked={Subscribe.hood.NO === subscriptionHood}
                   onChange={this.handleSubscribeChange}/>
            Нет
          </label>
          <label>
            <input name="subscriptionHood" type="radio" value={Subscribe.hood.YES}
                   checked={Subscribe.hood.YES === subscriptionHood}
                   onChange={this.handleSubscribeChange}/>
            Да
          </label>
        </div>
        <br/>
        {/*Склад*/}
        <div role="group">
          Склад
          <label>
            <input name="subscriptionStock" type="radio" value={Subscribe.stock.NO}
                   checked={Subscribe.stock.NO === subscriptionStock}
                   onChange={this.handleSubscribeChange}/>
            Нет
          </label>
          <label>
            <input name="subscriptionStock" type="radio" value={Subscribe.stock.YES}
                   checked={Subscribe.stock.YES === subscriptionStock}
                   onChange={this.handleSubscribeChange}/>
            Да
          </label>
        </div>
        <br/>
        <label>
          Соглашаюсь с вышеописанной информацией:
          <br/>
          <input name="agreed" type="checkbox" value={areaFinish} checked={agreed} onChange={this.handleAgreedChange}/>
        </label>
        <br/>
        <button type="submit" disabled={!agreed} onClick={this.postRequest}>Отправить</button>
      </form>
    );
  }
}

export default FormAnket;