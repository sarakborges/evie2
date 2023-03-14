import { LoginPage, RegisterPage } from '@/Components/Pages'

export const ROUTES = new Map()

ROUTES.set('LOGIN', {
  PATH: '/login',
  TITLE: ' - Login',
  ELEMENT: <LoginPage />
})

ROUTES.set('REGISTER', {
  PATH: '/register',
  TITLE: ' - Register',
  ELEMENT: <RegisterPage />
})
