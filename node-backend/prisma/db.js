const { PrismaClient } = await import('@prisma/client');
import bcrypt from 'bcrypt';
import config from '../config/config.js';
//local db table name : users .

const prisma = new PrismaClient();

const findUser = async (username) => {
  try {
    return await prisma.users.findUnique({
      where: { username: username },
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
    //    const existingUser = await findUser(username);
    //    if (existingUser) throw new Error('Username exists');

    const hashedPass = await bcrypt.hash(password, config.saltRounds);
    const add = await prisma.users.create({
      data: {
        username: username,
        email: email,
        password: password, // change it to hashedPass
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

    return await prisma.users.delete({
      where: { username },
    });
  } catch (error) {
    throw new Error(`removeUser failed: ${error.message}`);
  }
}

const updateUser = async () => {
  try {
    const update = await prisma.User.update({
      where: { username },
      data: {
        password: 'new password',
      }
    })
  } catch (error) {
    throw new Error(`updateUser failed: ${error.message}`);
  }
}


main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());


export default {
  findUser,
  checkUser,
  addUser,
  removeUser,
  updateUser
};
