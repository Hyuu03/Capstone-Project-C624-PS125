const Login = {
  async render() {
    return `
    <div class="login-container">
    <div class="login-form" id="login-form">
      <h2>Sign In</h2>
      <form id="signInForm">
        <div class="form-group">
          <label for="email">Email or Phone Number</label>
          <input type="text" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div class="form-group">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label for="remember-me">Remember Me</label>
        </div>
        <button type="submit" class="login-btn" id="signInButton">
          Sign In
        </button>
      </form>
      <p>Don't have an account? <a href="#/register" id="signUpLink">Sign Up</a></p>
      <p>Need help?</p>
    </div>
    </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Login;
