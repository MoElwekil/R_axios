import React, {Component} from 'react'

// Components
import SearchBar from './SearchBar'

class App extends Component {

    searchTerm(e){
        console.log(e)
    }

    render(){
        return (
            <div className="container" style={{marginTop:40}}>
                <SearchBar onSubmit={this.searchTerm} />
            </div>
        )
    }
}

export default App;