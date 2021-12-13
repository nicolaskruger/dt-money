import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
createServer({
  routes() {
    this.namespace = "api";
    this.get('/transactions', () => {
      return [
        {
          name: "Desenvovimento de website",
          price: 12_000,
          type: "Desenvolvimento",
          date: new Date(),
        },
        {
          name: "Desenvovimento de website",
          price: -12_000,
          type: "Desenvolvimento",
          date: new Date(),
        },
        {
          name: "Desenvovimento de website",
          price: 12_000,
          type: "Desenvolvimento",
          date: new Date(),
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);