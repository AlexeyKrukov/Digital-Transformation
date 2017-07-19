'use strict'
let express = require('express'),
    app = express(),
    con = require("./controllers/connection");
/*class player {
    constructor(login, password, name, cash, debt, needs){
        this.login = login;
        this.password = password;
        this.name = name;
        this.cash = cash;
        this.debt = debt;
        this.needs = needs;
    }
    get(){
        let get = require("./controllers/get.js");
    }
    set(){
        let set = require("./controllers/set.js");
    }
}
player.get();*/
let player = {
    get: function(){
        let get = require("./controllers/get.js");
    },
    set: function(){
        let set = require("./controllers/set.js");
    }
}