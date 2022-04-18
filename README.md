# Kodi-JSON-API-Example


Show Notification

```javascript
fetch('http://YOURKODI-IPHERE:PORTHERE/jsonrpc', {
    method: 'POST',
    headers: {'Content-Type':'application/json'}, // this line is important, if this content-type is not set it wont work
    body: '{"jsonrpc": "2.0", "method": "GUI.ShowNotification", "params": {"title": "HERE ADD THE TITLE", "message": "ADD THE MESSAGE HERE" }, "id": 1}'
});
```
