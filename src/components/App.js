import React from 'react'
import Search from "./Search";
import Image from "./Image";

class App extends React.Component {

    render(){
        return (
            <div className="ui container">
              <Search />
              <h4>Found: 0 Images</h4>
              <Image />
            </div>
        )

    }
  
}

export default App
