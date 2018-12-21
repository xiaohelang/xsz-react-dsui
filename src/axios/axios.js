import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }

    static ajax(options){
        let loading;
        // axios.defaults.timeout = 180000
        // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

        // function startLoading() {
        //     console.log('开始showloading')
        //     Indicator.open({
        //         text: '加载中...',
        //         spinnerType: 'fading-circle'
        //     })
        // }
        // function stopLoading() {
        //     console.log('关闭showloading')
        //     Indicator.close();
        // }
        // if (options.data && options.data.isShowLoading !== false){
            // loading = document.getElementById('ajaxLoading');
            // loading.style.display = 'block';
        // }
        
        let baseApi = 'https://www.easy-mock.com/mock/5bea817f6588b126483ff59d/testApi';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'post',
                baseURL:baseApi,
                timeout:15000,
                params: (options.data && options.data.params) || ''
            }).then((response)=>{
                // if (options.data && options.data.isShowLoading !== false) {
                    // loading = document.getElementById('ajaxLoading');
                    // loading.style.display = 'none';
                // }
                if (response.status === 200){
                    let res = response.data;
                    if (res.code === 0){
                        resolve(res);
                    }else{
                        Modal.info({
                            title:"提示",
                            content:res.msg
                        })
                    }
                }else{
                    reject(response.data);
                }
            }, (err) => {
                // loading = document.getElementById('ajaxLoading');
                // loading.style.display = 'none';
                reject(err)
            })
        });
    }
}