import React from "react";
import "./InviteTraining.css";

const CONTACT_EMAIL = "campusconnect@teamtechsign.in";

export default function InviteTraining() {
  function handleSubmit(event) {
    event.preventDefault();
    const formValues = new FormData(event.currentTarget);
    const message = [
      `College: ${formValues.get("collegeName")}`,
      `Contact person: ${formValues.get("contactName")}`,
      `Email: ${formValues.get("email")}`,
      `Phone: ${formValues.get("phone")}`,
      `Campus location: ${formValues.get("location")}`,
      `Expected learners: ${formValues.get("learners")}`,
      `Preferred month: ${formValues.get("preferredMonth") || "Not specified"}`,
      `Training format: ${formValues.get("format")}`,
      "",
      "Additional details:",
      formValues.get("details") || "None provided",
    ].join("\n");
    const subject = encodeURIComponent(`CRT training invitation - ${formValues.get("collegeName")}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(message)}`;
  }

  return (
    <section className="invite-training-section" aria-labelledby="invite-training-heading">
      <div className="invite-training-container">
        <a className="invite-home-link" href="/">Back to TechSign</a>
        <header className="invite-training-header">
          <span className="invite-training-eyebrow">For colleges and universities</span>
          <h1 id="invite-training-heading">Invite TechSign for CRT training.</h1>
          <p>
            Bring career readiness training to your campus. Share a few details and our campus relations team will follow up to discuss your students, schedule, and training goals.
          </p>
        </header>

        <div className="invite-training-layout">
          <aside className="invite-training-details" aria-label="Training information">
            <h2>Built around your campus</h2>
            <p>
              Tell us about your learner group and we can discuss a training plan that fits your academic calendar and placement goals.
            </p>
            <ul>
              <li>CRT sessions for your students and graduating batches</li>
              <li>Training plans shaped around your campus requirements</li>
              <li>On-campus or online delivery options</li>
            </ul>
            <p className="invite-direct-contact">
              Prefer email? <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </aside>

          <form className="invite-training-form" onSubmit={handleSubmit}>
            <div className="invite-form-heading">
              <h2>Request a training discussion</h2>
              <p>Fields marked with * are required.</p>
            </div>

            <div className="invite-form-grid">
              <label className="invite-form-field">
                <span>College or institution *</span>
                <input name="collegeName" type="text" autoComplete="organization" required />
              </label>
              <label className="invite-form-field">
                <span>Your name *</span>
                <input name="contactName" type="text" autoComplete="name" required />
              </label>
              <label className="invite-form-field">
                <span>Work email *</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label className="invite-form-field">
                <span>Phone number *</span>
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
              <label className="invite-form-field">
                <span>Campus city and state *</span>
                <input name="location" type="text" autoComplete="address-level2" required />
              </label>
              <label className="invite-form-field">
                <span>Expected learners *</span>
                <input name="learners" type="number" min="1" inputMode="numeric" required />
              </label>
              <label className="invite-form-field">
                <span>Preferred month</span>
                <input name="preferredMonth" type="month" />
              </label>
              <label className="invite-form-field">
                <span>Training format</span>
                <select name="format" defaultValue="On campus">
                  <option>On campus</option>
                  <option>Online</option>
                  <option>Open to either</option>
                </select>
              </label>
              <label className="invite-form-field invite-form-field-wide">
                <span>What would you like your students to focus on?</span>
                <textarea name="details" rows="4" placeholder="Share your goals, batch details, or preferred schedule." />
              </label>
            </div>

            <div className="invite-form-submit-row">
              <button type="submit" className="invite-submit-button">Prepare invitation email</button>
              <span>Your email app will open with the request details filled in.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
