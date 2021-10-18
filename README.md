# axios-with-api
利用axios來引用API搭配類FB切版

* 引入axios
```js
<script src="https://unpkg.com/axios/dist/axios.min.js" ></script>
```
* 使用的api
https://randomuser.me/api/
```json
  {
    "gender": "male",
    "name": {
        "title": "Mr",
        "first": "Gauthier",
        "last": "Chevalier"
    },
    "location": {
        "street": {
            "number": 8602,
            "name": "Rue des Abbesses"
        },
        "city": "Le Havre",
        "state": "Loiret",
        "country": "France",
        "postcode": 83742,
        "coordinates": {
            "latitude": "0.6231",
            "longitude": "-121.8887"
        },
        "timezone": {
            "offset": "-6:00",
            "description": "Central Time (US & Canada), Mexico City"
        }
    },
    "email": "gauthier.chevalier@example.com",
    "login": {
        "uuid": "523da69d-86e6-43de-952f-e7e013847594",
        "username": "bluewolf898",
        "password": "elvisp",
        "salt": "Fz6yl26g",
        "md5": "2fa8c0d592c00efc1257908e738ad813",
        "sha1": "0004b3a9fd1bac94acf086c0379f3cb83fd9da08",
        "sha256": "ed31d82bb00436cad1ac9e0954a271e8e3ec6db529720c5d3997b0a72e75241d"
    },
    "dob": {
        "date": "1970-07-24T02:04:28.495Z",
        "age": 51
    },
    "registered": {
        "date": "2017-08-16T04:34:02.685Z",
        "age": 4
    },
    "phone": "01-25-24-35-32",
    "cell": "06-44-76-57-16",
    "id": {
        "name": "INSEE",
        "value": "1NNaN01015644 41"
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/0.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
    },
    "nat": "FR"
}
  ```

## axios 取得api資料
  ```js
  // get api url
  const get_api = "https://randomuser.me/api/";
  // get api by axios
  axios.get(get_api)
  
  .then(Response =>{
    var data = Response.data.results[0]
    console.log(data)
    
    navbarWork(data)
  }) 
  ```
## 將取得資料利用innerHTML顯示
  ```js
  // navbar part
  function navbarWork(data) {
    var nav = document.querySelector('#nav_work')
    nav.innerHTML = `
      <img src="${data.picture.thumbnail}" alt="avatar">
      <span>${data.name.first}</span>
    `
  }
  ```
  
  
