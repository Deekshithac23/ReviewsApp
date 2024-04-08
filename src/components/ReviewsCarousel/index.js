// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewId: 0,
  }

  onClickRightArrow = () => {
    const {activeReviewId} = this.state
    const {reviewsList} = this.props

    if (activeReviewId < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username"> {username} </p>
        <p className="company"> {companyName} </p>
        <p className="description"> {description} </p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewId} = this.state

    if (activeReviewId > 0) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId - 1,
      }))
    }
  }

  render() {
    const {activeReviewId} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[activeReviewId]

    return (
      <div className="app-container">
        <h1 className="heading"> Reviews </h1>
        <div className="caurosel-container">
          <button
            className="arrow-btn"
            onClick={this.onClickLeftArrow}
            type="button"
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            type="button"
            className="arrow-btn"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
