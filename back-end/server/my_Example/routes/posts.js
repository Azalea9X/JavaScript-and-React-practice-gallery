import express from "express"; 
const app = express();
const router = express.Router();
let posts = [
    {id: 1, title: "Post one", content: "Post one"}, 
    {id: 2, title: "Post two", content: "Post two"},
    {id: 3, title: "Post three", content: "Post three"}, 
    
]


router.get("/api/posts", (req, res) => {
    const limit = parseInt(req.query.limit); 
    if(!isNaN(limit) && limit > 0) {
    //Works
    return res.status(200).
    json(posts.slice(0, limit));
    
    }
    res.status(200).json(posts);
    //
    })
    
    
    router.get("/api/posts/:id", (req, res) => {
        const id = parseInt(req.params.id); // Get the ID from request parameters
      
        const foundPost = posts.filter(post => post.id === id); // Use === for strict equality
      
        if (foundPost) {
          res.json(foundPost); // Send the found post as JSON if it exists
        } else {
          res.status(404).json({ message: "Post not found" }); // Send a 404 error if not found
        }
      });
      //Interesting that this works and Travery's code didn't. 
    
      router.get("/api/posts/:id/comments", (req, res) => {
        const id = parseInt(req.params.id); // Get the ID from request parameters
      
       const foundPost = posts.filter(post => post.id === req.params.id);
    
      
        if (foundPost) {
          res.json(foundPost.comments); // Send the found post as JSON if it exists
        } else {
          res.status(404).json({ message: "Post not found" }); // Send a 404 error if not found
        }
      });
      //Interesting that this works and Travery's code didn't.
        
        
    router.get("/about", (req, res) => {
        res.sendFile(path.join(__dirname, "./../public", "about.html"));
        
    
    })

export default router;

//https://github.com/pulumi/pulumi/issues/4017