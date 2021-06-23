import React, {Component} from 'react'
import axios from '../axios'
import './Table2.css'

export default class ViewLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    getUsersData() {
        axios
            .get(`http://localhost:5000/viewLibrary`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const users = data.map(u =>
                    
                      
                        
                        <tr>
                        <td>{u.CompanyName}</td>
                        <td>{u.CompanyDomain}</td>
                        <td>
                        <a href={u.CompanyResource}>{u.CompanyResource}</a>
                       </td>
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
                        <th>DOMAIN</th>
                        <th>RESOURCES</th>
                 </tr>
                    </thead>
               
               <tbody> {this.state.users}</tbody> 
               </table>
            </div>
            </div>
        )
    }
}