import {useParams} from "react-router-dom";
import React, { ComponentType as ReactComponent } from "react";


export const WithRouterParams = <T,>(Component: ReactComponent<T>) => {
   const Wrapper = (props: T) => {
      const params = useParams();

      return <Component {...props} params={params}/>;
   };

   return Wrapper;
};
