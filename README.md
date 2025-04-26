Features

A Form with three fields:

    Full Name

    Email

    Feedback

Admin Page to display all submitted feedbacks.( To navigate this admin page you can click the admin button the form or you can type /admin in url)

MongoDB connected using Mongoose.

Two separate API Routes:

    One for handling POST (submitting feedback).

    One for handling GET (retrieving all feedbacks).

In the Admin Page, there are Edit and Delete buttons placed for future implementation.
(Currently, these buttons are not functional — they are added for reference.)


How It Works

User fills out the form with their full name, email, and feedback.

On submission, the feedback data is sent to the server (POST /api/feedbackpost).

Admin Page fetches the feedbacks from the server (GET /api/feedback) and displays them.

All feedbacks are stored securely in MongoDB.




I completed this assignment with all requirements mentioned in the task file. And I deployed the project in the Netlify too.
I provide the git-hub link and Netlify link below.
Netlify Link : https://happyfeedback.netlify.app/
Git-hub Link : https://github.com/callasumamahesh/feedBack-Form