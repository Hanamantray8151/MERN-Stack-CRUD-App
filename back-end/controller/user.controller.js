import User from '../model/user.js';

// Get All Users.
export const getUsers = async (req,res) => {
    try {
        //Finding inside the model is time taking so here I used await for that.
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        req.status(404).json({message : err.message});
    }
}

// Save/Add User Data into Database.
export const addUser = async (req,res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(404).json({message : err.message});
    }
}

// Get User by Id.
export const getUserById = async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({message : err.message});
    }
}

// Save Data of the edited User in Database.
export const editUser = async (req,res) => {
    let user = await User.findById(req.params.id);
    user = req.body;

    const updateUser = new User(user);
    try {
        await User.updateOne({_id : req.params.id},updateUser);
        res.status(200).json(updateUser);
    } catch (err) {
        res.status(404).json({message : err.message});
    }
}

// Delete the data of User from the Database.
export const deleteUser = async (req,res) => {
    try {
        await User.deleteOne({_id : req.params.id});
        res.status(200).json('User deleted successfully.');
    } catch (err) {
        res.status(404).json({message : err.message});
    }
}