function f1() {
    const nop = document.getElementsByTagName("p").length;
    console.log(`There are ${nop} paragraph tags on this page.`)
}

function f2() {
    const nofid = document.getElementById("first").length;
    debugger;
    console.log(`There are ${nofid} element(s) inside of the first ID.`)
}

function f3() {
    const nosid = document.getElementById("second").length;
    console.log(`There are ${nosid} element(s) inside of the second ID.`)
}