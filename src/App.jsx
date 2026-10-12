import { useState } from "react";
import {
  Routes,
  Route,
  NavLink,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">N</span>
        Nova<span className="brand-light">Space</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>

      <div className="nav-actions">
        <Link to="/login" className="login-link">Log in</Link>
        <Link to="/signup" className="btn btn-small">Get Started ↗</Link>
      </div>
    </header>
  );
}

function Home() {
  return (
    <main className="hero">
      <div className="hero-copy">
        <span className="eyebrow">
          ✦ YOUR SPACE. YOUR POSSIBILITIES.
        </span>

        <h1>
          Everything you need.
          <br />
          <span>One space.</span>
        </h1>

        <p>
          A simpler way to manage your workspace, organize your
          day, and keep everything moving in the right direction.
        </p>

        <div className="hero-actions">
          <Link to="/dashboard" className="btn">
            Explore Dashboard →
          </Link>
          <Link to="/signup" className="btn btn-outline">
            Create Account
          </Link>
        </div>

        <div className="hero-note">
          <span className="status-dot" />
          A fresh start for your everyday workflow
        </div>
      </div>

      <div className="preview">
        <div className="preview-top">
          <div>
            <span className="muted">WORKSPACE / OVERVIEW</span>
            <h3>Your overview</h3>
          </div>
          <span className="avatar">N</span>
        </div>

        <div className="stat-grid">
          <div className="stat-card">
            <span>Projects</span>
            <strong>12</strong>
            <small>Across your workspace</small>
          </div>
          <div className="stat-card">
            <span>Tasks completed</span>
            <strong>84%</strong>
            <small>Keep up the momentum</small>
          </div>
        </div>

        <div className="activity-card">
          <div className="activity-heading">
            <strong>Recent activity</strong>
            <span className="muted">Today</span>
          </div>
          <div className="activity-row">
            <span className="activity-icon purple">✓</span>
            <div><strong>Design review</strong><small>Completed successfully</small></div>
            <span className="check">Done</span>
          </div>
          <div className="activity-row">
            <span className="activity-icon green">↗</span>
            <div><strong>Workspace setup</strong><small>Your next milestone</small></div>
            <span className="check pending">Next</span>
          </div>
        </div>
      </div>
    </main>
  );
}

function Dashboard() {
  const cards = [
    { icon: "◫", title: "My Projects", value: "12", detail: "Your active projects", color: "purple" },
    { icon: "✓", title: "Completed Tasks", value: "84%", detail: "Your progress overview", color: "green" },
    { icon: "◷", title: "Pending Tasks", value: "08", detail: "Things to work on", color: "orange" },
  ];

  return (
    <main className="page-container">
      <div className="page-heading">
        <div>
          <span className="eyebrow">YOUR WORKSPACE</span>
          <h1>Dashboard</h1>
          <p>Everything important, all in one place.</p>
        </div>
        <Link to="/signup" className="btn">Get Started ↗</Link>
      </div>

      <div className="dashboard-grid">
        {cards.map((card) => (
          <article className="dashboard-card" key={card.title}>
            <span className={`activity-icon ${card.color}`}>{card.icon}</span>
            <p>{card.title}</p>
            <h2>{card.value}</h2>
            <small>{card.detail}</small>
          </article>
        ))}
      </div>

      <section className="welcome-card">
        <span className="eyebrow">QUICK ACCESS</span>
        <h2>Your next step starts here.</h2>
        <p>Explore the application or create an account to get started.</p>
        <div className="hero-actions">
          <Link to="/" className="btn btn-outline">Visit Home</Link>
          <Link to="/signup" className="btn">Create Account →</Link>
        </div>
      </section>
    </main>
  );
}

function AuthPage({ mode }) {
  const isSignup = mode === "signup";
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setMessage("Please enter your email and password.");
      return;
    }

    if (isSignup && !name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    setMessage(
      isSignup
        ? "Demo signup successful! No account was saved."
        : "Demo login successful! No authentication was performed."
    );
  }

  return (
    <main className="auth-wrapper">
      <section className="auth-card">
        <Link to="/" className="brand auth-brand">
          <span className="brand-icon">N</span>
          Nova<span className="brand-light">Space</span>
        </Link>

        <span className="eyebrow">
          {isSignup ? "JOIN THE WORKSPACE" : "WELCOME BACK"}
        </span>
        <h1>{isSignup ? "Create your account" : "Sign in to NovaSpace"}</h1>
        <p className="auth-description">
          {isSignup
            ? "Get started with your own workspace."
            : "Enter your details to continue."}
        </p>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label>
              Full name
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
          )}

          <label>
            Email address
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>

          <button type="submit" className="btn submit-btn">
            {isSignup ? "Create Account →" : "Sign In →"}
          </button>

          {message && <p className="form-message" role="status">{message}</p>}
        </form>

        <p className="auth-switch">
          {isSignup ? "Already have an account?" : "New to NovaSpace?"}{" "}
          <Link to={isSignup ? "/login" : "/signup"}>
            {isSignup ? "Log in" : "Create an account"}
          </Link>
        </p>

        <button className="text-button" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <main className="not-found">
      <span className="eyebrow">404 / PAGE NOT FOUND</span>
      <h1>Looks like you're lost.</h1>
      <p>The page you requested doesn't exist.</p>
      <Link to="/" className="btn">Back to Home →</Link>
    </main>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/signup" element={<AuthPage mode="signup" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="footer">
        <Link to="/" className="footer-brand">NovaSpace</Link>
        <span>Built for a more organized day.</span>
        <span>© 2026 NovaSpace</span>
      </footer>
    </div>
  );
}