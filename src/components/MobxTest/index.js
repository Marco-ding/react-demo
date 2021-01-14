/**
 * @Author: Aaron
 * @Date:   2017-12-11 11:28:06
 * @Email:  332904234@qq.com
 * @Filename: MobxTest01.js
 * @Last modified by:   Aaron
 * @Last modified time: 2017-12-12 08:28:48
 * @Copyright: 1.0
 */



import React, { Component } from 'react';
// 引入观察者
import { observer,inject } from 'mobx-react';
import {observable} from 'mobx';

@inject('orderLine')
@observer
class MobxTest extends Component {
  @observable secondsPassed = 0;
  constructor(props) {
    super(props);
    this.state = {};

  }
  render() {
    return (
      <div>
        {/*
          <p>{this.props.orderLine.total}</p>
          <p>{this.props.orderLine.squared}</p>
          */}
        <p>{this.props.orderLine.price}</p>
        <p>{this.props.orderLine.total}</p>
        <p>{this.secondsPassed}</p>
        <button onClick={this.onReset.bind(this)}>按钮</button>
        {/*<button onClick={this.onReset.bind(this)}>Seconds passed: {this.props.appState.timer}</button>*/}
      </div>
    )
  }
//   componentWillReact(){
//     console.log('componentWillReact方法');
//   }
  componentWillMount() {
    console.log('componentWillMount方法');
  }
  onReset() {
    console.log(4444,this.props.orderLine.price)
    this.props.orderLine.resize();
    // this.props.orderLine.squared = 2;
    // this.props.timer.resetTime();
    // this.props.appState.resetTimer();
  }
}

export default MobxTest;
