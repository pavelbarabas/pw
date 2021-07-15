var push = require('web-push');

let vapidKeys = {
    publicKey: 'BJUTXQqHo2ivfaxl7tMj2eLYoDeJlWIRupL2oQq7ansjXpcHSO6BN8-3WD2uYforBehmElNJnt5xqOT8cxGUnhs',
    privateKey: 'yfrMlj_9aPM4hVEGWYnFEAWJr87jfFjdd7NLMkiIv8E'
  };

  push.setVapidDetails('mailto:pavel.barabas@cometsystem.cz', vapidKeys.publicKey, vapidKeys.privateKey);

  let sub = {
      endpoint:'https://fcm.googleapis.com/fcm/send/eSmcIefzcgo:APA91bGOGnPq4dDCXD5mb5nzKCEWzoZg4qvTJz0KTepZWMHjgJMIT2pJHd4bNizITQPJG68pKfuwmClniisxoZ6F6Q_QbXAUMbnJooJWKewhztOVIwNY5uukgzJ7PAVdV4n2ER0dc-VP',
      expirationTime:null,
      keys:{
          p256dh:'BFRNzhB9BOboirY-ikpOJAqlr4ri3eaig9GsLld-PO5J8c3SohZDZr21wwR-kLDD-21CBsRH-Qhug2jqf_Y8zi8',
          auth:'eZAVc6FAHUB7cFfJbe7qWg'
        }
    };


  push.sendNotification(sub, 'test message');