var profile = {
    id: 1,
    credentials: {
        google_apps: [
            {
                domain: 'some.domain',
                login_id: 123,
                refresh_token: '1/xEoDL4iW3cxlI7yDbSRFYNG01kVKM2C-259HOF2aQbI',
                oauth_token: 'ya29.AHES67zeEn-RDg9CA5gGKMLKuG4uVB7W4O4WjNr-NBfY6Dtad4vbIZ',
                saml_username: 'narciso@domain.com'
            }
        ]
    }
};


var censor = require('../');
var util   = require('util');

var log = function(obj){
  console.log(util.inspect(obj, { showHidden: true, depth: null }));
};

// We can grab censored object at any time like: var obj = censor(profile);

log(censor(profile));

/**
 *  { id: '*',
 *  credentials:
 *   { google_apps:
 *      [ { domain: '******omain',
 *          login_id: '***',
 *          refresh_token: '********************2aQbI',
 *          oauth_token: '********************4vbIZ',
 *          saml_username: '*************n.com' },
 *        [length]: 1 ] } }
 */

censor.set('char', '+');

log(censor(profile));

/**
 *  { id: '+',
 *  credentials:
 *   { google_apps:
 *      [ { domain: '++++++omain',
 *          login_id: '+++',
 *          refresh_token: '++++++++++++++++++++2aQbI',
 *          oauth_token: '++++++++++++++++++++4vbIZ',
 *          saml_username: '+++++++++++++n.com' },
 *        [length]: 1 ] } }
 */

censor.set('showLast', '10');

log(censor(profile));

/**
 *  { id: '+',
 *  credentials:
 *   { google_apps:
 *      [ { domain: '+ome.domain',
 *          login_id: '+++',
 *          refresh_token: '+++++++++++++++59HOF2aQbI',
 *          oauth_token: '+++++++++++++++6Dtad4vbIZ',
 *          saml_username: '++++++++domain.com' },
 *        [length]: 1 ] } }
 */


censor.add('oauth_token', function(token){
  return 'DA TOKEN IS: ' + token;
});

log(censor(profile));

/**
 *  { id: '+',
 *  credentials:
 *   { google_apps:
 *      [ { domain: '+ome.domain',
 *          login_id: '+++',
 *          refresh_token: '+++++++++++++++59HOF2aQbI',
 *          oauth_token: 'DA TOKEN IS: B7W4O4WjNr-NBfY6Dtad4vbIZ',
 *          saml_username: '++++++++domain.com' },
 *        [length]: 1 ] } }
 */
