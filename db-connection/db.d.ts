import { Component } from "react";

declare class dbconnect extends Component {
    constructor(props) {
        var state = {
            apiData: [],
            naData: []
        };
        var uid;
        var name;
        var password;
        var email;
    };
    onPostUser(): any;
    onGetUsers(): any;
    onGetUser(): any;
    onDeleteUser(): any;
    onPutUser(): any;
    getname(): String;
}
declare function test2(i: any): number;