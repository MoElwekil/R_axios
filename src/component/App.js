import React, {Component} from 'react'
import Axios from 'axios'

// Components
import SearchBar from './SearchBar'

class App extends Component {
    // state
    state = {images: []}

    searchTerm = async (e) =>{
        const response = await Axios.get('https://api.unsplash.com/search/photos?', {
            params: {query: e},
            headers: {
                Authorization: 'Client-ID mEy5zYt77kML0SjBahkBthvxieunPVLZf8FyttVEUB8'
            }
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