chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    console.log(request.status);
    sendResponse({})
  });
