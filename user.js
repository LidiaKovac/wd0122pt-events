let user = {}

const createUser = function (submitEvent) {
  submitEvent.preventDefault() //no reload! :)
  let errorDiv = document.querySelector(".error")
  // const user = {
  //     name: document.querySelector("input#name").value,
  //     last_name: document.querySelector("input#last_name").value,
  //     email: document.querySelector("input#email").value
  // }
  // console.log(user)
  // //more dom maniplike .innerText etc.

  //are passwords the same?
  if (!compare(user.password, user.password_confirm)) {
    //!true === false
    errorDiv.innerText = "The passwords don't match!"
    errorDiv.style = "background-color: red; color: white; font-weight: bold"
  } else {
    errorDiv.innerText = ""
    errorDiv.style = "background-color: transparent"

    let userDiv = document.querySelector(".user-data")
    userDiv.innerHTML = ` 
        <h2> ${user.name} ${user.last_name} </h2>
        <img src="${user.profile_image}" style='width:100px; height: 100px' alt="">
        <ul>
            <li>${user.birthday}</li>
            <li>${user.email}</li>
            <li>The passwords are matching</li>
        </ul>
        `
    {
      /* <h2> NAME + LASTNAME</h2>
        <img src="http://...." alt="">
        <ul>
            <li>BIRTHDAY</li>
            <li>EMAIL</li>
            <li>are the passwrods matching?</li>

        </ul> */
    }
  }
  let allInputs = document.querySelectorAll('input:not([type="submit"])')
  for (let i = 0; i < allInputs.length; i++) {
    const input = allInputs[i];
    input.value = ""
  }
}

const compare = function (string1, string2) {
  if (string1 === string2) {
    return true
  } else return false
}

const buildUser = function (keyboardEvent) {
  // user.name = "Lidia"
  // user["name"] = "Lidia"
  //^^^^^ equivalent
  console.log(
    `user["${keyboardEvent.target.id}"] = "${keyboardEvent.target.value}"`
  )
  // console.log('user["' + keyboardEvent.target.id + '"]')

  user[keyboardEvent.target.id] = keyboardEvent.target.value
  console.log(user)
}
