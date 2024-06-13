const Register = {
    async render() {
      return `
    <div class="login-container">
    <div class="signup-form" id="signup-form">
      <h2>Sign Up</h2>
      <form id="signUpForm">
        <div class="form-group">
          <label for="new-name">Name</label>
          <input type="text" id="new-name" name="new-name" required />
        </div>
        <div class="form-group">
          <label for="new-email">Email</label>
          <input type="email" id="new-email" name="new-email" required />
        </div>
        <div class="form-group">
          <label for="new-password">Password</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            required
          />
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />
        </div>
        <button type="submit" class="signup-btn" id="signUpButton">
          Sign Up
        </button>
      </form>
    </div>
    </div>
          `;
    },
  
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
  
  export default Register;
  