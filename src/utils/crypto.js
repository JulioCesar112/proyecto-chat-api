const bcrypt = require("bcrypt")

const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}

const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

// console.log(hashPassword("root"))

// console.log(comparePassword("root", "$2b$10$ohMqCbtYqnOIgPQPkEr4wuXvn0F.U6hyy2o1XXPms3hc4TWjt9j.K"))

module.exports = {
    hashPassword,
    comparePassword
}