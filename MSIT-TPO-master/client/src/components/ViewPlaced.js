import React, {Component} from 'react'
import axios from '../axios'
import './Table2.css'

export default class ViewPlaced extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    getUsersData() {
        axios
            .get(`http://localhost:5000/viewplaced`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const users = data.map(u =>
                    
                      
                        
                        <tr>
                        <td>{u.company}</td>
                        <td>{u.studentname}</td>
                       
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
                <div className="table table-striped mt-3">
                <table className="work">
                    <thead>
                    <tr>
                        <th>COMPANYNAME</th>
                        <th>Student Names</th>
                       
                 </tr>
                    </thead>
               
               <tbody> {this.state.users}</tbody> 
               </table>
            </div>
            </div>
        )
    }
}