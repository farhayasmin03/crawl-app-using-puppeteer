const http = require('http');
const puppeteer = require('puppeteer');

const request = require('request');
const port = 3000;
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/", function (req, res) {
    res.render("index");
})
app.use(express.static(__dirname + '/public'));

app.post('/url', function (req, res) {
    var url = req.body.url;
    (async () => {
        const browser = await puppeteer.launch({
            headless: true
        });
        const page = await browser.newPage();
        page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36")
        await page.setViewport({
            width: 1280,
            height: 800
        })
        await page.goto(url);
        await page.addScriptTag({
            url: 'https://code.jquery.com/jquery-3.2.1.min.js'
        });
        console.log(await page.title());
        await page.evaluate(() => {
            document.querySelector('button').click()
        });
        document.querySelector(title - value).innerHTML.title
        const textContent = await page.evaluate(() => document.querySelector('p').textContent);
        const innerText = await page.evaluate(() => document.querySelector('p').innerText);
        console.log(textContent);
        console.log(innerText);
        await browser.close();
    })();
    request(url, function (error, response, body) {
        var header = console.log(response.headers)

    })
})



app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});