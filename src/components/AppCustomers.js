import React, { useState } from 'react';

function AppCustomers() {

    const [newCustomer, setNewCustomer] = useState({
        firstName: '',
        lastName: '',
      });

    const [customers, setCustomers] = useState([
        {firstName: 'Gohan', lastName:'Son'},
        {firstName: 'Goku', lastName:'Son'},
        {firstName: 'Bulma'},
        {firstName: 'Videl', lastName:'Son'},
        {firstName: 'Chi Chi', lastName:'Son'}
      ]);

      const addCustomer = (e) => {
        e.preventDefault();
    
        setCustomers([...customers, newCustomer])
        setNewCustomer({
          firstName: '',
          lastName: ''
        });
      }

      const handleFirstNameChange = (e) => {
        setNewCustomer({
          ...newCustomer,
          firstName: e.target.value
        })}

        const handleLastNameChange = (e) => {
            setNewCustomer({
              ...newCustomer,
              lastName: e.target.value
            })}

        

      const handleRemoveCustomer = (index) => {
        setCustomers([...customers.slice(0, index), ...customers.slice(index + 1)])
      }

    return (<div>
        <div>
      <h3>New Customer</h3>
      <form className="form" onSubmit={addCustomer}>
        <input required type="text" value={newCustomer.firstName}  placeholder="First name" onChange={handleFirstNameChange}/>
        <br></br>
        <input required type="text" value={newCustomer.lastName}  placeholder="Last name" onChange={handleLastNameChange}/>
        
        <button>Add</button>
      </form>
    </div>
    <h2>Customers:</h2>
    <table>
      <thead>
        <tr>
            <th>First name</th>
            <th>Last name</th>
        </tr>
        </thead>
        <tbody>
        {customers.map((customer, index) =>
           (<tr key={index}>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td><button onClick={() => handleRemoveCustomer(index)}>Remove</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>)
      }
    
      export default AppCustomers;