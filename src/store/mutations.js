import {
  ARRIVED_CUSTOMER,
  ORDER_CUSTOMER,
  PRODUCT,
} from './mutation-types';
export default {
  [ARRIVED_CUSTOMER](state, data) { //已到网点客户
    state.arrived_customer = data;
  },
  [ORDER_CUSTOMER](state, data) { //网点客户预约列表
    state.order_customer = data;
  },
  [PRODUCT](state, data) { //推广产品列表
    state.product = data;
  },

  
}
