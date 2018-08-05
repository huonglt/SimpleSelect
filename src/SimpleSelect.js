import React from 'react';
import './SimpleSelect.css';

export default class SimpleSelect extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="select-wrapper">
                <div className="select-container">
                    <div className="select-content">
                        <select className="selectBox">
                            <option></option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>    
                        </select>
                        <svg className="downArrow" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg>
                    </div>
                </div>
            </div>
        );
    }

}