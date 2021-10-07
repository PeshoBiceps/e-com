const valid = (name, email, password) => {
  if (!name || !email || !password)
    return "Please add all fields."

  if (!validEmail(email))
    return "Invalid email."

  if (password.length < 6)
    return "Password must be at least 6 characters"

}

function validEmail(email) {
  const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return regex.test(email);
}

export default valid