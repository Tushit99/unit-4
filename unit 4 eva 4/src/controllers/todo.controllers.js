const express = require("express");
const crudController = require('./crud.controllers');
const Todo = require('../module/todo.module');

const app = express();

app.post("/", crudController.post(Todo));