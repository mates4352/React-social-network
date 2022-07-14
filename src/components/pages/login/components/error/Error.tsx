import React from 'react';
import s from './Error.module.scss';

type errorType = {
   error: string
};

export class Error extends React.Component<errorType> {
   constructor(props: errorType) {
      super(props);
   }

   render() {
      const {error} = this.props;

      return (
          <p className={s.error}>{error}</p>
      );
   };
}
