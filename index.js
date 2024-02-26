var Name=document.getElementById("Name");
var Price=document.getElementById("Price");
var Catorgy=document.getElementById("Catorgy");
var Description=document.getElementById("Description");
var url = document.querySelector("[name='url']");
var list=[];
var mainBtn=document.getElementById("mainBtn");

if(localStorage.getItem("product")!=null){
    list=JSON.parse(localStorage.getItem("product"))
    displayProduct();
}else{
    list=[]
}

function addProduct() {
        var product={
        name:Name.value,
        price:Price.value,
        cat:Catorgy.value,
        des:Description.value,
        url:url.value,
    }
    clearForm();
    list.push(product)
    localStorage.setItem("product",JSON.stringify(list))
    displayProduct();
    console.log(list);
} 
function displayProduct() {
    cartona=``;
    for (let i = 0; i < list.length; i++) {
        cartona+=
            `<tr>
            <td>${i+1}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td>${list[i].cat}</td>
            <td>${list[i].des}</td>
            <td><a class="visit btn btn-success " href="${list[i].url}" target="_blank" >Visit</a></td>
            <td><button class="btn btn-outline-warning" onclick="updateproduct(${i})">Update</button></td>
            <td><button class="btn btn-outline-danger" onclick="deleteproduct(${i})">Delete</button></td>
            </tr> `
    }
    document.getElementById("tbody").innerHTML=cartona;
}
function clearForm() {
    Name.value=''
    Price.value=''
    Catorgy.value=''
    Description.value=''
    url.value=``;
}
function deleteproduct(index) {
    list.splice(index,1);
    displayProduct();
    localStorage.setItem("product",JSON.stringify(list))
}
function updateproduct (index) {
    Name.value=list[index].name
    Price.value=list[index].price
    Catorgy.value=list[index].cat
    Description.value=list[index].des
    url.value=list[index].url
}
/*
.toUpperCase كل الحروف كبيرة 
.toLowerCase كل الحروف صغيرة
.startsWith تبدا بــ
.endsWith  تنتهي بــ
*/ 
var res = "Nokia".includes()
function search(searchkey) {
    var cartona=``;
    for (let i = 0; i < list.length; i++) {
        if (list[i].name.toLowerCase().includes(searchkey.toLowerCase())) {
            list[i].newName=list[i].name.replace(searchkey , `<span class=" text-danger fw-border">${searchkey}</span>`)
            cartona+=
            `<tr>
            <td>${i+1}</td>
            <td>${list[i].newName?list[i].newName:list[i].name}</td>
            <td>${list[i].price}</td>
            <td>${list[i].cat}</td>
            <td>${list[i].des}</td>
            <td><a class="visit btn btn-success " href="${list[i].url}" target="_blank" >Visit</a></td>
            <td><button class="btn btn-outline-warning" onclick="updateproduct(${i})">Update</button></td>
            <td><button class="btn btn-outline-danger" onclick="deleteproduct(${i})">Delete</button></td>
            </tr> `
        }
    document.getElementById("tbody").innerHTML=cartona;
    }
}
function validationName(){
    var regax=/^[A-Z][a-z]{3,8}$/
    if (regax.test(Name.value) == true) {
        document.getElementById("error").classList.replace("d-block","d-none");
        return true;
    }else{
        document.getElementById("error").classList.replace("d-none","d-block");
        return false;
    }
}
function link() {
    var regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    if(regex.test(url.value)==true){
        document.getElementById("mask").classList.replace("d-block", "d-none");
        return true;
    }
    else {
        document.getElementById("mask").classList.replace("d-none","d-block")
    return false ;
    }
}





