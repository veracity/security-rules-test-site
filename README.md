# Security rules test site
This is a simple site hosted on heroku that implements strict CSP and security rules to see how what is the actual required config for new tracing scripts.

## CSP
CSP configuration should be as strict as possible, that is "self" on all properties. The site should have the best score possible on https://securityheaders.com/

## Test site
The test site is hosted here: https://security-rules-test-site.herokuapp.com/

## Workflow
The site is currently on my personal account (since it's free) - contact me at sigurd.wahl@dnvgl.com if you need help. Steps to test you stuff:
1) Checkout a new branch from the master branch
2) Make you changes and push the branch to remove
3) Go here: https://dashboard.heroku.com/apps/security-rules-test-site and click "Deploy" tab
4) Go to "Manual deploy" section
5) Select your branch and hit the "Deploy" button