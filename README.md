# Sanity Jest Example

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

This is an example Sanity Studio workspace with unit testing for a custom preview component.

### Installation and use

Clone this repository:

```
git clone git@github.com:nkgentile/sanity-jest-example.git
```

Install npm packages:

```
yarn
```

Copy or rename the example environment file (`.env.example`) to `.env.development`, and enter your project's configuration:

```
SANITY_STUDIO_PROJECT_NAME=<your project name>
SANITY_STUDIO_API_PROJECT_ID=<your project id>
SANITY_STUDIO_API_DATASET=<your dataset>
```

Start working:

```
yarn start
```

... Make some changes.

To run the test suite:

```
yarn test
```

or run the suite in watch mode:

```
yarn test --watch
```