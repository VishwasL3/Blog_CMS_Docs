---
title: Get One Blog
---

- GET:  /api/v1/public/blog/{Your Blog Id} – Get API key to retrieve a specific blog<br>

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api-blog.laughlogiclabs.com/api/v1/public/blog/mutual-funds-in-india-the-complete-2025-guide',
  headers: { 
    'Cookie': 'accessToken=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNjBiMTVmYS1mMjk1LTQxMWYtYWExOC1lYjY1ZGFhYjdmNzUiLCJpYXQiOjE3NTEyNjQwNzd9.ubW6ZIa810xbf3dX_aPpic2VOIL-vVQVpptFc6hrwUA'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```