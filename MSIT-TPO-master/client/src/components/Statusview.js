import React, {Component} from 'react'
import axios from '../axios'
import './Table2.css'

export default class Table2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    getUsersData() {
        axios
            .get(`http://localhost:5000/view/status`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const users = data.map(u =>
                    <div><table> 
                        {/* <tr><th><h1>Name</h1></th></tr> */}
                        <tr>
                        <th>{u.post}</th>
                        <th></th>
                        <th>Post-Date={u.date}</th>
                 
                        </tr>                        </table>
                   
                    </div>
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
            <div classname="home-page">
                <table>
                    {/* <tr><th>Name</th></tr> */}
                </table>
               
               <p> {this.state.users}</p> 
              
            </div>
        )
    }
}