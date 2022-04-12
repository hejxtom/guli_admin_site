import request from '~/utils/request'

export default {
  createNative(orderNo) {
    return request({
      baseURL: request.baseURL,
      url: `/api/trade/weixin-pay/create-native/${orderNo}`,
      method: 'get'
    })
  },
  wxNotify() {
    return request({
      baseURL: request.baseURL,
      url: '/api/trade/weixin-pay/callback/notify',
      method: 'post'
    })
  }
}
