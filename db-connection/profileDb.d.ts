import { Component } from "react";

declare class ProfileDb extends Component{
    uid: any;
    name: any;
    travelled: number;
    travellmoney: number;
    constructor(props){
        var state ={
            apiData:[],
            naData:[]
        };
        var uid:any;
        var name;
        var travelled;
        var travelmoney;
    };
    onPostUserProfile():any;
    onGetUserProfile():any;
    onDeleteUserProfile():any;
    onPutUserProfile():any;
    getData():any;
}
declare var data:[];
