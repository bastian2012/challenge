import React from 'react';
import ReactDOM from 'react-dom';
import Core from './pages/Core';
import './index.css';

const items = ["Akèy", "Kontakte", "Poukisa"];
const group = "Coding Club";

ReactDOM.render(
  <React.StrictMode>
    <Core items={items} group={group} />
  </React.StrictMode>,
  document.getElementById('root')
);
