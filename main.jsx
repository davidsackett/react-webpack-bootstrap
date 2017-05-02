import React from 'react';
import ReactDOM from 'react-dom';
import autoBind from 'react-autobind';

class Page extends React.Component {
  constructor() {
    super();
    autoBind(this);
    this.state = {
      greeting: "Hello World!"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
      </div>
    );
  }
}
export default Page;
