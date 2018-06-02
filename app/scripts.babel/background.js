'use strict';

var code = `
  var status = %REPLACE%

  console.log(status)
setTimeout(function () {
  document.write(status)
}, 1000)
`


chrome.webRequest.onCompleted.addListener(details => {
  if (details.statusCode >= 400) {
    chrome.tabs.executeScript(details.tabId, {
      code: code.replace('%REPLACE%', details.statusCode)
    });
  }
}, {urls: ['<all_urls>']},[]);
