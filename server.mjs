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
    const newUser = {userId,...req.body};
    users.push(newUser);
    res.status(201).json({message: "Post Request - created a user", newUser})
})

app.put("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId)
    if (userIndex !== -1) {
        const updatedUser = {...users[userIndex], ...req.body};
        users[userIndex] = updatedUser
        res.status(200).json({message: `Update Request - The user with user id ${userId} is updated`, body : updatedUser})
    } else {
        res.status(404).json({message: `The user with user id ${userId} is not found`})
    }
})

app.delete("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId)
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(200).json({message: `Delete Request - The user with user id ${userId} is deleted`})
    } else {
        res.status(404).json({message: `The user with user id ${userId} is not found`})
    }
})

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:3000`);
})