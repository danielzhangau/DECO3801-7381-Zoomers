import React, { Component } from 'react';

export var data;
export class ItemDb extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //     apiData: [],
    //     naData: []
    // }
    this.itemId = null;
    this.itemType = null;
    this.itemName = null;
    this.imagePath = null;
  }
  getData() {
    if (data != null) {
      console.log("data111 = " + data[0].itemId);
      return data;
    }
  }

  onPostItem = () => {
    fetch('http://localhost:19006/Reward', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ itemId: this.itemId, name: this.itemType, travelled: this.itemName, travelmoney: this.imagePath })
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
    this.itemId = null;
    this.itemType = null;
    this.email = null;
    this.password = null;
  }

  onGetItem = () => {
    fetch('http://localhost:19006/Reward/' + this.itemId, {
      method: 'GET'
    }).then((response) => {
      return response.json();
    }).then((jsonData) => {
      this.setState({
        apiData: jsonData
      })
      data = jsonData;
    })
      .catch((error) => {
        console.log(error.message);
      });
    this.itemId = null;
    return data;
  }

  onDeleteItem = () => {
    fetch('http://localhost:19006/Reward/' + this.itemId, {
      method: 'DELETE'
    }).then((response) => {
      console.log(response.rows);
    }).catch((error) => {
      console.warn(error);
    });
    this.itemId = null;
  }

  onPutItem = () => {
    fetch('http://localhost:19006/Reward', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ travelled: this.itemName, travelmoney: this.imagePath, id: this.itemId })
    }).then((response) => {
      return response.json();
    }).catch((error) => {
      console.warn(error);
    });
    this.itemId = null;
    this.itemType = null;
    this.email = null;
    this.password = null;
  }
};