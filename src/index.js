import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Components
import App from './component/App'
class Index extends Component {
    render(){
        return(
            <App />
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));