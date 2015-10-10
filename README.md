# kefir-get

GET requests as kefir stream, in node and the browser

## installation

`npm install kefir-get`

## usage

```javascript

var KefirGet = require('kefir-get')

KefirGet('https://en.wikipedia.org/wiki/Special:RecentChanges')
   .map(parseHTML)
   .map(articles)
```

## API

### KefirGet(url)

returns a stream of responses, or an error. stream ends after a single value.

