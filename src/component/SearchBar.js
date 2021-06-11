import React, {Component} from 'react'

class SearchBar extends Component {
    // state
    state = {keyword: ''}

    onSearch = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.keyword)
    }


    render(){
        return(
            <div>
                <form onSubmit={this.onSearch}>
                    <div className="mb-3">
                        <label htmlFor="Keyword" className="form-label">Search</label>
                        <input type="search" className="form-control" id="Keyword" placeholder="Search for..." value={this.state.keyword} onChange={(e) => {this.setState({keyword: e.target.value})}} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar