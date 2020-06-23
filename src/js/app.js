import Hello from './hello';
import React from 'react';
import ReactDom from 'react-dom';
import style from '../css/style';

Hello();

ReactDom.render(
    <h1>Hello, Frontend Enginner!</h1>,
    document.getElementById('root')
);