import React, {useState, useEffect} from 'react'
import Tpostatus from './Tpostatus';
import PostList from './PostList'
import PostListstud from './PostListstud'
import Calender from '../images/calender.jpg'
import Resources from '../images/resource.jpg'
import Noti from '../images/Noti.jpg'

const Home = () => {
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
                    <p className="pt-5">WELCOME</p>
                    <h2>{userName}</h2>
                    
                </div>
            </div>
            <div>
            
            &nbsp;
            &nbsp;
            &nbsp;

            <div className="container-fluid">
                     <div className="row">
                     <div className="col-4">
                    <div class="card">
                        <img
                            src={Noti}
                            class="card-img-top"
                            alt="..." 
                        />
                        <div class="card-body">
                            <h5 class="card-title">Recent Notifications</h5>
                            <p class="card-text">
                            You can find all new recent Notifications here.
                            </p>&nbsp;
                            <p></p>
                            <a href="#" class="btn btn-primary">Click here</a>
                        </div>
                        </div>
                    </div>

                    <div className="col-4">
                    <div class="card">
                        <img
                        src={Resources}
                            class="card-img-top"
                            alt="..." 
                        />
                        <div class="card-body">
                            <h5 class="card-title">Resource references</h5>
                            <p className="card-text">
                            Here you can find resources for preparation.
                            </p>&nbsp;
                            <p></p>

                            <a href="/Resources"  class="btn btn-primary">Click here</a>
                        </div>
                        </div>
                    </div>


                    <div className="col-4">
                    <div class="card">
                        <img
                        src ={Calender}
                            class="card-img-top"
                            alt="..." 
                        />
                        <div class="card-body">
                            <h5 class="card-title">Important dates</h5>
                            <p class="card-text">
                            Make a schedule and start your preparation right now.
                            </p>&nbsp;
                            <p></p>

                            <a href="https://www.google.com/calendar/about/" class="btn btn-primary">Click here</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>

                    {userData.work == "TPO" &&( 
                <div className="container emp-profile">

                   
                    <Tpostatus />
                    <br/>
                   
                    <PostList />
                    
                 

                </div>
            )}
            {userData.work == "student" &&(
                    <div > 
                        <div className="container emp-profile">
                       <PostListstud />
                      
                        </div>
                    </div>
                )}







                
                  {userData.work == "Student" &&(
                    <div > 
                        <div className="container emp-profile">

                       

                        <PostListstud />
                      
                        </div>
                    </div>
                )}
 
                
                
            </div>

       
        </>
    )
}

export default Home
