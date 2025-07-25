import { forwardRef } from 'react';

const ProgressBar = forwardRef((props, ref) => {
  return (
    <div className="h-screen fixed top-0 right-0 z-3 md:w-2 w-1 bg-transparent">
      <div ref={ref} className="h-full w-full bg-white scale-y-0 origin-top"></div>
    </div>
  );
});

export default ProgressBar;