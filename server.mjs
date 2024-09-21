import express from "express"

const PORT = 3000;
const app = express();
app.use(express.json())

const users = [
    {id: 1, name: "abubakar", email: "abubakar@gmail.com"},
    {id: 2, name: "ahmad", email: "ahmad@gmail.com"}
]

app.get('/api/users', (req, res) => {
    res.status(200).json({message: "Get Request - get all user", users})
})

app.post("/api/users", (req, res) => {
    const userId = users.length + 1;
    const newUser = req.body;
    res.status(201).json({message: "Post Request - created a user", newUser})
})

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:3000`);
})