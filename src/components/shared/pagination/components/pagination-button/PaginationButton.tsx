import React from 'react';
import s from './PaginationButton.module.scss';

type paginationButtonType = {
   pageNumber: number
   currentPage: number
   pageSize: number
   editPagination: (pageNumber: number, pageSize: number) => () => void
};

export class PaginationButton extends React.PureComponent<paginationButtonType> {
   constructor(props: paginationButtonType) {
      super(props);
   }
   render() {
      const {pageNumber, currentPage, pageSize, editPagination} = this.props;
      const classNameActiveButton = (pageNumber: number) => `${currentPage === pageNumber && s.button_active} ${s.button}`;
      return (
          <button
              className={classNameActiveButton(pageNumber)}
              type='button'
              onClick={editPagination(pageNumber, pageSize)}>
             {pageNumber}
          </button>
      );
   };
};
