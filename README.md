#Censored

Easy and simple way to censore Objects

##Install

     npm install censored

##From

    var censored = require('censored');

    censore({
      username: 'narciso@domain.com',
      password: 'taquitos',
      credentials: {
        google: {oauth_token: "yo.lookAToken", refresh_token: "foo"},
        facebook: {oauth_token: "yo.lookAnotherToken", refresh_token: "bar"}
      }
    });

## To

    {
      username: '*************n.com',
      password: '***uitos',
      credentials: {
          google: { oauth_token: '********Token', refresh_token: '**o' },
          facebook: { oauth_token: '**************Token', refresh_token: '**r' }
      }
    }


##Change the Character

By default is `*`

    censore.set('char', '_');

    {
      username: '_____________n.com',
      password: '___uitos',
      credentials: {
          google: { oauth_token: '________Token', refresh_token: '__o' },
          facebook: { oauth_token: '______________Token', refresh_token: '__r' }
      }
    }

##How many chars you want to see ?

     censore.set('showLast', '3');

     {
      username: '***************com',
      password: '*****tos',
      credentials: {
          google: { oauth_token: '**********ken', refresh_token: '**o' },
          facebook: { oauth_token: '****************ken', refresh_token: '**r' }
      }
     }

##Set a handler for an attribute

     censore.add('username', function(value){
       return 'awesome !';
     });

     {
      username: 'awesome !',
      password: '***uitos',
      credentials: {
          google: { oauth_token: '********Token', refresh_token: '**o' },
          facebook: { oauth_token: '**************Token', refresh_token: '**r' }
      }
     }
