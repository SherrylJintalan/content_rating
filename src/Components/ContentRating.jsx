
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();

    this.state = {
    likes: 0,
    dislikes: 0,

    handleLike:() => {
      this.setState((prevState) => ({
        likes: prevState.likes + 1
      }));
    },
    handleDislike:() => {
      this.setState((prevState) => ({
        dislikes: prevState.dislikes +1
      }));
    }
  }
  }
  
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>
        A free and open-source front-end JavaScript library for building user interfaces. It was developed by Facebook. 
        While Facebook developed React and uses it extensively in various parts of its website and applications (like the Ads Manager and Messenger), 
        the entire Facebook platform is not built solely with React. React Native is a related framework that extends React's principles to native mobile app development,
        allowing developers to build iOS and Android apps using JavaScript and React.
        </p>
      <div className='rating-buttons'>
        <button className='like-button' onClick={this.state.handleLike}>
          Like ({this.state.likes})
        </button>
        <button className='dislike-button' onClick={this.state.handleDislike}>
          Dislike ({this.state.dislikes})
        </button>
      </div>
     </div>
     
     </>
    );
  }
}

export default ContentRating;
