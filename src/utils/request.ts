import Axios from "axios";

interface Response {
    status: number,
    data: any
}

type Method = "POST" | "GET"

const request = async (url: string, method: Method, data?: any, headers?: any): Promise<Response> => {
    let status, responseData
    try {
        const res = await Axios({
            method: method,
            url,
            data,
            headers
        })
        status = res.status
        responseData = res.data
    } catch (e) {
        status = e.response.status
        responseData = e.response.data
    }
    return {status: status, data: responseData}


    // FIXME use fetch/unfetch with cypress
    // const res = await fetch(url, {
    //     method,
    //     body: data,
    //     headers: headers,
    // })
    // if (res.ok)
    //     return {status: res.status, data: await res.json()}
    // else
    //     return {status: res.status, data: await res.text()}
}


export const get = (url: string, data?: any, headers?: any): Promise<Response> => {
    return request(url, "GET", data, headers)
}

export const post = (url: string, data?: any, headers?: any): Promise<Response> => {
    return request(url, "POST", JSON.stringify(data), headers)
}