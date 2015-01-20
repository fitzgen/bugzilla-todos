# Bugzilla Todos

Bugzilla Todos is a quick way to see your outstanding Bugzilla requests.

You can view yours at:

[https://fitzgen.github.com/bugzilla-todos](https://fitzgen.github.com/bugzilla-todos)

You can also add a `email=name@mail.com` to the url to get the dashboard for a particular user. It's also hosted at [http://bugmotodo.org/](http://bugmotodo.org/) for an easier url.

## details

For the given username, Bugzilla Todos will display:

* The flag requests where the user is the flag requestee
* The patches by the user that have been reviewed, but not yet checked in (bug isn't marked fixed)
* The patches by the user that are still awaiting review
* The bugs assigned to the user

## code

Bugzilla Todos uses [bz.js](https://github.com/canuckistani/bz.js) to make calls to the Bugzilla REST API. The Bugzilla queries used in the app are located in `app/user.js`.

The UI uses the [React](https://facebook.github.io/react/) library. Build the react JSX files with:

```
jsx app/ build/ --source-map-inline --watch &
```
