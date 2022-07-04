import React from 'react';
import s from './Settings.module.scss'

type settingsType = {};

export class Settings extends React.Component<settingsType> {
   constructor(props: settingsType) {
      super(props);
   }

   render() {
      const {} = this.props;

      return (
          <div>
             Settings
          </div>
      );
   };
};
