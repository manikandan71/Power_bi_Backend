var request = require('request');
var http = require("http");
// var FormData = require('form-data');
// var form = new FormData();
const https = require("https");
const fs = require("fs");
var express = require("express");
// var axios = require("axios");
var app = express();
// var ab = require("jquery");
var cors = require("cors");
app.use(cors());

app.get("/finance", function (req, res) {
var options = {
  'method': 'GET',
  'url': 'https://login.microsoftonline.com//oauth2/token',
  'headers': {
    'Cookie': 'x-ms-gateway-slice=estsfd; stsservicecookie=estsfd; fpc=AganJvlgzsJAoSoa3tPbWDqtXf4iAQAAAK-CSdgOAAAA'
  },
  formData: {
    'client_id': '',
    'scope': 'openid',
    'code': '',
    'redirect_uri': 'http://localhost/5300',
    'grant_type': 'password',
    'client_secret': '',
    'username': '',
    'password': '',
    'resource': 'https://analysis.windows.net/powerbi/api'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  // console.log(response.body);
  // console.log('Errors: ');
      console.log(error);
      // console.log('Response: ');
      // console.log(response);
      res.send(response);
  
});
});

/*
app.get("/autoinsurance", function (req, res) {
  var options = {
    'method': 'GET',
    'url': 'https://login.microsoftonline.com/tentant/oauth2/token',
    'headers': {
      'Cookie': 'x-ms-gateway-slice=estsfd; stsservicecookie=estsfd; fpc=AganJvlgzsJAoSoa3tPbWDqtXf4iAQAAAK-CSdgOAAAA'
    },
    formData: {
      'client_id': '',
      'scope': 'openid',
      'code': '',
      'redirect_uri': 'http://localhost/5300',
      'grant_type': 'password',
      'client_secret': '',
      'username': '',
      'password': '',
      'resource': 'https://analysis.windows.net/powerbi/api'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    
  });
  });

  app.get("/telecom", function (req, res) {
    var options = {
      'method': 'GET',
      'url': 'https://login.microsoftonline.com/tentant/oauth2/token',
      'headers': {
        'Cookie': 'x-ms-gateway-slice=estsfd; stsservicecookie=estsfd; fpc=AganJvlgzsJAoSoa3tPbWDqtXf4iAQAAAK-CSdgOAAAA'
      },
      formData: {
        'client_id': '',
        'scope': 'openid',
        'code': '',
        'redirect_uri': 'http://localhost/5300',
        'grant_type': 'password',
        'client_secret': '',
        'username': '',
        'password': '',
        'resource': 'https://analysis.windows.net/powerbi/api'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      
    });
    });

    app.get("/retail", function (req, res) {
      var options = {
        'method': 'GET',
        'url': 'https://login.microsoftonline.com//oauth2/token',
        'headers': {
          'Cookie': 'x-ms-gateway-slice=estsfd; stsservicecookie=estsfd; fpc=AganJvlgzsJAoSoa3tPbWDqtXf4iAQAAAK-CSdgOAAAA'
        },
        formData: {
          'scope': 'openid',
          'code': '',
          'redirect_uri': 'http://localhost/5300',
          'grant_type': 'password',
          'client_secret': '',
          'username': '',
          'password': '',
          'resource': 'https://analysis.windows.net/powerbi/api'
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        
      });
      });
      */

      // var key = fs.readFileSync('/etc/letsencrypt/live/api.ittstar.ai/privkey.pem');
      // var cert = fs.readFileSync('/etc/letsencrypt/live/api.ittstar.ai/fullchain.pem');
      // var options = {
      //   key: key,
      //   cert: cert
      // };
http.createServer(app 
  
  ).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
