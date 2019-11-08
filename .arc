@app
ship-dqp

@static

@http
get /
get /posts
post /posts/:post
delete /posts/:post
put /posts/:post
patch /posts/:post
get /account/:accountID
get /another
get /thenew/:thing
get /another/one

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
