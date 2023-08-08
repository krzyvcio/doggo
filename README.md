## DOGGO
my side project



## Installation



```bash
$ npm install
```

Create a `.env` file from the template `.env.template` file.


Generate public and private key pair for jwt authentication:


```
To setup the JWT keys, please add the following values to your .env file:
JWT_PUBLIC_KEY_BASE64="(long base64 content)"
JWT_PRIVATE_KEY_BASE64="(long base64 content)"
```

Have to enable on Postgres database PostGIS extension

```bash
$ psql -U postgres -d doggo_local -c "CREATE EXTENSION postgis;"
```


### Local


Commands:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migrations

```bash
# generate migration (replace CreateUsers with name of the migration)
$ npm run migration:generate -- -n CreateUsers

# run migration
$ npm run migration:run

# revert migration
$ npm run migration:re
vert
```



```
    [
      "migration:create": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli migration:create ./migrations/%npm_config_name%"
    ] 
```
