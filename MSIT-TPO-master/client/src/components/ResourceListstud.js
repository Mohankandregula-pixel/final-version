import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getResources } from "./api"

const ResourceListstud = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchResources = async () => {
      const Resources = await getResources()
      setItems(Resources)
    }
    fetchResources()
  }, [])

  return (
    <div>
      <div className="mt-3">
        <h3>Resources</h3>
        <table className="table table-striped mt-3">
          <thead>
            
          </thead>
          <tbody>
            {
              items.map(Post => (
                <tr key={Post._id}>
                  <td>
                    <a href={Post.resource}>{Post.resource}</a>
                  </td>
                
                  <td>
                   
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourceListstud