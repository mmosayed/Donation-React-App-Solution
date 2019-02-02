import React from 'react';

const Jumbo = (props) => {
  return (
    <section className="jumbotron text-center">
      <h1 className="jumbotron-heading">{props.name}</h1>
      <p className="lead text-muted">{props.description}</p>
    </section>
  );
}

export default Jumbo;