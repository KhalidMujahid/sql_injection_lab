// login
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const button = document.querySelector("button");
const output = document.querySelector(".output");
const sqlOutput = document.querySelector(".sql");

button.addEventListener("click", (e) => {
  e.preventDefault();

  // validation
  if (!username.value || !password.value) {
    alert("Input required!");
    return;
  }

  // construct data to send to the server
  const data = {
    username: username.value.toLowerCase(),
    password: password.value.toLowerCase(),
  };

  sendToServer(data);
  username.value = "";
  password.value = "";
});

const sendToServer = async (data) => {
  await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      output.innerHTML = `<h4 style=${
        data.message
          ? "background-color:red;padding:1rem;color:#fff;border-radius:5px;"
          : data.data
          ? "background-color:green;padding:1rem;color:#fff;border-radius:5px;"
          : "background-color:orange;padding:1rem;color:#fff;border-radius:5px;"
      }>${
        data.message
          ? data.message
          : data.data
          ? "Logged in"
          : JSON.stringify(data.sqlMessage, null, 2)
      }</h4>`;
      sqlOutput.innerHTML = `<h4 style="background-color:yellowgreen;color:white;padding:1rem;border-radius:5px;">${JSON.stringify(
        data.sql,
        null,
        4
      )}</h1>`;
    })
    .catch((error) => console.log("!!", JSON.stringify(error, 5)));
};
