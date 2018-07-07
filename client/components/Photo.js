import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props;
    console.log('working');
    console.log(post);
    console.log('working2');
    console.log(this.props);
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${this.props.code}`}>
            <img src={this.props.display_src} alt={this.props.caption} className="grid-photo" />
          </Link>

          <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={this.props.likes} className="likes-heart">{this.props.likes}</span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{this.props.caption}</p>
          <div className="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {this.props.likes}</button>
            <Link className="button" to={`/view/${this.props.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[this.props.code] ? comments[this.props.code].length : 0 }
              </span>
            </Link>
          </div>
        </figcaption>

      </figure>
    )
  }
});

export default Photo;
