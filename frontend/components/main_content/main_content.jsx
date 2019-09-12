import React from 'react';
import MainContentDetail from '../main_content/main_content_detail';

class MainContent extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }
  render () {
    let restaurants;
    if (this.props.restaurants) {
      restaurants = this.props.restaurants.map(
        restaurant => {
          return <MainContentDetail restaurant={restaurant} />
        }
      )
    }
    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    )
  }
}

export default MainContent;