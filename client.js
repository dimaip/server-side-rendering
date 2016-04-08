import React from 'react';
import Transmit from 'react-transmit';
import Hello from 'Hello';

Transmit.render(
  Hello,
  {name: 'World'},
  document.getElementById('app')
);
