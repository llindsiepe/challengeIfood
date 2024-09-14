import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GlobalStyles } from './globalStyles.js';

import Transactions from './transactions/index.js';

function App() {
  return (
    <Router>
      <GlobalStyles />

      <div>
      {/*
        <nav>
          <ul>
            <li>
              <Link to="/transactions">Transactions</Link>
            </li>
          </ul>
        </nav>
      */}

        {/* Definição das Rotas */}
        <Routes>
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
