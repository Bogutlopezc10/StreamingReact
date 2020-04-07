export const GetToken = (state) => state.auth.token;
export const GetDecodedToken = (state) => state.auth.decodedToken;

export const IsAdmin = (state) => {
  const decoded = GetDecodedToken(state);
  if (!decoded || !decoded.permissions) {
    return false;
  }
  return decoded.permissions.filter(p => p === 'admin:api').length !== 0;
}

export const GetCurrentUser = (state) => {
  const userAuth = state.auth.currentUser;

  return {
    username: userAuth.email,
    name: userAuth.nickname,
    photo: userAuth.picture
  }
}

export const GetEmailCurrentUser = (state) => state.auth.currentUser.email;


