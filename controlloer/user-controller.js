const express = require("express");
const pool = require("../db.config");
const router = require("../routes/user-router");
require("dotenv").config();



const signUp = async (req, res) => {
    const signUpQuery = `INSERT INTO register VALUES($1, $2, $3)`;
    try {
      const {role,user_name, email, password } = req.body;
      console.log(req.body);
      const result = await pool.query(signUpQuery, [
        email,
        password,
        role 
      ]);
      res.status(200).json(result);
    } catch (error) {
      throw error;
    }
  };

  
  
  const signIn = async (req, res) => {
      const signInQuery = `SELECT * FROM register`;
      try {
        const result = await pool.query(signInQuery);
        res.status(200).json(result);
      } catch (error) {
        throw error;
      }
    };
   