import axios from 'axios'

export function  request(config) {
    return new Promise((resolve, reject) => {
        //创建axios实例
        const instance = axios.create({
            baseURL: ' http://mengxuegu.com:7300/mock/5de9f92eebb26448cb470e60',
            timeout: 5000
        })
        //axios拦截器
        //请求拦截
        instance.interceptors.request.use((config) => {
            return config  //拦截操作完后要返回数据
        }, err => {
            console.log(err)
        })
        //响应拦截
        instance.interceptors.response.use((res) => {
            return res.data  //拦截操作完后要返回数据
        }, err => {
            console.log(err)
        })
        //发送网络请求
        instance(config)
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    }) 
}
//简写，同上
// export function  request(config) {
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
    
//     return instance(config)  //返回一个promise
// }