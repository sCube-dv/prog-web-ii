/* insert data in localStorafe */

/* setItem > key: value */
localStorage.setItem('name', 'Samuel');

/* getItem from localStorage */
const name = localStorage.getItem('name');
console.log(name);

const lastName = localStorage.getItem('lastName');
console.log(lastName);

/* removeItem from localStorage */
localStorage.removeItem('name');

/* clear all localStorage */
localStorage.setItem('a', 2)
localStorage.setItem('b', 7)

/* data has been converted to string format at saved in localStorage */

/* localStorage.clear(); */


/* sessionStorage */

/* 
* sessionStorage is similar to localStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends.
* A page session lasts as long as the browser is open, and survives over page reloads and restores.
* Opening a page in a new tab or window will cause a new session to be initiated.
*/

/* object saving in localStorage */
const person = {
    name: 'Samuel',
    age: 32,
    job: 'Programmer',
}

/* convert object to string to save */
localStorage.setItem('person', JSON.stringify(person))

/* getting objecto from localStorage */
const getPerson = localStorage.getItem('person')

const personObject = JSON.parse(getPerson)

console.log(personObject.job)
