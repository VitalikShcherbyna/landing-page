# KanapkaMan

## IDE setup

- [vuejs-extension-pack](https://github.com/mubaidr/vuejs-extension-pack)
- eslin - additionaly check your id configuration https://eslint.vuejs.org/user-guide/#editor-integrations
- prettier

## Project setup

Pls using npm (don not using yarn)

```
npm run install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Using environments

Branches:

- `master` - with last development version of the app with is released to staging environment
- `production` - with last production version of the app with is released to production environment

Making changes in the code:

- checkout `master`
- checkout on nwe branch based on `master`
- add changes
- commit changes
- prepare merge request in gitlab
- check by other developers
- merge to `master`
- Git lab continuous delivery tools should build and deploy this changes to the staging environment

Release a new version of the app:

- prepare merge request to `production` branch
- check by other developers
- merge to `production`
- Git lab continuous delivery tools should build and deploy this changes to the production environment

### Using of the firebase

### Login to firebase

https://firebase.google.com/docs/hosting/quickstart

### Checkout firebase environments

Sets environment to the default alias

```
firebase use default
```

Sets environment to the staging alias

```
firebase use staging
```

### Deploy to firebase hosting app

Build app

npm run build

Deploy to production

```
firebase deploy
```

Deploy to staging alias

```
firebase deploy -P staging
```

Add flag `--only hosting` to deploy only hosting data
