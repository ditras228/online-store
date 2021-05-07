import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";
export const registration = async  (email, password)=>{
    const {data}= await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    return jwt_decode(data.token)
}
export const fetchTypes = async  ()=>{
    const {data}= await $authHost.get('api/type')
    return data
}
export const createType = async  (type)=>{
    const {data}= await $authHost.post('api/type', type)
    return data
}
export const createBrand = async  (brand)=>{
    const {data}= await $authHost.post('api/brand', brand)
    return data
}
export const fetchBrands  = async  ()=>{
    const {data}= await $authHost.get('api/brand')
    return data
}
export const createDevice = async  (device)=>{
    const {data}= await $authHost.post('api/device', device)
    return data
}
export const fetchDevices  = async  (typeId, brandId, page, limit)=>{
    const {data}= await $authHost.get('api/device', {params: {
      typeId,brandId,page,limit
    }})
    return data
}
export const fetchOneDevices  = async  (id)=>{
    const {data}= await $authHost.get('api/device/'+id)
    return data
}