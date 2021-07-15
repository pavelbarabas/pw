var push = require('web-push')

let vapidKeys = {
    publicKey: 'BJUTXQqHo2ivfaxl7tMj2eLYoDeJlWIRupL2oQq7ansjXpcHSO6BN8-3WD2uYforBehmElNJnt5xqOT8cxGUnhs',
    privateKey: 'yfrMlj_9aPM4hVEGWYnFEAWJr87jfFjdd7NLMkiIv8E'
  }

  push.setVapidDetails('mailto:pavel.barabas@cometsystem.cz', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {};
  push.sendNotification(sub, 'test message')