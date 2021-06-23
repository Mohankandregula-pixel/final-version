import React, {Component} from 'react'
import axios from '../axios'
import './Table.css'

export default class Table2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    getUsersData() {
        axios
            .get(`http://localhost:5000/view`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const users = data.map(u =>
                    
                      
                        
                        <tr>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                       
                        <td>{u.btech}</td>
                        <td>{u.score}</td>
                        <td>{u.twel}</td>
                        <td>{u.tenth}</td>
                        </tr> 
                       
                   
                    
                    )

                    this.setState({
                        users
                    })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    render() {

        return (
            <div >
                <table className="table table-striped mt-3">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    
                      <th>B.Tech</th>
                      <th>B.Tech Score</th>
                      <th>10+2 Score</th>
                      <th>10th Score</th>
                 </tr>
                    </thead>
               
               <tbody> {this.state.users}</tbody> 
               </table>
            </div>
        )
    }
}