This is a showcase project.

## Frameworks, libraries, tools

Initially this app was created using the [Create React App](https://github.com/facebook/create-react-app). This allows you to creeate a [react](https://reactjs.org/) app with little to no configuration.

[Next.js](https://nextjs.org/) was then added to the project. You do have the option of creating a Next.js app orignally. Turns out it's fairly straight forward to retrofit a react app with Next.js.

I wanted to play aroung with authentication, particulary OAuth and password-free sign in like the magic links that Slack uses so I opted for [NextAuth](https://next-auth.js.org/). To send the magic link I need an smtp server so I opted for [Twilio SendGrid](https://sendgrid.com/) though [Amazon Simple Email Service (SES)](https://aws.amazon.com/ses/) is another option.

To store authentication tokens NextAuth requires a database I opted for [MongoDB](https://www.mongodb.com/). And I'm using [Monk](https://github.com/Automattic/monk) to programmatically interact with the database.

And finally this is all deployed on [Heroku](https://dashboard.heroku.com/) using the [Next.js on Heroku buildpack](https://elements.heroku.com/buildpacks/mars/heroku-nextjs)
