# Sending emails with Netlify Cloud functions and nodemailer

## How to run this app
To test this example localy you need to have netlify cli installed. If you don't have Netlify CLI installed globally on your PC then you can do it with this command:
```
npm install netlify-cli -g
```

Second thing to do is creating email account on GMAIL.
After creating account make sure that you account will allow to work with less secure apps (https://www.google.com/settings/security/lesssecureapps - just switch this option here)
Now just create .env file in root of the project and create two variables in there:
```
REACT_SMTP_EMAIL=[your gmail accoutn email]
REACT_EMAIL_PASSWORD=[password to your email account]
```

If you have done everything from above you can run and test the app using command in your shell.
```
netlify dev
```

## 
END!
