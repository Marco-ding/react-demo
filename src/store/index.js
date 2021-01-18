/**
 * @Author: Aaron
 * @Date:   2017-12-11 14:08:20
 * @Email:  332904234@qq.com
 * @Last modified by:   Aaron
 * @Last modified time: 2017-12-11 17:06:15
 * @Copyright: 1.0
 */

import orderLine from "./OrderLine";
import timer from "./timer";
class Stores {
  constructor() {
    this.orderLine = orderLine;
    this.timer = timer;
  }
}

export default new Stores();
