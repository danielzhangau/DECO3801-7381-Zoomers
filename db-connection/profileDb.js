import React, { Component } from 'react';

export var data;
export class ProfileDb extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //     apiData: [],
    //     naData: []
    // }
    this.uid = null;
    this.name = null;
    this.travelled = null;
    this.travelmoney = null;
  }
  getData(){
    if(data != null){
      console.log("data111 = "+ data[0].id);
      return data;
    }
  }

    onPostUserProfile = () => {
     fetch('http://localhost:19007/profile',{
       method: 'POST',
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({ uid: this.uid, name: this.name, travelled: this.travelled, travelmoney: this.travelmoney })
     }).then((response) => {
       console.log("i am here!!");
       return response.json();
     }).then((jsonData) => {
          this.setState({
           naData: jsonData,
          })
          console.log(this.state.naData);
        })
        .catch((error) => {
          console.warn(error.message);
        });
        this.uid = null;
        this.name = null;
        this.email = null;
        this.password = null;
    }

  onGetUserProfile = () => {
   fetch('http://localhost:19007/profile/'+ this.uid,{
     method: 'GET'
   }).then((response) => {
     return response.json();
   }).then((jsonData) => {
        this.setState({
          apiData : jsonData
        })
        data = jsonData;
      })
      .catch((error) => {
        console.log(error.message);
      });
      this.uid = null;
      return data;
  }

    onDeleteUserProfile = () => {
     fetch('http://localhost:19007/profile/'+ this.uid,{
       method: 'DELETE'
     }).then((response) => {
       console.log(response.rows);
     }).catch((error) => {
          console.warn(error);
        });
        this.uid = null;
    }

  onPutUserProfile = () => {
     fetch('http://localhost:19007/profile',{
       method: 'PUT',
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({ travelled: this.travelled, travelmoney: this.travelmoney, id: this.uid })
     }).then((response) => {
       return response.json();
     }).catch((error) => {
          console.warn(error);
        });
        this.uid = null;
        this.name = null;
        this.email = null;
        this.password = null;
  }
};

