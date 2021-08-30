// Task 2
// For the page index.html:
// Output result: User1, User5, User2, User4, User3

var elemLi  = document.getElementsByTagName('li');
document.write(elemLi[0].innerText + ' ');
document.write(elemLi[elemLi.length-1].innerText + ' ');
document.write(elemLi[1].innerText + ' ');
document.write(elemLi[3].innerText + ' ');
document.write(elemLi[2].innerText + '</br>' + '</br>');


// Output result: User1, User5, User2, User4, User3

var ulList = document.getElementById('list');
var ulListChildren = ulList.children;
var ulListFirst = ulList.firstElementChild.innerText;
var ulListLast = ulList.lastElementChild.innerText;
var ulListSecond = ulListChildren[1].innerText;
var ulListThird = ulListChildren[2].innerText;
var ulListFourth = ulListChildren[3].innerText;
document.write(ulListFirst + ' ');
document.write(ulListLast + ' ');
document.write(ulListSecond + ' ');
document.write(ulListFourth + ' ');
document.write(ulListThird + ' ');