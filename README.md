# nginx-express-demo

This is a demo using NodeJS Express with Nginx load balancing.

## Run with Docker Compose

```Bash
yarn build
docker compose up -d

```

&nbsp;

### Example

After starting the demo, you can go to `localhost:8080` and see the below response from different node:

Node 1:

Content-Type: application/json

```JSON
{"message":"Hello, World!","instance":"node_1"}

```

&nbsp;

Node 2:

Content-Type: application/json

```JSON
{"message":"Hello, World!","instance":"node_2"}

```

&nbsp;

Node 3:

Content-Type: application/json

```JSON
{"message":"Hello, World!","instance":"node_3"}

```

&nbsp;

## Run without Docker and Nginx

```Bash
npm run build
npm run start:prod

```

### Example

Single Node:

Content-Type: application/json

```JSON
{"message":"Hello, World!","instance":"test"}

```

&nbsp;
