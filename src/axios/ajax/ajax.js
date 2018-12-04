import {ajax} from '../http';
let  app = 'http://api.dev01.ushopal.com';
// <---------------------------------------------------------------商品管理---------------------------------------------------------->
export const shoplie = params => {
  return ajax.get(`${app}/api/backend/goods-list`, {params:params})
}; //商品列表
export const fluctuate = params => {
  return ajax.post(`${app}/api/backend/goods-shelves`, params)
}; //上下架
export const Adshop = params => {
  return ajax.post(`${app}/api/backend/goods-add`, params)
}; //商品添加
export const Areste = params => {
  return ajax.post(`${app}/api/backend/goods-edit`, params)
}; //商品更新
export const branADd = params => {
  return ajax.post(`${app}/api/backend/brand-add`, params)
}; //品牌添加
export const branEdit = params => {
  return ajax.post(`${app}/api/backend/brand-edit`, params)
}; //品牌修改
export const bralie = params => {
  return ajax.get(`${app}/api/backend/brand-list`, {params:params})
}; //品牌列表
export const Afragment = params => {
  return ajax.post(`${app}/api/backend/goods-pictures-add`, params)
}; //商品片添加
export const Supload = params => {
  return ajax.file(`${app}/api/backend/upload`, params)
}; //图片上传保存路径
export const Hedit = params => {
  return ajax.get(`${app}/api/backend/goods-edit-data`, {params:params})
}; //获取商品编辑数据
export const Pedit = params => {
  return ajax.get(`${app}/api/backend/brand-edit-data`, {params:params})
}; //获取品牌编辑数据
export const Panlie = params => {
  return ajax.get(`${app}/api/backend/goods-pictures-list`, {params:params})
}; //获取商品片列表

// <---------------------------------------------------------------店铺管理---------------------------------------------------------->
export const dianlie = params => {
  return ajax.get(`${app}/api/backend/shop-list`, {params:params})
}; //店铺列表
export const Puload = params => {
  return ajax.post(`${app}/api/backend/shop-verify`, params)
}; //店铺审核


// <---------------------------------------------------------------订单管理---------------------------------------------------------->
export const Billlie = params => {
  return ajax.get(`${app}/api/backend/orders-list`, {params:params})
}; //订单列表
export const Xlie = params => {
  return ajax.get(`${app}/api/backend/orders-detail`, {params:params})
}; //销售订单明细
export const Puerp = params => {
  return ajax.post(`${app}/api/backend/logistics-import`, params)
}; //物流导入(ERP发货的物流信息)
export const Xuerp = params => {
  return ajax.get(`${app}/api/backend/order-export`, {params:params})
}; //订单导出(用于导入ERP进行发货)



// <---------------------------------------------------------------b用户管理---------------------------------------------------------->
export const Blie = params => {
  return ajax.get(`${app}/api/backend/buser-list`, {params:params})
}; //查看B用户列表
export const Ldan = params => {
  return ajax.get(`${app}/api/backend/agent-history-order`, {params:params})
}; //查看B用户历史订单
export const Bdai = params => {
  return ajax.get(`${app}/api/backend/agent-goods-list`, {params:params})
}; //查看B用代理产品
export const Sdanb = params => {
  return ajax.post(`${app}/api/backend/buser-verify`, params)
}; //审核B用户成为代理商
export const Dlib = params => {
  return ajax.get(`${app}/api/informa`,{params:params})
}; //代里用户信息-toB

// <---------------------------------------------------------------分红模块接口---------------------------------------------------------->

export const Slib = params => {
  return ajax.get(`${app}/api/backend/bonus-percentage-list`,{params:params})
}; //商品分红百分比列表
export const Sadd = params => {
  return ajax.post(`${app}/api/backend/bonus-percentage-add`, params)
}; //商品分红百分比添加
export const Seidt= params => {
  return ajax.post(`${app}/api/backend/bonus-percentage-edit`, params)
}; //商品分红百分比编辑
export const Saudit= params => {
  return ajax.post(`${app}/api/backend/bonus-percentage-verify`, params)
}; //商品分红百分比审核
export const Schoice = params => {
  return ajax.get(`${app}/api/backend/bonus-percentage-add-buser-list`,{params:params})
}; //商品分红百分比添加-选择B用户接
export const Sport= params => {
  return ajax.get(`${app}/api/backend/bonus-percentage-add-goods-list`,{params:params})
}; //商品分红百分比添加-选择品牌-选择商品接口


// <---------------------------------------------------------------财务统计接口---------------------------------------------------------->
export const Tkou = params => {
  return ajax.get(`${app}/api/backend/agent-bonus-total`,{params:params})
}; //查看B用户分红统计接口
export const Tmy = params => {
  return ajax.get(`${app}/api/backend/agent-bonus-detail`,{params:params})
}; //查看B用户明细接口
