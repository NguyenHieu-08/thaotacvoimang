let a = new Array();

function Add() {
    let number = +(document.getElementById('number').value);
    a.push(number);
    document.getElementById("number").value = "";
}

function Display() {
    let text = "<hr/>";
    for (let i = 0; i < a.length; i++) {
        text += "Element " + i + " = " + a[i] + "<br/>";
    }
    document.getElementById("list").innerHTML = text;
}

