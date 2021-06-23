export const getPosts = () => fetch("http://localhost:5000/posts").then(res => res.json())
export const getResources = () => fetch("http://localhost:5000/resources").then(res => res.json())

export const createPost = (Post) => fetch("http://localhost:5000/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(Post)
})  

export const updatePost = (post, id) => fetch(`http://localhost:5000/edit/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(post)
})  
 

export const getPost = (id) => fetch(`http://localhost:5000/edit/${id}`).then(res => res.json())



// export const deletePost = (Post, id) => fetch(`http://localhost:4000/post${id}`, {
//   method: "POST",
//   headers: {
//     "Accept": "application/json",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(Post)
// }) 