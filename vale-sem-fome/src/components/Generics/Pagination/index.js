import React from 'react';
import { Link } from 'react-router-dom';
import './pagination.scss';

function Pagination({
    currentPage,
    totalPages
}) {
    return (
        <div className="pagination">
            <div className="container">
                <div className="row">
                    <div className="previous-page">
                        <Link to="/">
                            <span>&#171; anterior</span>
                        </Link>
                    </div>
                    <div className="current-page">
                        <span>{currentPage}</span>
                        <span> de </span>
                        <span>{totalPages}</span>
                    </div>
                    <div className="previous-page">
                        <Link to="/">
                            <span>próxima &#187;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination;