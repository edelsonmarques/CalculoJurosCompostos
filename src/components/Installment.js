import React, { useEffect, useState } from 'react';

const EMERALD = '#2ecc71';
const PETER_RIVER = '#3498db';

const ALIZARIN = '#e74c3c';
const CARROT = '#e67e22';

export default function Installment({ capital, taxa, periodo, parcela }) {
  const [total, setTotal] = useState();
  const [totalRendimento, setTotalRendimento] = useState();
  const [porcento, setPorcento] = useState();

  let color1 = EMERALD;
  let color2 = PETER_RIVER;

  if (taxa < 0) {
    color1 = ALIZARIN;
    color2 = CARROT;
  }

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  function formatNumber(numberToFormat) {
    return formatter.format(numberToFormat);
  }

  function porcent(capital, rend) {
    const porcento = (100 * rend) / capital;

    return Number(porcento).toFixed(2);
  }

  useEffect(() => {
    const motante = capital * Math.pow(1 + taxa / 100, parcela);
    const rendimento = motante - capital;
    const porcentagem = porcent(capital, rendimento);

    setTotal(formatNumber(motante));
    setTotalRendimento(formatNumber(rendimento));
    setPorcento(porcentagem);
  }, [capital, taxa, periodo]);

  return (
    <div
      style={{
        border: '1px groove gray',
        borderRadius: '5px',
        width: '130px',
        height: '100px',
        margin: '5px',
      }}
    >
      <div style={{ marginLeft: '5px', fontWeight: 'bold' }}>{parcela}</div>
      <div style={{ marginLeft: '5px', color: color1, fontWeight: 'bold' }}>
        {total}
      </div>
      <div style={{ marginLeft: '5px', color: color1 }}>{totalRendimento}</div>
      <div style={{ marginLeft: '5px', color: color2 }}>
        {porcento}
        {'%'}
      </div>
    </div>
  );
}
