/*
============================================
; Title:  Modules
; Author: Darius Dinkins
; Date:   29 April 2020
; Modified By: Darius Dinkins
; Description: Learning Modules with Node.js
;===========================================
*/

var url = require("url");

var parsedURL = url.parse("https://www.test.net/profile?name=darius");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);
