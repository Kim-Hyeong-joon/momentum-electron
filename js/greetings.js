const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // form submit event 발생했을 때 실행하는 함수
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  // 인사말을 넣고, hidden class를 제거하는 함수
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // localStorage에서 username 값 변수 할당

if (savedUsername === null) {
  // username 값이 없으면 form의 hidden을 풀어라
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit); // form submit event 감지 및 함수 호출
} else {
  // username 값이 있으면 인사말의 hidden을 풀어라
  paintGreetings(savedUsername); // 인사말 hidden 푸는 함수
}
