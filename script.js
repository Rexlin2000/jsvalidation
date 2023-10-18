
var listing = document.getElementById("list-container")
var input = document.getElementById("input")
function adding()
{
    
    var listitem = document.createElement("li")
    listitem.innerHTML=input.value + "<button onclick='deleteitem()'>Delete</button>"
    listing.append(listitem)
}

function deleteitem()
{
    event.target.parentElement.remove()
}