import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "pack do pe",
          type: "deposit",
          category: "pack",
          value: 6000,
          date: new Date('2021-11-10')
        },
        {
          id: 2,
          title: "suco tang",
          type: "withdraw",
          category: "tang",
          value: -2,
          date: new Date('2021-11-10')
        },
      ],
    })
  },
  routes() {
    this.namespace = "api";
    this.get('/transactions', () => {
      return this.schema.all("transaction");
    })
    this.post("/transactions", (schema, request) => {
      return schema.create("transaction", JSON.parse(request.requestBody))
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);