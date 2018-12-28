
export default {
  /**
   * namespace 是 model state 在全局 state 所用的 key
   */
  namespace: 'count',

  /**
   * state 是默认数据
   */
  state: {
    record: 0,
    current: 0
  },
  /**
   * 订阅键盘事件
   */
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  /**
   * 异步处理
   */
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  /**
   * 更新 state
   */
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
