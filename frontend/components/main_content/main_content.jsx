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
          return <MainContentDetail key={restaurant.name} restaurant={restaurant} />
        }
      )
    }
    return (
      <div className="main-content-root">
        <h2>Featured Restaurants</h2>
        <hr />
        <ul className="restaurants-section-ul">
          {restaurants}
        </ul>
      </div>
    )
  }
}

export default MainContent;