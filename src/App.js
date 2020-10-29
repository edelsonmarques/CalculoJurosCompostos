import React from 'react';
import Forms from './components/Forms';
import css from './app.module.css';

export default function App() {
  return (
    <div>
      <div>
        <h1 className={css.text}>Juros Compostos</h1>
      </div>
      <Forms></Forms>
    </div>
  );
}
