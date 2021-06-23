// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Edit() {
//   const [userData, setUserData] = useState({});

//   const callAboutPage = async () => {
//     try {
//       const res = await fetch("/about", {
//         method: "GET",
//         headers: {
//           Accept: "appllication/json",
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });
//       const data = await res.json();
//       console.log(data);
//       setUserData(data);

//       if (!res.status === 200) {
//         const error = new Error(res.error);
//         throw error;
//       }
//     } catch (err) {
//       console.log(err);
//       // history.push('/login');
//     }
//   };

//   useEffect(() => {
//     callAboutPage();
//   }, []);

//   const handleChange = (e) => {
//     setUserData({ [e.target.name]: e.target.value });
//     console.log(userData);
//   };
  
//   const updatedata = (id) => {
//     axios.put("https://localhost:5000/update", {
//       id: id,
//       Name: Name,
//       Email: Email,
//       Phone: Phone,
//       Profession: Profession,
      

//     }
//     )
//   }

//   return (
//     <div style={{width: "100%"}}>
      
//       <div className="col-md-8 pl-5 about-info">
//         <div className="tab-content profile-tab" id="myTabContent">
//           <div
//             className="tab-pane fade show active"
//             id="home"
//             role="tabpanel"
//             aria-labelledby="home-tab"
//           >
//             <div className="row">
//               <div className="col-md-6">
//                 <label>User Id</label>
//               </div>
//               <div className="col-md-6">
//                 <p>787865454546</p>
//               </div>
//             </div>
//             <div className="row mt-3">
//               <div className="col-md-6">
//                 <label>Name</label>
//               </div>
//               <div className="col-md-6 ">
//                 <input
//                   type="text"
//                   value={userData.name}
//                   name="name"
//                   onChange={(e) => handleChange(e)}
//                 />
//               </div>
//             </div>
//             <div className="row mt-3">
//               <div className="col-md-6">
//                 <label>Email</label>
//               </div>
//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   value={userData.email}
//                   name="email"
//                   onChange={(e) => handleChange(e)}
//                 />
//               </div>
//             </div>
//             <div className="row mt-3">
//               <div className="col-md-6">
//                 <label>Phone</label>
//               </div>
//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   value={userData.phone}
//                   name="phone"
//                   onChange={(e) => handleChange(e)}
//                 />
//               </div>
//             </div>
//             <div className="row mt-3">
//               <div className="col-md-6">
//                 <label>Profession</label>
//               </div>
//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   value={userData.work}
//                   name="work"
//                   onChange={(e) => handleChange(e)}
//                 />
//               </div>
//             </div>

//             <div className="row mt-3">
//               <div className="col-md-6">
//                 <label>B.tech college</label>
//               </div>
//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   value={userData.btech}
//                   name="btech"
//                   onChange={(e) => handleChange(e)}
//                 />
//               </div>
//             </div>

//             <div className="row mt-3">
//               <div className="col-md-6">
//                 <label>Btech score</label>
//               </div>
//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   value={userData.score}
//                   name="score"
//                   onChange={(e) => handleChange(e)}
//                 />
//               </div>
//             </div>

//             <div className="row mt-3">
//               <div className="col-md-6">
//                 <label>12th percentage</label>
//               </div>
//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   value={userData.twel}
//                   name="twel"
//                   onChange={(e) => handleChange(e)}
//                 />
//               </div>
//             </div>

//             <div className="row mt-3">
//               <div className="col-md-6">
//                 <label>10th CGPA</label>
//               </div>
//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   value={userData.tenth}
//                   name="tenth"
//                   onChange={(e) => handleChange(e)}
//                 />
//               </div>
//             </div>
//             <div className="col-md-2">
//               <button onClick={() => updatedata(val._id)} >Update</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
    




//   );
// }


// export default Edit;
