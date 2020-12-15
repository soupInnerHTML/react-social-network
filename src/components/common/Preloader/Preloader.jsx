/* Ultrashort name _ for root styles*/
import React from 'react';
import _ from './Preloader.module.css';
import icon from '../../../img/logoSpinner.png'

const Preloader = (props) => (
    <div className={_.wrapper}>
        <img src={icon} className={_.loader} alt=""/>
    </div>
)

export default Preloader