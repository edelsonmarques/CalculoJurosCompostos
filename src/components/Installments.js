import React from 'react';
import Installment from './Installment';

export default function Installments({ capital, taxa, periodo }) {
  const array = Array.from({ length: periodo }, (v, i) => i);

  return (
    <div
      style={{
        marginLeft: '40px',
        marginRight: '20px',
        marginTop: '20px',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {array.map((item) => (
        <Installment
          key={item}
          capital={capital}
          taxa={taxa}
          periodo={periodo}
          parcela={item + 1}
        ></Installment>
      ))}
    </div>
  );
}
