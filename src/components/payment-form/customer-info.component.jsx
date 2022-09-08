
import React from 'react'

 const CustomerInfo = () => {
  return (
    <div><form>
    Name <br/>
     <input type='text' placeholder='' label="name"></input><br/>
    email <br/>
    <input type='email' placeholder='' label="email"></input><br/>
    
    address <br/>
    street and number<br/>
    <input type='text' placeholder='' label="address1"></input><br/>
    address(optional):<br/>
    <input type='text' placeholder='' label="address2"></input><br/>
    city:<br/>  <input type='text' placeholder='' label="city"></input><br/>
    state:<br/>  <input type='text' placeholder='' label="state"></input><br/>
    country:<br/>  <input type='text' placeholder='' label="country"></input><br/>
   
    zip:<br/> <input type='text' placeholder='' label="zip"></input><br/>
   
   
    telephone:<br/> <input type='number' placeholder='' label="telephone"></input><br/>
   </form></div>
  )
}

export default CustomerInfo;