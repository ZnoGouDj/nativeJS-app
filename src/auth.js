export function getAuthForm() {
  return `
  <form class="mui-form" id="auth-form">
  <div class="mui-textfield mui-textfield--float-label">
    <input type="email" id="email" required>
    <label for="email">Email:</label>
  </div>
  <div class="mui-textfield mui-textfield--float-label">
  <input type="password" id="password" required>
  <label for="password">Password:</label>
</div>
  <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">Login</button>
</form>
  `;
}

export function authWithEmailAndPassword(email, password) {
  const apiKey = 'AIzaSyC5PqkJNkR_A3tQ4yIyuJv6IH5Ju5yT6Fs';
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => data.idToken);
}
