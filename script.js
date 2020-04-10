function f1() {
    const nop = document.getElementsByTagName("p").length;
    console.log(`There are ${nop} paragraph tags on this page.`)
}

function f2() {
    const nofid = document.getElementById("first").childElementCount;
    console.log(`There are ${nofid} element(s) inside of the first ID.`)
}

function f3() {
    const nosid = document.getElementById("second").childElementCount;
    console.log(`There are ${nosid} element(s) inside of the second ID.`)
}