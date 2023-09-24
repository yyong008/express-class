# express-class

> use express and class org your express app.

## stacks

- nodejs (base: v18.3.0)
- express class style(base: 4.18.2)

## deps

| packages | versions | descrption         |
| -------- | -------- | ------------------ |
| dotenv   | 16.3.1   | read env variables |

## start

```sh
pnpm run dev # start dev
pnpm run format # prettier format
pnpm run lint # eslint
```

## docker-mongodb cluster

```sh
docker-compose -f ./docker/docker-compose.yaml up -d

# docker mongodb
mongosh

# init mongodb cluster
rs.initiate({
  _id: 'rs0',
  members: [
    { _id: 0, host: 'mongodb-primary:27017' },
    { _id: 1, host: 'mongodb-secondary:27017' },
    { _id: 2, host: 'mongodb-arbiter:27017' },
  ],
});
```
