# Mindful
This app can be viewed live @ https://mindful-murex.vercel.app/

## Be Intentional About Your Mental Health!
### Learn About Yourself and Your Daily Habits
### Improve Your Mental Health and Create New Habits That Help You Feel Your Best
#### Record Daily Activities & Medicine
Log your food, sleep, medicine and other common factors known to effect your mood.
#### Rate Yourself 
At the end of each day, rate your energy level, happiness, & focus to calculate your mood score for the day.
#### Track Your Mental Health 
As you add new entries each day, your days with the highest mood score will be displayed so you can identify which habits impact your mood the most.
#### Journaling
Journaling has been shown to have a positive effect on overall mental health. Use the journal section to record your thoughts and just vent.

> #### Demo Account
>> Username: Test1 <br>
>> Password: 12345

***

![Dashboard](/screenshots/Dashboard.png)
![Home](/screenshots/Home.png)
![Journal](/screenshots/Journal.png)

***

## API Documentation:
### GET /api/activity 
Retrieves all of the user's daily activity logs. Returns a response like the following:
***
        "id": 16,
        "date": "2020-12-13T16:59:21.141Z",
        "medicine": "tylenol",
        "hours_slept": 3
        "food": "waffles",
        "sugar_intake": 3,
        "rate_focus": 5,
        "rate_happiness": 2,
        "rate_energy": 4,
        "user_id": 3
 ***  
### POST /api/activity 
 In order to post successfully, a user must be logged in. This POST method will retrieve your user information and authentication status before attempting to post. 
 See the example below:
*** 
[

      method: "POST",
      headers: { "content-type": "application/json", token: `${token}` },
      body: { 
        "medicine": "tylenol",
        "hours_slept": 3
        "food": "waffles",
        "sugar_intake": 3,
        "rate_focus": 5,
        "rate_happiness": 2,
        "rate_energy": 4,
       }

]
***
***
## Technology info:
### Backend: 
<ul>
<li>Node for interacting with the file system</li> 
<li>Express for handling API requests</li> 
<li>Knex.js for interfacing with the PostgreSQL database</li> 
<li>Postgrator for database migration</li> 
<li>Mocha, Chai, Supertest for testing</li> 
<li>JSON Web Token and bcryptjs for user authentication / authorization</li> 
</ul>

### Front End:
<ul>
<li>React</li> 
<li>HTML5</li> 
<li>CSS3</li> 
<li>Jest/Enzyme</li> 
</ul>
