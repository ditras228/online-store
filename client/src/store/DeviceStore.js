import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ]
        this._devices = [
            {id: 1, name: '12 pro', price: 9999, rating: 5, img: 'http://placehold.it/100x100'},
            {id: 2, name: '123', price: 3122, rating: 5, img: 'http://placehold.it/100x100'},
            {id: 3, name: '321', price: 99299, rating: 5, img: 'http://placehold.it/100x100'},
            {id: 4, name: '123', price: 993 , rating: 5, img: 'http://placehold.it/100x100'},
        ]
        this._selectedType={}
        this._selectedBrand={}
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types= types
    }
    setBrands(brands){
        this._brands= brands
    }
    setDevices(devices){
        this._devices= devices
    }
    setSelectedType(type){
        this._selectedType=type
    }
    setSelectedBrand(brand){
        this._selectedBrand=brand
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}