function onClickEvent() {
    console.group("onClickEvent");
    let myCount = 2;
    console.warn('You completed' + myCount + 'exercise');
        console.error("You completed" + myCount + "exercise");
        console.groupEnd("onClickEvent");
    myCount = nestedCall(myCount);

}
function nestedCall(count) {
    document.querySelector("body > ul > li:nth-child(1)").remove;
    console.log('reached NestedCall');
    return count+6
}