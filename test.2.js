const axios = require("axios");
const path = require("path");
const fs = require("fs");
var http = require("http");
//下载网页
let url = `http://www.920hdhd.com`;

//查找图片
//下载图片
//本地保存图片

async function test() {
  //下载网页
  let page = await getPage(url).catch(err => {
    console.log(err);
  });
  let regx = /(?!<img[\s]*src=["'])https?:\/\/[^"']+["'](?=[\s]*\/>)/g;
  //查找图片
  let image_urls = page.match(regx);
  console.log(image_urls);
  //下载图片


}

test();

function getPage(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, function(res) {
        let data = "";
        res.on("data", function(d) {
          data += d;
        });
        res.on("end", function(d) {
          resolve(data);
        });
      })
      .on("error", function(e) {
        reject(e);
      });
  });
}

function get_image(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, function(res) {
        let data = "";
        res.on("data", function(d) {
          data += d;
        });
        res.on("end", function(d) {
          resolve(data);
        });
      })
      .on("error", function(e) {
        reject(e);
      });
  });
}
