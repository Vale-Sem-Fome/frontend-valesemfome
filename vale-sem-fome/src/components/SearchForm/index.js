import React from 'react';
import {
    Input
} from './../../components/index';
import googleSheetsIcon from './../../assets/images/googlesheets.svg'
import './search-form.scss';

function SearchForm({totalEntries}) {  
    return (
        <div className="container">
         <form className="form-search">
            <div className="export-data-button">
                <button>
                    <img className="img-fluid" src={googleSheetsIcon} alt="Google Sheets Icon"/>
                    Exportar Dados
                </button>
            </div>
            <div className="search-input">
                <span>
                    {totalEntries}
                </span>
                <Input type="search" placeholder="Pesquise..."/>
            </div>
         </form>
        </div>
    );
}

export default SearchForm;