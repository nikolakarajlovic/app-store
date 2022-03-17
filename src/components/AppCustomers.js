import React, { useState } from 'react';

function AppCustomers() {

    const [customers, setCustomers] = useState([
        {id: '1', name: 'Gohan'},
        {id: '2', name: 'Goku'},
        {id: '3', name: 'Bulma'},
        {id: '4', name: 'Videl'},
        {id: '5', name: 'Chi Chi'}
      ]);

      const handleRemoveCustomer = (index) => {
        setCustomers([...customers.slice(0, index), ...customers.slice(index + 1)])
      }

    return (<div>
    <h2>Customers:</h2>
    <table>
      <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {customers.map((customer, index) =>
           (<tr key={index}>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td><button onClick={() => handleRemoveCustomer(index)}>Remove</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>)
      }
    
      export default AppCustomers;