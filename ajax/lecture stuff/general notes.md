AJAX
Make requests to the server without reloading the page.
examples: go to discord website. Inspect element-> network. start typing messages and xhr requests will populate. xhr = XML/asynch JS requests (AJAX).

Nands says:
# Ajax - Asynchronous javascript and XML
# sends request to the server asynchronously receives the response and loads the data without page refresh
# the data is not just limited to be XML, it could be JSON, text and html
# object used to perform AJAX is XHR (xml http request)
# fetch is a promise based library(web api) for ajax (newer and easier version built into web browser)
# axios is even better version of fetch, although we have to install it explicitly ( helps us perform get and post requests lot easily)

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
Can GET/POST whatever to a URL and check if it was successful or not

function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();
eg: 1_xhr.html -> fetch.html


PROMISES
callback function that returns 2 things (promises):
handles errors .then (success) and .catch (error)
callback function returns promise and makes your code async

AXIOS
https://github.com/axios/axios

    Make XMLHttpRequests from the browser
    Make http requests from node.js
    Supports the Promise API
    Intercept request and response
    Transform request and response data
    Cancel requests
    Automatic transforms for JSON data
    Client side support for protecting against XSRF

AXIOS not built in, kind of a 'gem' - needs to be installed. Fetch is in built. 
bundlephobia.com - can site handle extra stuff, shows dependencies


Api List:
https://github.com/public-apis/public-apis
1. find API
2. read docs, requirements?
3. test on PostMan

some require API key. q1 example, getting random pictures. q1.js line 1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules importing and exporting files.
JS has no built in mechanism. make a keys file and git ignore it. then export them as an abject e.g 
const URL = "whatever"
const ID = "numbers"
etc

expot {URL, ID, etc}