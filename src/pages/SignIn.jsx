import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign in functionality coming soon!");
  };

  const handleGoogleSignIn = () => {
    alert("Google Sign-In clicked! Implement real OAuth later.");
  };

  return (
    <div className="page">
      <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit} className="form" style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: "8px" }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: "8px" }}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "10px", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "4px" }}>
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div style={{ textAlign: "center", margin: "16px 0" }}>OR</div>

        {/* Google Sign-In */}
        <button onClick={handleGoogleSignIn} style={{ padding: "10px", backgroundColor: "#DB4437", color: "#fff", border: "none", borderRadius: "4px", width: "100%" }}>
          Sign In with Google
        </button>

        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
}
