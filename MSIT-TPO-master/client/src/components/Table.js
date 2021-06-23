import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Table = () => {
  const url = 'http://localhost:5000/view`'

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url,{}).then(json => setData(json.data))
  }, [])

  const renderTable = () => {
    return data.map(user => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td></td>
          <td></td>
        </tr>
      )
    })
  }

  return (
    <div>
      <h1 id="title"> Table</h1>
      <table id="users">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  )
}


export default Table
