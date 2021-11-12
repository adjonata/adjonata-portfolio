interface Auth {
  _id?: string
  email: string
  password: string
}
interface AuthLogin {
  authorization: string
  userInfo: {
    id: string
    email: string
  }
}

export { Auth, AuthLogin }
