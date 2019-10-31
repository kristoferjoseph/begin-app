// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')

exports.handler = async function http(req) {
  console.log(req)
  return {
    status: 200,
    type: 'application/json; charset=utf8',
    body: JSON.stringify({ok: true})
  }
}
