import React, {useState, useEffect} from 'react'

import ViewLibrary from '../components/ViewLibrary';
import LibraryResources  from '../components/LibraryResources';

const Library = () => {
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState({});

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUserName(data.name);
            setShow(true);
            setUserData(data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME TO</p>
                    <h2>Library</h2>
                    
                </div>
            </div>
            <div>
            {userData.work == "TPO" &&( 
                <div className="container emp-profile">

                    <h1>Company Details</h1>
                    <LibraryResources/>
                    <br/>
                    <h1>Library</h1>
                    <ViewLibrary/>
                    
                 

                </div>
            )}
         

            
                {userData.work == "student" &&(
                    <div > 
                        <div className="container emp-profile">
                        
                       
                        <ViewLibrary/>
                      
                        </div>
                    </div>
                )}
                
            </div>



            
            
        </>
    )
}

export default Library