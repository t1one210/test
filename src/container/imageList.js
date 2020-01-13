import React, { Component } from "react";
import {connect} from 'react-redux'
//import items from './reducers';

class ImageList extends Component {
    renderList() {
        return this.props.items.map((item) => {
            return (
                <li key={item.id} className="list-group-item">
                    <img src={item.URL} alt={"text"} width="33%" height = "33%"/>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
});
export default connect(mapStateToProps)(ImageList);