import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventDetail.css';
import logo from '/images/google-gemini-logo1.png';
import speakerPhoto from '/images/img2.png';

const EventDetail = () => {
  const navigate = useNavigate();

  return (
    <section className="event-detail">
      <div className="detail-shell">
        <div className="detail-hero">
          <button className="pill back-link" onClick={() => navigate('/')}>
            ← Back to Events
          </button>
          <div className="hero-header">
            <div className="hero-logo">
              <img src={logo} alt="Gemini logo" />
            </div>
            <div>
              <p className="eyebrow">AI Workshop Series</p>
              <h1>GDG Beginner AI Workshop Series</h1>
              <p className="lede">
              A 2-session beginner-friendly workshop series focused on Generative AI using Google's
Gemini API, Firebase, and Google Cloud Run. Designed for GDG beginners to get hands-on AI
experience.
              </p>
              <div className="pill-row">
                <span className="pill accent-blue">Date: Coming soon</span>
                <span className="pill accent-green">Mode: In-person / Virtual</span>
                <span className="pill accent-yellow">Level: Beginner–Intermediate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-card">
          <div className="speaker-section">
            <div className="speaker-photo-frame">
              <img src={speakerPhoto} alt="Speaker Sofia Martinez" />
            </div>
            <div className="speaker-copy">
              <p className="eyebrow">Featured Speaker</p>
              <h3 className="speaker-name">Sofia Martinez</h3>
              <p className="speaker-role">AI Educator & Developer Advocate</p>
              <p className="body-text">
                Sofia helps teams adopt GenAI responsibly. She has guided startups and student
                groups to design, evaluate, and launch Gemini-powered features across education,
                productivity, and creative tooling.
              </p>
            </div>
          </div>

          <div className="content-section">
            <h4>What you'll explore</h4>
            <ul className="bullet-list">
              <li>Prompt design patterns and guardrails for Gemini</li>
              <li>Multimodal inputs and response grounding</li>
              <li>Integrating Gemini APIs into a React front end</li>
              <li>Evaluation, safety, and deployment tips</li>
            </ul>
          </div>

          <div className="content-grid">
            <div className="content-card">
              <h5 className="card-title">Hands-on build</h5>
              <p className="body-text">
                Pair-program a small demo app that showcases Gemini text + vision, with ready-to-use
                starter templates.
              </p>
            </div>
            <div className="content-card">
              <h5 className="card-title">Office hours</h5>
              <p className="body-text">
                Bring your project ideas—get feedback on feasibility, safety, and API integration
                pathways.
              </p>
            </div>
            <div className="content-card">
              <h5 className="card-title">Next steps</h5>
              <p className="body-text">
                Resources to continue building: codelabs, design guidelines, and deployment checklists
                tuned for Gemini.
              </p>
            </div>
          </div>

          <div className="section-block">
            <h4 className="section-heading">Overview</h4>
            <ul className="bullet-list tight">
              <li>2 sessions — about 3 hours each</li>
              <li>Target: beginners / students / enthusiasts</li>
              <li>Mode: in-person</li>
              <li>Tools: Gemini API, Firebase, Cloud Run, Google AI Studio</li>
            </ul>
          </div>

          <div className="section-block">
            <h4 className="section-heading">Workshop 1: Introduction to Generative AI</h4>
            <ul className="bullet-list">
              <li>Learn to think and talk like an AI engineer — no coding required.</li>
              <li>Code your own chatbot in the browser using Gemini — and deploy it live.</li>
              <li>See how AI web apps go from local → live cloud in minutes.</li>
            </ul>
          </div>

          <div className="section-grid">
            <div className="section-block">
              <h4 className="section-heading">Objective</h4>
              <ul className="bullet-list">
                <li>Understand how prompts shape AI behavior (creativity, tone, precision).</li>
                <li>Integrate Gemini API with JavaScript; deploy via Firebase Hosting.</li>
                <li>Take a simple Gemini Flask/Node.js app and deploy it on Cloud Run.</li>
              </ul>
            </div>

            <div className="section-block">
              <h4 className="section-heading">Requirements</h4>
              <ul className="bullet-list">
                <li>Internet connection; access: https://ai.studio.google.com</li>
                <li>Google account; Firebase CLI installed</li>
                <li>Free Gemini API key from Google AI Studio</li>
                <li>Basic HTML/JS knowledge (optional but helpful)</li>
                <li>Google Cloud account (free credits work), Cloud SDK or Cloud Shell</li>
                <li>Gemini API key ready</li>
              </ul>
            </div>
          </div>

          <div className="section-block">
            <h4 className="section-heading">Outcomes</h4>
            <ul className="bullet-list">
              <li>See how LLMs respond to context and structure.</li>
              <li>Practice prompt patterns: chain-of-thought, role prompting, style tuning.</li>
            </ul>
          </div>

          <div className="section-block">
            <h4 className="section-heading">Agenda (each 3 hours)</h4>
            <ul className="bullet-list">
              <li>Intro to Generative AI + Gemini</li>
              <li>Gemini Playground walkthrough</li>
              <li>Hands-on: prompt coding for summarization, creativity, battles</li>
              <li>Prompt Battles — best creative outputs (fun group activity)</li>
              <li>JSON responses + structured outputs</li>
              <li>Setup Firebase project + hosting</li>
              <li>Hands-on: create chatbot (HTML, CSS, JS) + Gemini API integration</li>
              <li>Deploy via Firebase Hosting</li>
              <li>Intro to Cloud Run and serveless</li>
              <li>Hands-on: run AI app locally; deploy using Cloud Build + Cloud Run</li>
              <li>Explore scalability, cost, and security basics</li>
            </ul>
          </div>

          <div className="cta-row">
            <button className="info-button primary">Get notified</button>
            <button className="info-button ghost" onClick={() => navigate('/')}>
              Back to homepage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetail;

