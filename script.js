window.onload = function() {
  // get api url
  const get_api = "https://randomuser.me/api/";
  // get api by axios
  axios.get(get_api)
  
  .then(Response =>{
    var data = Response.data.results[0]
    console.log(data)

    navbarWork(data)
    profileWork(data)
    aboutWork(data)
    renderFriends(data)
  })

}

function refresh(){
  const get_api = "https://randomuser.me/api/";
  // get api by axios
  axios.get(get_api)
  
  .then(Response =>{
    var data = Response.data.results[0]
    console.log(data)

    navbarWork(data)
    profileWork(data)
    aboutWork(data)
    renderFriends(data)
  })
}

// navbar part
function navbarWork(data) {
  var nav = document.querySelector('#nav_work')
  nav.innerHTML = `
    <img src="${data.picture.thumbnail}" alt="avatar">
    <span>${data.name.first}</span>
  `
}

// profile part
function profileWork(data) {
  var prof = document.querySelector('#profile_work')
  prof.innerHTML=`
    <img class="avatar" src="${data.picture.large}" alt="avatar">
    <h3 class="name">${data.name.first} ${data.name.last}</h3>
  `
}

// about part
function aboutWork(data) {
  var about = document.querySelector('#about_work')
  about.innerHTML=`
    <li class="list-group-item">
      <i class="fas fa-envelope fa-fw"></i>
      <span>${data.email}</span>
    </li>

    <li class="list-group-item">
      <i class="fas fa-mobile-alt fa-fw"></i>
      <span>${data.cell}</span>
    </li>

    <li class="list-group-item">
      <i class="fas fa-map-marker-alt fa-fw"></i>
      <span>${data.location.city},${data.location.state},${data.location.country} </span>
    </li>

    <li class="list-group-item">
      <i class="fas fa-birthday-cake fa-fw"></i>
      <span>${formatDate(data.dob.date)}</span>
    </li>
  `
}


function renderFriends(data) {
  var friendpic = document.querySelector('#friendpic')
  friendpic.innerHTML=`
  <img src="${data.picture.medium}" alt="Anna Ford" class="friend-avatar">
  `
}


function formatDate(date) {
  return new Date(date).toLocaleDateString("zh-Hant");
}