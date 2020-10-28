import { Component } from "react";

declare class ItemDb extends Component{
    constructor(props){
        var state ={
            apiData:[],
            naData:[]
        };
        var itemId;
        var itemType;
        var itemName;
        var imagePath;
    };
    onPostItem():any;
    onGetItem():any;
    onDeleteItem():any;
    onPutItem():any;
    getData():any;
}
declare var data:[];
