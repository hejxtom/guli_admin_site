import request from '~/utils/request'
export default {

  sendMessage(mobile) {
    return request({
      baseURL: request.baseURL,
      url: `/api/sms/send/${mobile}`,
      method: 'get'
    })
  },

  register(member) {
    return request({
      baseURL: request.baseURL,
      url: '/api/ucenter/member/register',
      method: 'post',
      data: member
    })
  }
}
