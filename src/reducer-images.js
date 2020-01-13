//import ReactFileReader from 'react-file-reader';
import React from "react";

/*const imagesReducer = () => {
  //function image(response) {
  //  return response.text();
//}
  var apiURL = 'http://testimages.osora.ru:86/';
  var init = {
    mode: 'no-cors',
    method: 'GET'
};
  fetch(apiURL, init)
  .then(response => response.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        items: result.items
      });
    },
  )
  .catch(error => console.log('Request failed', error));  
}

  export default imagesReducer;*/

  /*class ImagesReducer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("http://testimages.osora.ru:86/")
        .then(res => res.json())
        .then(
          (res) => {
            console.log(res);
            this.setState({
              isLoaded: true,
              items: res
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
          <div className = 'root'>
          <ul>
          {items.map(items => (
            <li key={items}>
              {items}
            </li>
          ))}
        </ul>
        </div>
        );
      }
    }
  }

  export default ImagesReducer;*/

  const ImagesReducer = () => {
    return [
      { id: 1, URL: "http:\/\/testimages.osora.ru:86\/img\/rabbit.jpg" },
      { id: 2, URL: "http:\/\/testimages.osora.ru:86\/img\/cat.png" },
      { id: 3, URL: "http:\/\/testimages.osora.ru:86\/img\/test.png" }
    ];
  };
  
  export default ImagesReducer;