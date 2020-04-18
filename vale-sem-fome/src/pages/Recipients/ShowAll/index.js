import React from 'react';
import { 
    CityHeader,
    SearchForm,
    Footer
} from './../../../components/index';

function ShowAll() {
    return (
        <div>
            <CityHeader cityName="São José dos Campos"/>
            <SearchForm totalEntries="23.023 registros"/>
            <Footer />
        </div>
    )
}

export default ShowAll;