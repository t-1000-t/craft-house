import React, { Component } from "react";
import stylish from "./FormAnket.module.css";
import { TextField } from "@material-ui/core";



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
    agreed: false,
    phoneNumber: ""
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

  postFetchMongo = async (note) => {
    await fetch("https://craft-server.herokuapp.com/list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
      redirect: "follow"
    })
      .then(response => response.text())
      .catch(error => console.log("error", error))
      .finally(() => {
        this.props.openNotify();
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const note = {
      // id: shortid.generate(),
      // date: new Date(),
      initialValue: this.state
    };

    console.log("NOTE", note);

    this.postFetchMongo(note);

    this.props.onClose();

  };

  handleDecremareaStart = (e) => {
    this.setState({
      areaStart: this.state.areaStart - 1
    })
  };

  handleIncremareaStart = (e) => {
    this.setState({
      areaStart: this.state.areaStart + 1
    })
  };

  handleDecremareaFinish = (e) => {
    this.setState({
      areaFinish: this.state.areaFinish - 1
    })
  };

  handleIncremareaFinish = (e) => {
    this.setState({
      areaFinish: this.state.areaFinish + 1
    })
  };




  render() {
    const { nameCompany, products, equipment, areaStart, areaFinish, subscriptionWater, subscriptionSewerage, subscriptionHood, subscriptionStock, agreed, phoneNumber } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p className={stylish.textNameAny}>
            Название компании (юридическое или физическое лицо предприниматель):
          </p>
          <br/>
          <textarea aria-label="maximum height" rowsmin={3} name="nameCompany" type="name" value={nameCompany}
                    onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          <p className={stylish.textNameAny}>
            Группа товаров/услуг и название, которое будет реализовываться:
          </p>
          <br/>
          <textarea name="products" type="text" value={products} onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          <p className={stylish.textNameAny}>
            Оборудование, мощность и т.д.:
          </p>
          <br/>
          <textarea name="equipment" type="text" value={equipment} onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          <p className={stylish.textNameAny}>Площадь аренды (кв.м.):</p>
          <br/>
          <p className={stylish.textNameAny}>от</p>&nbsp;
          <button type="button" disabled={!areaStart} className={stylish.buttonDecrem} onClick={this.handleDecremareaStart}>–</button>
          <input className={stylish.inputDecremIncrem} placeholder="0" name="areaStart" type="number" value={areaStart}
                 onChange={this.handleChange}/>
          <button type="button" className={stylish.buttonIncrem} onClick={this.handleIncremareaStart}>+</button>
        </label>
        <label>
          <br/>
          <p className={stylish.textNameAny}>до</p>&nbsp;
          <button type="button" disabled={!areaFinish} onClick={this.handleDecremareaFinish} className={stylish.buttonDecrem}>–</button>
          <input className={stylish.inputDecremIncrem} placeholder="0" name="areaFinish" type="number" value={areaFinish} onChange={this.handleChange}/>
          <button type="button" className={stylish.buttonIncrem} onClick={this.handleIncremareaFinish}>+</button>
        </label>
        <br/>
        {/*Вода*/}
        <div role="group">
          <p className={stylish.textNameAny}>Вода</p>
          <label>

            <input className={stylish.optionalInputRadio} name="subscriptionWater" type="radio" value={Subscribe.water.NO}
                   checked={Subscribe.water.NO === subscriptionWater}
                   onChange={this.handleSubscribeChange}/>
            <p className={stylish.textRadio}>Нет</p>

          </label>
          <label>
            <input className={stylish.optionalInputRadio} name="subscriptionWater" type="radio" value={Subscribe.water.YES}
                   checked={Subscribe.water.YES === subscriptionWater}
                   onChange={this.handleSubscribeChange}/>
            <p className={stylish.textRadio}> Да</p>
          </label>
        </div>
        <br/>
        {/*Канализация*/}
        <div role="group">
          <p className={stylish.textNameAny}>Канализация</p>
          <label>
            <input className={stylish.optionalInputRadio} name="subscriptionSewerage" type="radio" value={Subscribe.sewerage.NO}
                   checked={Subscribe.sewerage.NO === subscriptionSewerage}
                   onChange={this.handleSubscribeChange}/>
            <p className={stylish.textRadio}>Нет</p>
          </label>
          <label>
            <input className={stylish.optionalInputRadio} name="subscriptionSewerage" type="radio" value={Subscribe.sewerage.YES}
                   checked={Subscribe.sewerage.YES === subscriptionSewerage}
                   onChange={this.handleSubscribeChange}/>
            <p className={stylish.textRadio}> Да</p>
          </label>
        </div>
        <br/>
        {/*Вытяжка*/}
        <div role="group">
          <p className={stylish.textNameAny}>Вытяжка</p>
          <label>
            <input className={stylish.optionalInputRadio} name="subscriptionHood" type="radio" value={Subscribe.hood.NO}
                   checked={Subscribe.hood.NO === subscriptionHood}
                   onChange={this.handleSubscribeChange}/>
            <p className={stylish.textRadio}> Нет</p>
          </label>
          <label>
            <input className={stylish.optionalInputRadio} name="subscriptionHood" type="radio" value={Subscribe.hood.YES}
                   checked={Subscribe.hood.YES === subscriptionHood}
                   onChange={this.handleSubscribeChange}/>
            <p className={stylish.textRadio}> Да</p>
          </label>
        </div>
        <br/>
        {/*Склад*/}
        <div role="group">
          <p className={stylish.textNameAny}>Склад</p>
          <label>
            <input className={stylish.optionalInputRadio} name="subscriptionStock" type="radio" value={Subscribe.stock.NO}
                   checked={Subscribe.stock.NO === subscriptionStock}
                   onChange={this.handleSubscribeChange}/>
            <p className={stylish.textRadio}> Нет</p>
          </label>
          <label>
            <input className={stylish.optionalInputRadio} name="subscriptionStock" type="radio" value={Subscribe.stock.YES}
                   checked={Subscribe.stock.YES === subscriptionStock}
                   onChange={this.handleSubscribeChange}/>
            <p className={stylish.textRadio}> Да</p>
          </label>
        </div>
        <br/>
        <label>
          <p className={stylish.textNameAny}>Контактный номер телефона:</p><br/>
          <TextField placeholder="(050)1234567" name="phoneNumber" type="phone" value={phoneNumber}
                     onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          <p className={stylish.textRadio}>Соглашаюсь с вышеописанной информацией:</p>
          <br/>
          <input className={stylish.optionalInput} name="agreed" type="checkbox" checked={agreed} onChange={this.handleAgreedChange}/>
        </label>

        <br/>
        <button className={stylish.btnSendForm} type="submit" disabled={!agreed}>Отправить</button>
      </form>
    );
  }
}

export default FormAnket;