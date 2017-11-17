import axios from 'axios'


const baseXbUrl = 'http://jingke.steven.xibao100.com/';
const devBaseUrl = '/api/';

export default function req(reqData) {
    return new Promise((resolve, reject) => {
        let url = reqData.url;
        if (process.env.NODE_ENV === 'development') {
            reqData.url = devBaseUrl + url + '&test=1'
            console.log('request req data', reqData)
        }
        if (process.env.NODE_ENV === 'production') {
            reqData.url = baseXbUrl + url
        }
        axios(reqData).then(response => {
            if (process.env.NODE_ENV === 'development') {
                console.log('request response', response)
            }
            if (response.status === 200 && response.data) {
                let res = response.data
                if (typeof res === "string") {
                    try {
                        let obody = JSON.parse(res)
                        if (obody.code) {
                            reject({msg: res})
                        }
                    } catch (error) {
                        reject({msg: res})
                    }
                    return
                }
                if (!res) {
                    reject({msg:'ERROR'})
                    return
                }
                if (res.code) {
                    // reject({msg: res.msg});
                    reject(res.msg)
                    return;
                }
                resolve(res.res);
            } else {
                reject('error ' + JSON.stringify(response));
            }
        }).catch(error => {
            console.log(error)
            reject({msg: error})
        });
    });
}