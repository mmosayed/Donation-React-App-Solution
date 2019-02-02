import React, { Component } from 'react';
import Jumbo from './components/jumbo';
import DonationList from './containers/donationlist';
import Progress from './components/progress';
import Form from './components/form';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Go Fund Mo',
      description: 'Send me to a beach',
      reach: 5000,
      donations: [
        {name: 'John', amount: 50, caption: 'lol'}
      ]
    }
  }

  addDonation = (name, amount, caption) => {
    const {donations} = this.state;
    donations.unshift({name, amount, caption});
    this.setState({ donations: donations });
  }

  render() {
    return (
      <>
        <Jumbo name={this.state.name} description={this.state.description} />
        <div className='container'>
          <div className='row'>
            <DonationList donations={this.state.donations} />
            <div className='col-8'>
              <Progress donations={this.state.donations} reach={this.state.reach} />
              <hr />
              <Form addDonation={this.addDonation} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
