import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './header-comp/Header';
import { Section } from './section-comp/Section';
import { Footer } from './footer-comp/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <Section/>
    <Footer/>
  </div>
);
