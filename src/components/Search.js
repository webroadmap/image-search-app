import React from 'react'

class Search extends React.Component{

    render(){

        return (
            <div className="ui center aligned segment">
               <form class="ui form">
                   <h1>Image Search Application</h1>
                   <div className="field">
                       <label>Search Here</label>
                       <div className="ui icon input">
                           <input type="text"/>
                           <i className="inverted circular search link icon"></i>

                       </div>
                   </div>
               </form>  
     
            </div>
            
        )

    }

}

export default Search;
