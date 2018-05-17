import axios from '../plugins/axios';
import {
  getStore,
  setStore
} from '../utils';
import {
  ARRIVED_CUSTOMER,
  ORDER_CUSTOMER,
  PRODUCT,
} from './mutation-types';
export default {
  /**获取当前登录用户 */
  async action_arrived_customer({
    commit,
    state
  }, {
    pageNo,
    pageSize
  }) {
    let res = await axios({
      url: "/arrivedCustomer/json",
      params: {
        userAccount: getStore('userAccount'),
        clientId: getStore('clientId'),
        token: getStore('token'),
        pageNo: pageNo || 1,
        pageSize: pageSize || 10,
      }
    })
    commit(ARRIVED_CUSTOMER, res);
  },

  async action_order_customer({
    commit,
    state
  }, {
    pageNo,
    pageSize
  }) {
    let res = await axios({
      url: "/order/customer",
      params: {
        userAccount: getStore('userAccount'),
        clientId: getStore('clientId'), 
        token: getStore('token'),
        pageNo: pageNo || 1,
        pageSize: pageSize || 10,
      }
    })
    commit(ORDER_CUSTOMER, res);
  },

  async action_product({
    commit,
    state
  }, {
    pageNo,
    pageSize
  }) {
    let res = await axios({
      url: "/product/json",
      params: {
        userAccount: getStore('userAccount'),
        clientId: getStore('clientId'),
        token: getStore('token'),
        pageNo: pageNo || 1,
        pageSize: pageSize || 10,
      }
    })
    commit(PRODUCT, res);
  },
}
