import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true


    },

{

        name: 'Abolaji Alimi',
        email: 'alimi@example.com',
        password: bcrypt.hashSync('123456',10)
      

},

{

        name: 'Suraj Alimi',
        email: 'salimi@example.com',
        password: bcrypt.hashSync('123456',10)
       


}


]

export default users