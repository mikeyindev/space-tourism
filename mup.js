module.exports = {
  servers: {
    one: {
      host: '45.55.92.224',
      username: 'root',
      //pem: '~/.ssh/id_rsa'
      //password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'space-tourism',
    path: '.',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true
    },
    env: {
      ROOT_URL: 'http://45.55.92.224',
      MONGO_URL: 'mongodb://localhost:27017/space-tourism'
    },

    // The node inside the default docker image is out-of-date. In case
    // updating npm to the latest version on the server
    // doesn't work,uncomment 'dockerImage' below.
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  }

  // mongo: {
  //   oplog: true,
  //   port: 27017,
  //   servers: {
  //     one: {},
  //   },
  // },
};