$(document).ready(function () {

var user = ''
var title = ''


$("#form").submit(function (event) {
event.preventDefault()

var username = $("#username").val()

searchUsers(username)
})



function searchUsers(username) {

$.get("https://api.github.com/search/users?q=" + username + "+in:user&per_page=10",function (data) {

console.log(data)

data.items.forEach(item => {




user = `<img id="image" class = "img-thumbnail ml-4" width="100" height="100" style=";" src="${item.avatar_url}"/>`

title = `<p><button value="${item.login}" onclick='func(this)' style="font-family: inherit;margin-left:25px;margin-top:15px;" class="btn btn-secondary">${item.login}</button></p>`
$("#result").append(user).append(title)

});
})
}
})