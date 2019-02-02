import React from 'react';
import Donation from '../components/donation';

const DonationList = (props) => {
  return (
    <ul className="col-4 list-unstyled recent-donations">
      <h5 className='my-4'>Recent Donations</h5>
      {
        props.donations.map((e, i) => {
          return <Donation name={e.name} amount={e.amount} caption={e.caption} key={i} />
        })
      }
    </ul>
  );
}

export default DonationList;