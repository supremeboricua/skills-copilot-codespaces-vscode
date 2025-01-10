// Create web server
// 1. Import express
const express = require('express');

// 2. Create an express application
const app = express();

// 3. Create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 4. Start the server
app.listen(3000, () => {
    console.log('Server started');
});

// 5. Open http://localhost:3000 in a browser

// 6. Create a new route for comments
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});

// 7. Visit http://localhost:3000/comments in a browser

// 8. Create a route with a parameter
app.get('/comments/:id', (req, res) => {
    res.send(`This is the comment with id ${req.params.id}`);
});

// 9. Visit http://localhost:3000/comments/123 in a browser

// 10. Create a route with multiple parameters
app.get('/comments/:postId/:commentId', (req, res) => {
    res.send(`This is the comment with id ${req.params.commentId} for post with id ${req.params.postId}`);
});

// 11. Visit http://localhost:3000/comments/123/456 in a browser

// 12. Create a route with a query parameter
app.get('/comments', (req, res) => {
    res.send(`This is the comment with id ${req.query.id}`);
});

// 13. Visit http://localhost:3000/comments?id=123 in a browser
// 14. Visit http://localhost:3000/comments in a browser

// 15. Create a route with a query parameter and a default value
app.get('/comments', (req, res) => {
    const id = req.query.id || 'default-id';
    res.send(`This is the comment with id ${id}`);
});

// 16. Visit http://localhost:3000/comments in a browser
// 17. Visit http://localhost:3000/comments?id=123 in a browser
// 18. Visit http://localhost:3000/comments?id= in a browser

// 19. Create a route with a query parameter and a default value
app.get('/comments', (req, res) => {
    const id = req.query.id || 'default-id