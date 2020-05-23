import { Router } from 'express';
import AuthenticateUserSerive from '../services/AuthenticateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  const authenticateUser = new AuthenticateUserSerive();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;
  return response.json({ user, token });
});

export default usersRouter;
