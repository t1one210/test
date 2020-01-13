import React from 'react';
import { connect } from 'react-redux';
import store from './store/reducers.js';
import axios from 'axios';
import List from './reducers';
import { createStore } from 'redux';

let store = createStore(List)

const ListContainer = React.createClass({
  componentDidMount: function() {
    axios.get('http://api.bing.net/json.aspx?AppId=Insert your AppId here&Query=xbox%20site:microsoft.com&Sources=Image&Version=2.0&Market=en-us&Adult=Moderate&Image.Count=10&Image.Offset=0&JsonType=callback&JsonCallback=SearchCompleted').then(response => {
      store.dispatch({
        type: 'LIST_SUCCESS',
        MediaUrl: response.data
      });
    });
  },

  render: function() {
    return <List MediaUrl={this.props.MediaUrl} />;
  }
});

const mapStateToProps = function(store) {
  return {
    MediaUrl: store.State.MediaUrl
  };
}

export default connect(mapStateToProps)(ListContainer);