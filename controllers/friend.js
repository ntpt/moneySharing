const express = require("express");
const User = require("../models/User");
const Transaction = require("../models/Transaction");

//get list friends
exports.showFriends = async (req, res) => {
    try {
        const userID = req.params.userID;
        const user = await User.findById(userID);

        const friendIds = user.friends;
        const listFriends = [];
        
        for (const friendId of friendIds){
            const friend = await User.findById(friendId).select("-password -friends");;
            listFriends.push(friend);
        }

        return res.json({
            friends: listFriends
        });
        
    } catch (error) {
        return res.status(400).json({msg: error});
    }

};

exports.specificfriend = async (req, res) => {

}

exports.addfriend = async (req, res) => {
    try {
        const userID = req.params.userID;
        const friendID = req.params.friendID;

        let user = await User.findById(userID);

        if (user.friends.indexOf(friendID) === -1) {
            user.friends.push(friendID);
            await user.save();

            let friend = await User.findById(friendID);
            friend.friends.push(userID);
            await friend.save();

            res.status(200).json({ msg: "Success" });

        } else {
            res.status(400).json({ msg: "Already friend" });
        }

    } catch (error) {
        return res.status(400).json({msg: error});
    }
}

exports.unfriend = async (req, res) => {
    try {
        const userID = req.params.userID;
        const friendID = req.params.friendID;

        let user = await User.findById(userID);

        user.friends.splice(user.friends.indexOf(friendID), 1);
        user.save();

        friend.friends.splice(friend.friends.indexOf(userID), 1);
        friend.save();

        res.status(200).json({ msg: "Success" });

    } catch (error) {
        return res.status(400).json({msg: error});
    }

}