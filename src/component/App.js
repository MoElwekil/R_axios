import React, {Component} from 'react'
import Unsplash from '../api/Unsplash'

// Components
import SearchBar from './SearchBar'

class App extends Component {
    // state
    state = {images: []}

    searchTerm = async (e) =>{
        const response = await Unsplash.get('search/photos?', {
            params: {query: e},
        })
        this.setState({images: response.data.results})
    };

    render(){
        return (
            <div className="container" style={{marginTop:40}}>
                <SearchBar onSubmit={this.searchTerm} />
                Found: {this.state.images.length}
            </div>
        )
    }
}

export default App;