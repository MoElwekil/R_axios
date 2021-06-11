import React, {Component} from 'react'
import Axios from 'axios'

// Components
import SearchBar from './SearchBar'

class App extends Component {

    searchTerm(e){
        Axios.get('https://api.unsplash.com/search/photos?', {
            params: {query: e},
            headers: {
                Authorization: 'Client-ID mEy5zYt77kML0SjBahkBthvxieunPVLZf8FyttVEUB8'
            }
        })
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