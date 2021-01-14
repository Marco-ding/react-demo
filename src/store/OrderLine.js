/**
 * @Author: Aaron
 * @Date:   2017-12-11 14:55:49
 * @Email:  332904234@qq.com
 * @Filename: OrderLine.js
 * @Last modified by:   Aaron
 * @Last modified time: 2017-12-12 08:34:33
 * @Copyright: 1.0
 */

import { observable, computed, action } from "mobx";

class OrderLine {
  @observable price = 0;
  @observable amount = 1;
  // 计算属性
  @computed get total() {
    return this.price * this.amount;
  }

  @observable length = 2;
  @computed get squared() {
    return this.length * this.length;
  }
  set squared(value) {
    // 这是一个自己的动作，不需要注解
    this.length = Math.pow(2, value);
  }

  @action.bound
  resize() {
    console.log(2222,this.price,this.total)
    this.price++;
  }
}

export default OrderLine;
