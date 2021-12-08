import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Main from './Main';

import './App.less';

export default function App() {
  return (
    <Router>
      <div className="app">
        <AppBar>
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              GitHub Repositories
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Main/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}



