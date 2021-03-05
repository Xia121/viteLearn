/* 生成接口，vue2.0 直接挂载到原型上 vue3.0需要用不同的方法挂载到vue上 从mian.js上查看
 * @Author: xia
 * @Date: 2021-03-04 15:00:02
 */
import request from './request';
import { apiUrl } from './apiUrl';

let services = {};

Object.entries(apiUrl).forEach((item) => {
    services[item[0]] = function (options = {}) {
        return request(Object.assign({
            'url': item[1]
        }, options))
    }
})

// // 将services挂载到vue的原型上
// // 业务中引用的方法：this.$services.接口名（小驼峰）
// Object.defineProperty(Vue.prototype, '$services', {
//     'value': services
// });





export default services;
