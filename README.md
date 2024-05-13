## Frameworks, libraries, tools

![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/garyboyle/nextjs-nextauth-monk-react) ![Dependencies](https://david-dm.org/garyboyle/nextjs-nextauth-monk-react.svg)

Initially this app was created using the [Create React App](https://github.com/facebook/create-react-app). This allows you to set up a [react](https://reactjs.org/) app with little to no configuration.

[Next.js](https://nextjs.org/) was then added to the project. You do have the option of creating a Next.js app from scratch but I wanted to test out retrofitting Next.js into a react app. Turns out it's fairly straight forward.

I wanted to play aroung with authentication, particulary OAuth and password-free sign in like the magic links that Slack uses so I opted for [NextAuth](https://next-auth.js.org/). To send the magic link I need an smtp server so I went for [Twilio SendGrid](https://sendgrid.com/) though [Amazon Simple Email Service (SES)](https://aws.amazon.com/ses/) is another option. A third option is to use a mail catcher like [MailHog](https://github.com/mailhog/MailHog) and run that locally.

To store authentication tokens NextAuth requires a database I opted for [MongoDB](https://www.mongodb.com/). And I'm using [Monk](https://github.com/Automattic/monk) to programmatically interact with the database.

And finally this is all deployed on [Heroku](https://dashboard.heroku.com/) using the [Next.js on Heroku buildpack](https://elements.heroku.com/buildpacks/mars/heroku-nextjs).
