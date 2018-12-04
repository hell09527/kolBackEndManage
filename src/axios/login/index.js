import {ajax} from '../http';
let  app = 'http://api.dev01.ushopal.com';



export const authenicator = params => {
  return  ajax.get(`${app}/api/user/authenicator`, {params:params})
}; //用户认证
export const getUser = params => {
  return ajax.get(`${app}/api/user/info`, {params:params})
}; //userinfo
