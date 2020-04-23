import React from 'react';
import { Link } from 'react-router-dom';
import './table-mobile.scss';


function TableMobile({ 
    fullName, cpf, 
    regionCity, neighbourhood,
    currentFinancialStatus
}){
    let currentStatus = "currentStatus";
    switch (currentFinancialStatus) {
        case "Extremamente Séria":
            currentStatus += " extremely-serious";
            break;
        case "Muito Séria":
            currentStatus += " really-serious";
            break;
        case "Séria":
            currentStatus += " serious";
            break;
        case "Risco":
            currentStatus += " risk";
            break;
        case "Outros":
            currentStatus += " others-status";
                break;
        default:
            break;
    }
    return (
        <div className="container">
            <div className="fake-table">
                <Link to="/recipients/id">
                    <div className="table-row">
                        <div>{fullName}</div>
                        <div>{cpf}</div>
                    </div>
                    <div className="table-row">
                        <div>{regionCity}</div>
                        <div>{neighbourhood}</div>
                        <div className={currentStatus}>{currentFinancialStatus}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default TableMobile;
