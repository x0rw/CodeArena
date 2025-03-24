import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

// const users = async (req, res, next) => {},
//const admin = async (req, res, next) => {},


const userById = async (req, res, next) => {
};

const dashboard = async (req, res, next) => {
};

const register = async (req, res, next) => {
};

const login = async (req, res, next) => {
};

const logout = async (req, res, next) => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.sendStatus(204);
  // Add a redirect
};

export default {
  userById,
  dashboard,
  register,
  login,
  logout
};

