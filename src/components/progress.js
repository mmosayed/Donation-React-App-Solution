import React from 'react';

const Progress = (props) => {
  let total = 0;
  props.donations.forEach(e => {
    total += e.amount;
  });
  const percentage = ((total / props.reach) * 100).toFixed(2);

  return (
    <>
    <h2 className='mb-4'>Raised $ {total} of <span className='text-muted'>$ {props.reach}</span></h2>
    <div className="progress">
      <div className="progress-bar bg-success" role="progressbar" style={{ width: percentage+'%' }} aria-valuenow={percentage}
                  aria-valuemin="0" aria-valuemax="100">{percentage}%</div>
    </div>
    </>
  );
}

export default Progress;