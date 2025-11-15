import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const localToken = localStorage.getItem(environment.AUTH_TOKEN_KEY) || localStorage.getItem('access_token');
  const bearer = localToken || environment.TMDB.READ_ACCESS_TOKEN;

  const authReq = bearer
    ? req.clone({ setHeaders: { Authorization: `Bearer ${bearer}` } })
    : req;
  return next(authReq);
};