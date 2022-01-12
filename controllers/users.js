const getAllUsers = knex => async (req, res) => {
    const users = await knex('users').select()
    res.send(users)
}

const createUser = knex => async (req, res)=>{
    console.log(req.body)
    const user = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    }
  
    const [emailAlreadyExists] = await knex('users').select(
      knex.raw('count(*) as total')
    ).where('email', user.email)
  
    // console.log(emailAlreadyExists)
    
    if(emailAlreadyExists.total>0){
      res.send({
        error:true,
        message:'Email already exists!'
      })
    }else{
      await knex.insert(user).into('users')
      
      res.send(req.body)
    }
  }

module.exports = {
    getAllUsers,
    createUser
}