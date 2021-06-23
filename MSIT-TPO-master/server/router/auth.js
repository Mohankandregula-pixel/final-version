const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");


require('../db/conn');
const User = require("../model/userSchema");
const Post = require("../model/postSchema");
const Resource = require("../model/resourceSchema");
const Library = require("../model/librarySchema");
const Placed = require("../model/placedSchema");

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

router.post('/status', async (req, res) => {
    const {post} = req.body;

    try{
        const status = new Post({post});
    await status.save();
    res.status(201).json({ message: "post successfuly sent" });
    }
    catch (err) {
        console.log(err);
    }
})



router.post('/res', async (req, res) => {
    const {resource} = req.body;

    try{
        const status = new Resource({resource})
    await status.save();
    res.status(201).json({ message: "Resource successfuly sent" });
    }
    catch (err) {
        console.log(err);
    }
})


router.get("/posts", (req, res) => {
    Post.find((err, post) => {
      if (err) {
        console.log(err);
      } else {
        res.json(post);
      }
    });
  });
  router.get("/resources", (req, res) => {
    Resource.find((err, post) => {
      if (err) {
        console.log(err);
      } else {
        res.json(post);
      }
    });
  });
router.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    Post.findById(id, (err, post) => {
      res.json(post);
    });
  });
  
router.post("/edit/:id", (req, res) => {
    const id = req.params.id;
    Post.findById(id, (err, post) => {
      if (!post) {
        res.status(404).send("post not found");
      } else {
        post.post = req.body.post;
  
        post
          .save()
          .then((post) => {
            res.json(post);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });
  


// Async-Await 

router.post('/register', async (req, res) => {

    const { name, email, phone, work,btech, score, twel, tenth, password, cpassword} = req.body;
    
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Plz filled the field properly" });
    }

    try {

        const userExist = await User.findOne({ email: email });

        if (userExist) {
             return res.status(422).json({ error: "Email already Exist" });
        } else if (password != cpassword) {
             return res.status(422).json({ error: "password are not matching" });
        } else {
             const user = new User({ name, email, phone, work, btech,  score, twel, tenth, password, cpassword });
            // yeha pe 
            await user.save();
            res.status(201).json({ message: "user registered successfuly" });
        }
        
  
    } catch (err) {
        console.log(err);
    }

});


// login route 

router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({error:"Plz Filled the data"})
        }

        const userLogin = await User.findOne({ email: email });

        // console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

           

        if (!isMatch) {
            res.status(400).json({ error: "Invalid Credientials " });
        } else {
             // need to genereate the token and stored cookie after the password match 
            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            });
            
            res.json({ message: "user Signin Successfully" });
        }
        } else {
             res.status(400).json({ error: "Invalid Credientials " });
        }

    } catch (err) {
        console.log(err);
    }
});


// about us ka page 

router.get('/about', authenticate ,(req, res) => {
    console.log(`Hello my About`);
    res.send(req.rootUser);
});

// get user data for contact us and home page 
router.get('/getdata', authenticate, (req, res) => {
    console.log(`Hello my About`);
    res.send(req.rootUser);
});

// contact us page 

router.post('/contact', authenticate, async (req, res) => {
    try {

        const { name, email, phone, message } = req.body;
        
        if (!name || !email || !phone || !message) {
            console.log("error in contact form");
            return res.json({ error: "plzz filled the contact form " });
        }

        const userContact = await User.findOne({ _id: req.userID });

        if (userContact) {
            
            const userMessage = await userContact.addMessage(name, email, phone, message);

            await userContact.save();

            res.status(201).json({ message: "user Contact successfully" });

        }
        
    } catch (error) {
        console.log(error);
    }

});
router.put('/profile/update', async(req, res) => {
    console.log(req);
    try {
        const userExist = await User.findOne({_id: req.body['_id']});
        console.log("user exists", userExist)
        userExist.name = req.body.name;
        userExist.email = req.body.email;
        userExist.phone = req.body.phone;
        userExist.btech = req.body.btech;
        userExist.score = req.body.score;
        userExist.twel = req.body.twel;
        userExist.tenth = req.body.tenth;

        userExist.save();
        res.send({data: { status : 'Updated Successfully' }})
    }
    catch (err) {
        console.log(err)
    }
})


// Logout  ka page 
router.get('/logout', (req, res) => {
    console.log(`Hello my Logout Page`);
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send('User lOgout');
});

router.get('/view',  (req,res) => {
    User.find({}, (err,docs) => {
       if(err) {
           res.json(err);
       }
       else{
           res.send(docs);
           // console.log(docs);
       }
   })
});
router.get('/view/status',  (req,res) => {
    Post.find({}, (err,docs) => {
       if(err) {
           res.json(err);
       }
       else{
           res.send(docs);
           // console.log(docs);
       }
   })
});

router.get('/view/resources',  (req,res) => {
    Resource.find({}, (err,docs) => {
       if(err) {
           res.json(err);
       }
       else{
           res.send(docs);
           // console.log(docs);
       }
   })
});

router.delete('/deletepost/:id', (req, res)=>{
    Post.findOne({_id:req.params.id})
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
        post.remove()
        .then(result=>{
            res.json(result)
        })
    })
})


router.delete('/deleteresource/:id', (req, res)=>{
    Resource.findOne({_id:req.params.id})
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
        post.remove()
        .then(result=>{
            res.json(result)
        })
    })
})


router.post('/Library', async (req, res) => {
    console.log(req)
    const {CompanyName,CompanyDomain,CompanyResource} = req.body;

    try{
        const library = new Library({CompanyName,CompanyDomain,CompanyResource});
    await library.save();
    res.status(201).json({ message: "Resources successfuly sent" });
    }
    catch (err) {
        console.log(err);
    }
})



router.get('/viewLibrary',  (req,res) => {
    Library.find({}, (err,docs) => {
       if(err) {
           res.json(err);
       }
       else{
           res.send(docs);
           // console.log(docs);
       }
   })
});


router.post('/placed', async (req, res) => {
    console.log(req)
    const {company,studentname} = req.body;

    try{
        const placed = new Placed({company,studentname});
    await placed.save();
    res.status(201).json({ message: "Succesfully updated" });
    }
    catch (err) {
        console.log(err);
    }
})

router.get('/viewplaced',  (req,res) => {
    Placed.find({}, (err,docs) => {
       if(err) {
           res.json(err);
       }
       else{
           res.send(docs);
           // console.log(docs);
       }
   })
});



module.exports = router;

