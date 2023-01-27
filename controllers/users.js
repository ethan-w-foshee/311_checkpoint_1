const express = require('express');
const users = require('../data/index')

// GET
const listUsers = (req, res) => {
    res.json(users)
}

// GET with ID
const showUsers = (req, res) => {
    if (req.params.id > users.length || req.params.id <= 0) {
        res.status(404).send(`INVALID ID: ${req.params.id}`)
    }
    else {
        res.json(users[req.params.id - 1])
    }
}

// POST
const addUser = (req, res) => {
    req.body.id = users.length + 1
    users.push(req.body)
    res.send(users)
}

// PUT
const changeUser = (req, res) => {
    if (req.params.id > users.length || req.params.id <= 0) {
        res.status(400).send(`INVALID ID: ${req.params.id}`)
    }
    else {
        users[req.params.id - 1] = req.body
        res.send(users)
    }
}

// DELETE
const deleteUser = (req, res) => {
    if (req.params.id > users.length || req.params.id <= 0) {
        res.status(400).send(`INVALID ID: ${req.params.id}`)
    }
    else {
        users.splice(req.params.id - 1, 1)
        res.send(users)
    }

}

module.exports = { listUsers, showUsers, addUser, changeUser, deleteUser }