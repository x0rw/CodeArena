const { PrismaClient } = await import('@prisma/client');
import bcrypt from 'bcrypt';
import config from '../config/config.js';
import errorHandler from '../utils/errorHandler.js';
//local db table name : users .

const prisma = new PrismaClient();

const findUser = async (username) => {
  try {
    return await prisma.users.findUnique({
      where: { username: username },
    });
  } catch (error) {
    next(new errorHandler.DatabaseConnectionError(`findUser error: ${error.message}`));
  }
};

const checkUser = async (username, password) => {
  try {
    const user = await findUser(username);
    if (!user) {
      throw new errorHandler.ValidationError('User not found');
    }
    const validPass = await bcrypt.compare(password, user.password_hash);
    if (!validPass) {
      throw new errorHandler.ValidationError('Invalid password');
    }
    return user;
  } catch (error) {
    next(new errorHandler.UnauthorizedError(`Authentication failed: ${error.message}`));
  }
}

const addUser = async (username, email, password) => {
  try {
    //    const existingUser = await findUser(username);
    //    if (existingUser) throw new Error('Username exists');

    const hashedPass = await bcrypt.hash(password, config.saltRounds);
    const add = await prisma.users.create({
      data: {
        username: username,
        email: email,
        password_hash: hashedPass, // change it to hashedPass
      },
    })
    return add;
  } catch (error) {
    next(new errorHandler.InternalServerError(`addUser failed: ${error.message}`));
  }
}

const removeUser = async (username) => {
  try {
    const user = await findUser(username);
    if (!user) throw new errorHandler.ValidationError('User not found');

    return await prisma.users.delete({
      where: { username },
    });
  } catch (error) {
    next(new errorHandler.InternalServerError(`removeUser failed: ${error.message}`));
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
    next(new errorHandler.InternalServerError(`updateUser failed: ${error.message}`));
  }
}


//  .catch((e) => console.error(e))
//  .finally(() => prisma.$disconnect());


export default {
  findUser,
  checkUser,
  addUser,
  removeUser,
  updateUser
};
