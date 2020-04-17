import React from 'react';
import { 
    SJCHeader,
    SearchForm 
} from './../../../components/index';

function ShowAll() {
    return (
        <div>
            <SJCHeader cityName="São José dos Campos"/>
            <SearchForm totalEntries="23.023 registros"/>
        </div>
    )
}

export default ShowAll;