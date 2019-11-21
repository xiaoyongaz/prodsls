const { promisify } = require('util')
const awscred = require('awscred')

let initialized = false

const init = async () => {
  if (initialized) {
    return
  }
  
  process.env.TEST_ROOT = "https://slvbdb2mo1.execute-api.us-west-2.amazonaws.com/dev"
  process.env.restaurants_api      = "https://slvbdb2mo1.execute-api.us-west-2.amazonaws.com/dev/restaurants"
  process.env.restaurants_table    = "restaurants-xiaoyong"
  process.env.AWS_REGION           = "us-west-2"
  process.env.cognito_user_pool_id = "us-west-2_EXzdUYKfa"
  process.env.cognito_client_id    = "22o7amg5t5bj03coplgfs00v6n"
  process.env.cognito_server_client_id = "5b6t8ndv5q6c8kdkbcm6ist010" 
  
  const { credentials } = await promisify(awscred.load)()
  
  process.env.AWS_ACCESS_KEY_ID     = credentials.accessKeyId
  process.env.AWS_SECRET_ACCESS_KEY = credentials.secretAccessKey
  process.env.AWS_SESSION_TOKEN = credentials.sessionToken

  console.log('AWS credential loaded')

  initialized = true
}

module.exports = {
  init
}