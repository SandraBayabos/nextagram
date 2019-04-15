import React from 'react';

function signOut() {
  localStorage.removeItem(auth_token)
}

export default signOut;