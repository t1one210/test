import ReactFileReader from "react-file-reader";
import React, { Component } from "react";

export default class D extends Component{
    state = {
      file : ""
    }
    handleFiles = files => {
      this.setState({
        file: files.base64
      })
    }
    render() {
      return (
        <div className="files">
        <ReactFileReader handleFiles={this.handleFiles}>
          <button className='btn'>Off-Upload</button>
        </ReactFileReader>

        <p>Read</p>
        <iframe src={this.state.file} frameBorder="0" height="400" width="50%" />
        </div>
         
        //<ReactFileReader handleFiles={this.handleFiles}>
          //<button className='btn'>Upload</button>
        //</ReactFileReader>
        
        //{ id: 1, URL: "https://i.ytimg.com/vi/983QnpQnMng/maxresdefault.jpg" },
        //{ id: 2, URL: "https://img0.etsystatic.com/000/0/6690352/il_570xN.306488160.jpg" },
        //{ id: 3, URL: "https://img0.etsystatic.com/000/0/6690352/il_570xN.306488160.jpg" },
        //{ id: 4, URL: "http://i.ytimg.com/vi/ZMV3rTe5MMI/maxresdefault.jpg" }
      );
    };
    }