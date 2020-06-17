import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
//everytime reducer is run, mapStateToProps is called again
// mapStateToProps gives us data from Redux side of app to React side

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);

// need access to LCM, so we need action creator.  Call action creator fetchPosts from 'componentDidMount'
//  action creator runs code to make api request.  api responds with data.
//   action creator returns an 'action' with the fetched data on the 'payload' property

// components are generally responsible for fetching data they need by calling action creators. (componentDidMount)
// redux thunk comes into play whenever action creators make API requests
//  fetched data is put into a component by generating new state into our redux store, then getting that into our componenent
//      through mapStateToProps
