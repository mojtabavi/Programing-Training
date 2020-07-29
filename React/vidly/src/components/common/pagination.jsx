import React from 'react';
import _ from 'lodash';


const Pagination = (props) => {
    const { itemCount,pageSize, onPageChanged,currentPage } = props;

    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1)


    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={currentPage === page ? " page-item active" : "page-item" }>
                        <a  className="page-link"
                            onClick={() => onPageChanged(page)}>{page}</a>
                            </li>
                ))}
            </ul>
        </nav>
    );
}
 
export default Pagination;