const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./routes/pusher');

//this has to link to the qraphql folder
const { typeDefs, resolvers } = require('./routes/graphql');
const db = require('./config/connect');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../pusher-mud-frontend/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../pusher-mud-frontend/public/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);


  // mud-backend package.json just in case this is the issue
  // {
  //   "name": "pusher-mud-backend",
  //   "version": "0.0.0",
  //   "private": true,
  //   "scripts": {
  //     "start": "node ./bin/www",
  //     "seed": "node ./config/seed.js"
  //   },
  //   "dependencies": {
  //     "apollo-server-express": "^1.2.0",
  //     "body-parser": "~1.18.2",
  //     "cookie-parser": "~1.4.3",
  //     "cors": "^2.8.4",
  //     "debug": "~2.6.9",
  //     "express": "~4.15.5",
  //     "graphql": "^0.11.7",
  //     "graphql-tools": "^2.7.2",
  //     "jade": "~1.11.0",
  //     "mongoose": "^4.13.21",
  //     "morgan": "~1.9.0",
  //     "pusher": "^1.5.1",
  //     "serve-favicon": "~2.4.5"
  //   }
  // }
  