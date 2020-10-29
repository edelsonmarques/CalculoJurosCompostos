import React, { useState } from 'react';
import css from './forms.module.css';
import Installments from './Installments';

export default function Forms() {
  const [capitalInicial, setCapitalInicial] = useState(1000);
  const [taxa, setTaxa] = useState(1);
  const [periodo, setPeriodo] = useState(1);

  const handleChangeCapital = (event) => {
    const value = event.target.value;
    setCapitalInicial(value);
  };

  const handleChangeTaxa = (event) => {
    const value = event.target.value;
    setTaxa(value);
  };

  const handleChangePeriodo = (event) => {
    const value = event.target.value;
    setPeriodo(value);
  };

  return (
    <div>
      <div className={css.forms}>
        <div className={css.input}>
          <label>
            Capital Inicial:
            <input
              type="number"
              id="capital_inicial"
              step="100"
              max="100000"
              value={capitalInicial}
              onChange={handleChangeCapital}
            ></input>
          </label>
        </div>
        <div className={css.input}>
          <label>
            Taxa de Juros Mensal:
            <input
              type="number"
              id="taxa"
              min="-12"
              max="12"
              step="1"
              value={taxa}
              onChange={handleChangeTaxa}
            ></input>
          </label>
        </div>
        <div className={css.input}>
          <label>
            Período (meses):
            <input
              type="number"
              id="periodo"
              min="1"
              max="36"
              step="1"
              value={periodo}
              onChange={handleChangePeriodo}
            ></input>
          </label>
        </div>
      </div>
      <Installments
        capital={capitalInicial}
        taxa={taxa}
        periodo={periodo}
      ></Installments>
    </div>
  );
}
