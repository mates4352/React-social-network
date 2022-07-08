import React from 'react';

type iconCloseType = {};

export class IconClose extends React.Component<iconCloseType> {
   constructor(props: iconCloseType) {
      super(props);
   }

   render() {
      const {} = this.props;

      return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"
               style={{
                  display: 'flex',
                  width: 'var(--svgWidth, 24px)',
                  height: 'var(--svgHeight, 24px)',
                  fill: 'var(--svgFill, var(--black))'
               }}
          >
             <path d="M12 10.047142q0 .3367-.235692.572383l-1.144783 1.144783Q10.383842 12 10.047142 12q-.3367003 0-.572392-.235692L7
                9.289558l-2.47475 2.47475Q4.2895583 12 3.9528583 12q-.3367 0-.5723833-.235692l-1.1447833-1.144783Q2 10.383842
                2 10.047142t.2356917-.572392L4.7104417 7l-2.47475-2.47475Q2 4.2895583 2 3.9528583q0-.3367.2356917-.5723833L3.380475
                2.2356917Q3.6161583 2 3.9528583 2t.5723917.2356917L7 4.7104417l2.47475-2.47475Q9.7104417 2 10.047142 2q.3367
                0 .572383.2356917l1.144783 1.1447833Q12 3.6161583 12 3.9528583t-.235692.5723917L9.2895583 7l2.4747497 2.47475Q12 9.710442 12 10.047142z"
             />
          </svg>
      );
   };
};
