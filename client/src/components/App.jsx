import React from 'react';
import Overview from './product-overview/Overview.jsx';
import Reviews from './reviews/Reviews.jsx';
import Related from './related-products/Related.jsx';
import QA from './questions-and-answers/QA.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProduct: {id: 71698}
    };
  }

  render() {
    return (
      <div>
        {/* <Overview />
        <Related />
        <QA /> */}
        <Reviews currentProduct={this.state.currentProduct}/>
      </div>
    );
  }
}

export default App;
