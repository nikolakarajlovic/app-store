import React, { useState } from 'react';

function  AppProducts() {

    const [products, setProducts] = useState([
        {name: 'Racunar', price: 500},
        {name: 'Mac', price: 666},
        {name: 'Motocikl', price: 3690},
        {name: 'Zmajeva kugla sa 3 zvezdice', price: 99999},
        {name: 'Zmajev radar', price: 9998}
      ]);

    return (<div>
    <h2>Products:</h2>
    <table>
      <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {products.map((product, index) =>
           (<tr key={index}>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    );
  }

  export default AppProducts;