# url-cache-flush
force flush url resource cache in browser

```javascript
const { flush } = require('url-cache-flush')

flush('https://xxxx').then(res => console.log(res))
```