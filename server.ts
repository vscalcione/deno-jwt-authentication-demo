import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { login, auth, guest } from './routes.ts';
import authMiddleware from './authMiddleware.ts';

const app = new Application();
const router = new Router();
const port = 8080;

router
    .post('/login', login)
    .get('/guest', guest)
    .get('/auth', authMiddleware, auth);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: port });
console.log(`Server started at http://localhost:${port}`);