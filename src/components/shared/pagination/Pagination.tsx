import React from 'react';
import s from './Pagination.module.scss';
import {PaginationButton} from "./components/pagination-button/PaginationButton";

type paginationType = {
   pagesNumbers: Array<number>
   currentPage: number
   pageSize: number
   editPagination: (pageNumber: number, pageSize: number) => () => void
};

export class Pagination extends React.PureComponent<paginationType> {
   constructor(props: paginationType) {
      super(props);
   }

   render() {
      const {pagesNumbers, currentPage, pageSize, editPagination} = this.props;

      return (
          <ul className={s.pagination}>
             {pagesNumbers.map(pageNumber =>
                 <li className={s.item} key={pageNumber}>
                    <PaginationButton
                        pageNumber={pageNumber}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        editPagination={editPagination}/>
                 </li>
             )}
          </ul>
      );
   };
}
