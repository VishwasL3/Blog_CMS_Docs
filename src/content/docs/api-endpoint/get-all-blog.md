---
title: Get All Blogs
---

- GET:  /api/v1/public/blog/get-all – Get API key to retrieve all blogs<br>

```js
const axios = require('axios');
let data = '';

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api-blog.laughlogiclabs.com/api/v1/public/blog/get-all',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJwYWxhayIsImlhdCI6MTc0OTcwNzc0MiwiZXhwIjoxNzQ5Nzk0MTQyfQ.QYvgzzVdFte5F08qk4C8AY7uMTrFD0gj_h2NIqs_PBY', 
    'Cookie': 'accessToken=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNjBiMTVmYS1mMjk1LTQxMWYtYWExOC1lYjY1ZGFhYjdmNzUiLCJpYXQiOjE3NTEyNjQwNzd9.ubW6ZIa810xbf3dX_aPpic2VOIL-vVQVpptFc6hrwUA'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```