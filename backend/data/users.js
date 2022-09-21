import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123123', 10),
    isAdmin: true,
  },
  {
    name: 'Mehdi Sassi',
    email: 'mehdi@gmail.com',
    password: bcrypt.hashSync('123123', 10),
  },

];

export default users;
