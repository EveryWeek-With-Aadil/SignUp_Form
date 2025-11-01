function Go() {
  // get inputs by name
  const name = document.getElementsByName("Name")[0].value;
  const Fname = document.getElementsByName("Fname")[0].value;
  const Email = document.getElementsByName("Email")[0].value;
  const Pass = document.getElementsByName("pass")[0].value;
  const Age = document.getElementsByName("age")[0].value;
  const phone_number = document.getElementsByName("phone_number")[0].value;

  // build query string
  const query = `?name=${encodeURIComponent(name)}&Fname=${encodeURIComponent(Fname)}&Email=${encodeURIComponent(Email)}&Pass=${encodeURIComponent(Pass)}&Age=${encodeURIComponent(Age)}&phone_number=${encodeURIComponent(phone_number)}`;

  // redirect to indes.html
  window.location.href = "indes.html" + query;
}
