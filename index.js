
const formData = {
    name: "Steve",
    email: "steve@steve.com",
};


const configureObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    body: JSON.stringify(formData),
    };


function submitData() {
    return fetch('http://localhost:3000/users', configureObject)
    .then(res => res.json())
    .then(data => document.body.innerHTML = data.id)
    .catch(function (error) {
        document.body.innerHTML = error.message;
        console.log(error.message);
      });
    } 

submitData();