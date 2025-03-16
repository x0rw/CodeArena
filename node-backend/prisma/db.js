const { PrismaClient } = await import('@prisma/client');
import bcrypt from 'bcrypt';
import { SALTROUNDS } from '../config/config.js';
//local db table name : users .

const prisma = new PrismaClient();

const findUser = async (username) => {
  try {
    return await prisma.users.findUnique({
      where: { username },
    });
  } catch (error) {
    throw new Error(`findUser error: ${error.message}`);
  }
};

const checkUser = async (username, password) => {
  try {
    const user = await findUser(username);
    if (!user) {
      throw new Error('User not found');
    }
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      throw new Error('Invalid password');
    }
    return user;
  } catch (error) {
    throw new Error(`Authentication failed: ${error.message}`);
  }
}

const addUser = async (username, email, password) => {
  try {
    const existingUser = await userService.findUser(username);
    if (existingUser) throw new Error('Username exists');

    const hashedPass = await bcrypt.hash(password, SALTROUNDS);
    const add = await prisma.users.create({
      data: {
        username: username,
        email: email,
        password_hash: hashedPass,
      },
    })
  } catch (error) {
    throw new Error(`addUser failed: ${error.message}`);
  }
}

const removeUser = async (username) => {
  try {
    const user = await findUser(username);
    if (!user) throw new Error('User not found');

    return await prisma.user.delete({
      where: { username },
    });
  } catch (error) {
    throw new Error(`removeUser failed: ${error.message}`);
  }
}

const updateUser = async () => {
  try {
    const update = await prisma.users.update({
      where: { username },
      data: {
        password_hash: 'new password',
      }
    })
  } catch (error) {
    throw new Error(`updateUser failed: ${error.message}`);
  }
}

