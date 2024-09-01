import React from 'react';

import Snake from 'components/Snake/Snake';

function SnakeTestPage() {
  return (
    <div className='flex max-h-full w-full items-center justify-center'>
      <Snake color1={'green'} color2={'red'} backgroundColor={'transparent'} />
    </div>
  );
}

export default SnakeTestPage;
