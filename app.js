const http = require('http');
const puppeteer = require('puppeteer');

const request = require('request');
const port = 3000;
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var ejs = require('ejs');
app.set('view engine', 'ejs');
app.get("/", function (req, res) {
    res.render("index");
})
app.use(express.static(__dirname + '/public'));

app.post('/url', function (req, res) {
            (async () => {
                    
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto('https://sitepoint.com');
                    /* await page.addScriptTag({
                        url: 'https://code.jquery.com/jquery-3.2.1.min.js'
                    }); */

                    //console.log(await page.content());
                    console.log(await page.title());

                  /*  const result = await page.evaluate(() => {

                            $('h3.loop__post-title').each(function () {
                                    //const url = $(this).find().attr('meta');
                                    const title = $(this).find().attr('title')
                                    /* data.push({
                                        'title' : title,
                                        'url'   : url
                                        
                                    }); */
                                    /* console.log(title);
                                    await page.screenshot({
                                        path: 'example.png'
                                    });

                                    await browser.close();
                                    //console.log("hello")
                                }

                            });

 */
 

                    })();

            })
        


        app.listen(3000, function () {
            console.log('Example app listening on port 3000!')
        });