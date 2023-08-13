import React from 'react';
import Core from './Core';
import './App.css';

const items = ["Home", "Contact", "About"];
const group = "Coding Club";

function App() {
    return (
        <div className="app">
            <Core items={items} group={group} />
        </div>
    );
}

export default App;
