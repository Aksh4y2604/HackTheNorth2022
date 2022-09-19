## Inspiration
Gaining users for a new product is always a challenge for a new company.
After completing our first co-op terms at start-up companies, we experienced the limitations of product testing first-hand and knew that there must be a better solution. QA teams at our companies would often face the roadblock of ‘tunnel vision’, and get one-dimensional in terms of finding bugs/going through the SDLC, instead of focussing on what really matters to the consumer: User Experience. 

Upon discussing these issues, individually and collectively the members of our team thought of Testify as a platform that lets you have the cake and eat it. 
Testify is a one-stop website for companies with a pre-launch software product. Say you are a startup, and you have developed a website that, hopefully for you, is free of bugs and crashes. You do not have any users on your product and this makes you unsure of how your product will be received in the market. This is where Testify comes in.

## What it does

Testify is a website that gives companies access to user experience feedback right from the nectar, which is their target audience, the consumers. A company can register with their product, a description about their service, along with details about their target audience such as age group and industry. 
As a user, upon logging in you are shown a list of companies that are handpicked for you by our matching algorithm; for whom you can be a tester. After using the software product, the user fills out a review form where you can provide a rating, feedback and/or screenshots of any bugs or design faults that stand out to you.

Here comes the neat part. We use the reviews from the users and run our NLP AI model over it to provide useful insights to the company about their product. Testify categorizes the feedback and creates a dashboard for the company to view results through their testing period. This dashboard includes average ratings as well identifies what aspect of the software product creates most issues in user experience.  Testify charges the company a fee for using their platform; while the users are given compensation for their feedback. 

## How we built it

Once we had our idea the first step was looking into how all of the technologies worked to ensure that it would all work together. After thinking of a general plan for how we would build out the project we split up into frontend and backend teams and got to work. We settled on using Next.js for the frontend due to our previous experience with it and the optimizations over React.js. We used Tailwind to style various components of our webpages.
The backend is comprised of a Serverless CockroachDB database which was linked to a Express.js engine. We decided to use CockroachDB instead of other database services because of it is a distributed database system that is easily integrable with an API.
As a bonus we wanted to use co:here to provide useful insights to the company while being able to make the feedback experience short and seamless for the user. Our NLP model automatically sorts the feedback into categories that can be worked upon by the company.

## Challenges we ran into

We pushed ourselves to work with multiple technologies such as co:here and CockroachDB that none of us had ever used before which led to some challenges along the way. Our hackathon journey on Saturday consisted of a lot of research to understand these tools before we could even begin working on our project. Once we starting coding we initially ran into an issue with connecting to the CockroachDB SQL client so we had to search through the docs for a while to find a solution. Later when working with co:here we were having issues as we didn’t have any data to use for prompts. This took up some time as we had to think of unique phrases to try and cover all messages users would input.

## Accomplishments that we're proud of

Utilized NLP for the first time with co:here to automatically generate rich, organized feedback from user’s comments
Structured a complex serverless database with multiple tables using CockroachDB after having no backend experience
Designed and developed several accessible and responsive webpages using Tailwind in a short period of time

## What we learned

How to use co:here to leverage NLP with no prior experience
Serverless databases with CockroachDB and how to create a backend from scratch

## What's next for Testify

We have some features and improvements which couldn’t make it into the final version of Testify due to our limited time. 

We will look to add functionality to embed software products like apps//websites into our platform; so users will never have to leave Testify to complete their feedback.

We have looked into adding semantic detection to the feedback received from the users to ensure that we filter out spam as well as ensure that only deserving reviewers receive their cashouts. We will continue to train our AI model by adding more test cases to ensure the same.
We plan to add a Tester Rank feature, which increases with every valid review and number of products reviewed. A higher rank makes you more trustable as a reviewer and will lead to higher payouts from Testify.
We will look ahead to incorporating payment methods into our website; which allows users to get an instant payout upon validation of their review.
