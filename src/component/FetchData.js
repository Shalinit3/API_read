import React, {Component} from 'react';
import ShowData from './ShowData'

export default class FetchData extends Component {
    constructor() {
        super()
        this.state = {
            data:[]
        }
    }

    getData = () => {
        fetch('http://localhost:8000/api/user/view', {
            method: 'get', // or 'PUT'
            // credentials: 'same-origin',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then((data) => {
                this.setState({data:data.data})
        })
        .catch ((err) => {
            console.log('>>>>>>>>>>>.', err)
        })    
    }

    componentWillMount() {    
       this.getData()
    }

    render() {
        return (
           <ShowData data ={this.state.data} />
        )
    }
}