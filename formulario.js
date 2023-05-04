// local storage
let valForm = []

let datosEnLocal = localStorage.getItem('form') 

datosEnLocal ?
valForm = JSON.parse(datosEnLocal):
valForm = []



function enviar(event) {
    event.preventDefault()
   let name = event.target.elements['name'].value
   let lastname = event.target.elements['lastname'].value
   let area = event.target.elements['area'].value
   let user = event.target.elements['user'].value
   let age = event.target.elements['age'].value
   let address = event.target.elements['address'].value
   let email = event.target.elements['email'].value
   
valForm.push({
    area: area,
    name: name, 
    user: user,
    email: email,
    age: age,
    lastname: lastname,
    address: address,
    
   })

    localStorage.setItem('form',JSON.stringify(valForm))
    event.target.reset()
    
}
