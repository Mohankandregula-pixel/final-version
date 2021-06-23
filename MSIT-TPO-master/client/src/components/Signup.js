import React, {useState}  from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import signpic from "../images/registro.jpg";

// const {student, TPO} = React.createContext();

const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "",btech: "",score: "", twel: "", tenth: "",password: "", cpassword: ""
    });
    const [errors,seterrors] = useState({});
    const [pwd,setPwd] = useState(false);

    let name, value;

    const handleInputs = (e) => {
        console.log(e.target.name);
        if(e.target.name == 'email') {
            let pattern=/@msitprogram.net/;
                    let patterncount=e.target.value.search(pattern);
                    if(patterncount<0){
                      errors.email='Invalid email address. E.g. example@msitprogram.net '
                    } else {
                        seterrors({})
                    }
        }
        if(e.target.name == 'cpassword') {
            if(user.password !== e.target.value ) {
                errors.cpassword='Confirm password must same as password'
            } else {
                seterrors({})
            }
        }

        name = e.target.name;
        value = e.target.value;
        
        setUser({...user, [name]:value});
    }


    const PostData = async (e) => {
        e.preventDefault();
        // if(errors.length === 0) {
            const { name, email, phone, work, btech, score , twel, tenth,password, cpassword } = user;
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, work, btech, score, twel, tenth, password, cpassword
                })
            });
    
            const data = await res.json();
    
            // I need to change the data to res 
            if (data.status === 422 || !data) {
                window.alert("INvalid Registration");
                console.log("INvalid Registration");
            } else {
                 window.alert(" Registration Successfull");
                console.log("Successfull Registration");
    
                history.push("/login");
            }
        
        
    }

    const showHidePwd = () => {
        setPwd(!pwd)
    }


    return (
        <>
                <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                   
                    
                </div>
            </div>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form>    
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off" required maxLength="30"
                                        value={user.name}
                                        onChange={handleInputs}
                                        placeholder="Your Name"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off" required
                                        value={user.email}
                                        onChange={handleInputs}
                                        placeholder="Your Email"
                                    />
                                     <p>{errors.email && errors.email} </p>
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="tel"  name="phone" id="phone" autoComplete="off" required maxLength="15"
                                        value={user.phone}
                                        onChange={handleInputs}
                                        placeholder="Your Phone"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="work">
                                        <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="work" id="work" autoComplete="off" required
                                        value={user.work}
                                        onChange={handleInputs}
                                        placeholder="Your Profession"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="btech" id="btech" autoComplete="off" required
                                        value={user.btech}
                                        onChange={handleInputs}
                                        placeholder="Your Btech Branch and Clge"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="number" name="score" id="score" autoComplete="off" required max="100"
                                        value={user.score}
                                        onChange={handleInputs}
                                        placeholder="Your Btech score"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="number" name="twel" id="twel" autoComplete="off" required max="100"
                                        value={user.twel}
                                        onChange={handleInputs}
                                        placeholder="Your 10+2 score"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="number" name="tenth" id="tenth" autoComplete="off"  required max="100"
                                        value={user.tenth}
                                        onChange={handleInputs}
                                        placeholder="Your 10th score"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type={pwd === true ? 'text' : 'password' } name="password" id="password" autoComplete="off" required minLength="8" maxLength="10"
                                        value={user.password}
                                        onChange={handleInputs}
                                        placeholder="Your Password"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type={pwd === true ? 'text' : 'password' } name="cpassword" id="cpassword" autoComplete="off" required minLength="8" maxLength="10"
                                        value={user.cpassword}
                                        onChange={handleInputs}
                                        placeholder="Confirm Your Password"
                                    />
                                </div>
                                    <div style={{display:'flex', alignItems:"center"}}>
                                        <input type="checkbox" onClick={() => showHidePwd()} />
                                        <p>Show Password</p>
                                    </div>
                                    <p>{errors.cpassword && errors.cpassword} </p>

                                <div className="form-group form-button" >
                                    <button className="form-submit" onClick={PostData} >Submit</button>
                                </div>
                                </form>
 
                            </div>
                            <div className="signup-image">
                                <figure>
                                    <img src={signpic} alt="registration pic" />
                                </figure>
                                <NavLink to="/login" className="signup-image-link">I already have an account</NavLink>
                            </div>
                       
                    </div>
                </div>
           </section>
        </>
    )
}

export default Signup