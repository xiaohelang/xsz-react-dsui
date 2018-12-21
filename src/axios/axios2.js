import axios from 'axios'
axios.defaults.timeout = 180000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.baseURL = 'http://192.168.3.118'

let requestingCount = 0
function startLoading() {
    console.log('开始showloading')
    // Indicator.open({
    //     text: '加载中...',
    //     spinnerType: 'fading-circle'
    // })
}
function stopLoading() {
    console.log('关闭showloading')
    // Indicator.close();
}
const handleRequestLoading = () => {
    startLoading()
}
const handleResponseLoading = () => {
    stopLoading()
}

axios.interceptors.request.use(
	config => {
		handleRequestLoading()
		return config
	},
	error => {
		handleRequestLoading()
		return Promise.reject(error)
	}
)

//  返回状态判断
axios.interceptors.response.use(
	res => {
		handleResponseLoading()
		return res
	},
	error => {
		handleResponseLoading()
		return Promise.reject(error)
	}
)

function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, {data: params, head: {
            "questUID" : "1",
            "clientIP" : "192.168.103.56",
            "version" : "1.0.0",
            "userToken" : userToken
        }}).then(response => {
                if(response.data.status.status === 0) {
					console.log('成功返回结果--->', response.data) 
					resolve(response.data)
                } else {
					let errorMsg = {}
					errorMsg.code = response.data.status.status
					errorMsg.msg = response.data.status.msg2Dev
					console.log('请求成功，但返回错误结果--->', errorMsg) 
					reject(errorMsg)
                }
            }, err => {
				let errorMsg = {}
				errorMsg.code = err.code
				switch(err.code){
					case 'ECONNABORTED': 
					errorMsg.msg = '请求连接超时'
					break
					default: errorMsg.msg = '数据请求失败'
				}
				// console.log('接口错误--->', err)
				console.log('接口错误--->', errorMsg)
                reject(errorMsg)
            })
            .catch((error) => {
                console.log('捕捉到异常-->', error)
                reject(error)
            })
    })
}