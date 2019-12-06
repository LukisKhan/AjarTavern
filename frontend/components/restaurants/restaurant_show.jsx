import React from 'react';
import RestaurantDetail from './restaurant_detail';
import AllNav from '../all_nav/all_nav';

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numParty: 2,
      date: 0,
      time: 0
    };
    this.update = this.update.bind(this);
    this.handleFindATableInput = this.handleFindATableInput.bind(this);
  }
  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.restaurantId != this.props.match.params.restaurantId) {
      this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }
  }
  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }
  handleFindATableInput(e) {
    e.preventDefault();
    let restId = this.props.restaurant.id
    let restName = this.props.restaurant.name
    let userId = this.props.currentUser.id
    let userFN = this.props.currentUser.firstname
    let time = this.state.time
    let date = this.state.date
    let numParty = this.state.numParty
    console.log(`A table for ${numParty} 
      has been reserved for ${userFN} 
      on the date ${date} and time ${time}
      at the wonderful restaurant ${restName}`)
  }
  render() {
    const restaurant = this.props.restaurant;
    if (restaurant) {
      return (
        <div className="restaurant-show">
          <AllNav />
          <div className="banner-section">
            <img src={restaurant.photoUrl} alt={restaurant.name}/>
          </div>
          <div className="restaurant-flexbox">
            <div className="restaurant-section">
              <ul className="restaurant-top-bar">
                <li>Overview</li>
                <li>Photos</li>
                <li>Menu</li>
                <li>Reviews</li>
              </ul>
              <RestaurantDetail restaurant={restaurant} />
            </div>
            <div className="additional-section">
              <div className="booking-section">
                <form className="BLANK" onSubmit={this.handleFindATableInput} >
                  <div className="booking-title">Make A Reservation</div>
                  <div className="party-size">
                    <div className="party-size-label">Party Size</div>
                    <select value={this.state.numParty} onChange={this.update('numParty')} >
                      <option value="2">For 2</option>
                      <option value="3">For 3</option>
                    </select>
                  </div>
                  <div className="date-time-section">
                    <div className="date-section">
                      <div className="date-label">Date</div>
                      <select value={this.state.date} onChange={this.update('date')} >
                        <option value="1">Today</option>
                        <option value="2">Tomorrow</option>
                      </select>
                    </div>
                    <div className="time-section">
                      <div className="time-label">Time</div>
                      <select value={this.state.time} onChange={this.update('time')} >
                        <option value="19">7:00 PM</option>
                        <option value="20">8:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <button className="session-submit">Find a Table</button>
                </form>
              </div>
              <div className="location-section">MAP
                <img src={restaurant.photoUrl} alt={restaurant.name} />
              </div>
              <div className="atmosphere-section">
                <ul>
                  <li>
                    <i>icon</i>
                    <div>
                      <div className="atmos-title">Cuisines</div>
                      <div>Vietnamese Food</div>
                    </div>
                  </li>
                  <li>
                    <i>icon</i>
                    <div>
                      <div className="atmos-title">Dining Style</div>
                      <div>Fine Dining</div>
                    </div>
                  </li>
                  <li>
                    <i>icon</i>
                    <div>
                      <div className="atmos-title">Dress Code</div>
                      <div>Smart Casual</div>
                    </div>
                  </li>
                  <li>
                    <i>icon</i>
                    <div>
                      <div className="atmos-title">Additional</div>
                      <div>Happy Hour, Late Night, Non-Smoking, Outdoor Dining</div>  
                    </div>
                  </li>
                </ul>


              </div>
      
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          Loading Restaurant
        </div>
      )
    }
  }
}
export default RestaurantShow;