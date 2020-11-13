# Security rules test site
This is a simple site hosted on heroku that implements strict CSP and security rules to see how what is the actual required config for new tracing scripts.

## Security settings
The security settings for this site should be as strict as possible. The master branch should have A+ on https://securityheaders.com/
Any settings that lower this score must be approved by [Jonas Syrstad](mailto:jonas.syrstad@dnvgl.com).

## Test site
The test site is hosted here: https://security-rules-test-site.herokuapp.com/

## Workflow to test a new service
### Step 1 - requirements
The person requesting the script must provide the following: 
1) The correctly configured script to be tested. It's important the scripts runs exactly as in production.
2) A detailed description of how the script is to be used. This is so that we can try the exact use case and whitelist the needed features.

### Step 2 - test
The site is currently in my personal account on Heroku (since it's free) - contact me at sigurd.wahl@dnvgl.com if you need access or help. This is how you test your changes:
1) Checkout a new branch from the master branch. Example: git checkout -b google-analytics
2) Implement the script locally and see that it runs without warnings. Remember to test that the use cases from the requirements runs without errors.
3) When you're happy with your local changes, push you branch to the Github repo
4) Go here: https://dashboard.heroku.com/apps/security-rules-test-site and click "Deploy" tab. (If you have no access to the heroku app, you can create your own heroku account, create a new app and deploy to that. Personal account is free.)
5) Go to "Manual deploy" section on the app in heroku.
6) Select your branch and hit the "Deploy" button
7) After successful deploy, you branch should be available on this URL: https://security-rules-test-site.herokuapp.com/

*Please* keep the branch around forever as it provides documentation of the test implementation.

### Step 3 - implementation
After completing Step 2, you should have a complete set of security headers needed to run the service. If there are security policies that you are uncertain if Veracity allow, contact [Jonas Syrstad](mailto:jonas.syrstad@dnvgl.com).


## Development 
Run `npm run dev` to enable automatic restart of server when files change.

## Production
Run `npm run build` to build frontend, and then run `npm start` to start production server.
