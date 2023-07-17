# Fresh Sign Up

Connie Scoullis's submission for Deno's frontend interview exercise.

For the frontend interview exercise, I decided to try my hands at making the form as a Fresh project. I was really enjoying playing around with Fresh prior to making it to the exercise, and I figured this would be a good opportunity to keep doing that.

This form contains the two required fields, username and password, with it's respective criteria for validation. When the user has provided a username/password that fits the criteria, once they submit the form, they are redirected to a page that tells them that their submission is successful. In the event that the submission has not been successful, the user should be redirected to an error page that will tell them they they can go back and try to fill the form again.

In addition to the project requirements, I have also implemented the "show password" and password strength feature. In terms of design and responsiveness, I kept it pretty simple in terms of aesthetics. I had approached this project mobile-first; because I kept it simple there was no need to put any media queries to accommodate for any specific browser/device width.

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Once Deno has been installed and the project has been cloned, cd into the Fresh project directory and then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary. The project is live at http://localhost:8000/
