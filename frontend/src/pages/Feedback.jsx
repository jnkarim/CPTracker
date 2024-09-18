import React, { useState } from 'react';
import './Feedback.css';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [email, setEmail] = useState('');
  const [frequency, setFrequency] = useState('');
  const [satisfaction, setSatisfaction] = useState('');
  const [recommend, setRecommend] = useState('');
  const [design, setDesign] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, frequency, satisfaction, recommend, design });

    // Set the form as submitted
    setSubmitted(true);

    // Clear form fields
    setEmail('');
    setFrequency('');
    setSatisfaction('');
    setRecommend('');
    setDesign('');

    // Redirect to homepage after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="feedback-container">
        <h2>Thank You for Your Feedback!</h2>
        <p>Your feedback has been recorded successfully. You will be redirected to the homepage shortly.</p>
      </div>
    );
  }

  return (
    <div className="feedback-container">
      <h2>We Value Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mcq-group">
          <p>How often do you visit our website? *</p>
          <div className="option-grid">
            <label>
              <input
                type="radio"
                name="frequency"
                value="First time visitor"
                onChange={(e) => setFrequency(e.target.value)}
                required
              />
              First time visitor
            </label>
            <label>
              <input
                type="radio"
                name="frequency"
                value="Daily"
                onChange={(e) => setFrequency(e.target.value)}
              />
              Daily
            </label>
            <label>
              <input
                type="radio"
                name="frequency"
                value="Weekly"
                onChange={(e) => setFrequency(e.target.value)}
              />
              Weekly
            </label>
            <label>
              <input
                type="radio"
                name="frequency"
                value="Monthly"
                onChange={(e) => setFrequency(e.target.value)}
              />
              Monthly
            </label>
          </div>
        </div>

        <div className="mcq-group">
          <p>How satisfied are you with our website? *</p>
          <div className="option-grid">
            <label>
              <input
                type="radio"
                name="satisfaction"
                value="Very satisfied"
                onChange={(e) => setSatisfaction(e.target.value)}
                required
              />
              Very satisfied
            </label>
            <label>
              <input
                type="radio"
                name="satisfaction"
                value="Satisfied"
                onChange={(e) => setSatisfaction(e.target.value)}
              />
              Satisfied
            </label>
            <label>
              <input
                type="radio"
                name="satisfaction"
                value="Neutral"
                onChange={(e) => setSatisfaction(e.target.value)}
              />
              Neutral
            </label>
            <label>
              <input
                type="radio"
                name="satisfaction"
                value="Dissatisfied"
                onChange={(e) => setSatisfaction(e.target.value)}
              />
              Dissatisfied
            </label>
          </div>
        </div>

        <div className="mcq-group">
          <p>Would you recommend our website to others? *</p>
          <div className="option-grid">
            <label>
              <input
                type="radio"
                name="recommend"
                value="Definitely"
                onChange={(e) => setRecommend(e.target.value)}
                required
              />
              Definitely
            </label>
            <label>
              <input
                type="radio"
                name="recommend"
                value="Probably"
                onChange={(e) => setRecommend(e.target.value)}
              />
              Probably
            </label>
            <label>
              <input
                type="radio"
                name="recommend"
                value="Not sure"
                onChange={(e) => setRecommend(e.target.value)}
              />
              Not sure
            </label>
            <label>
              <input
                type="radio"
                name="recommend"
                value="No"
                onChange={(e) => setRecommend(e.target.value)}
              />
              No
            </label>
          </div>
        </div>

        <div className="mcq-group">
          <p>How would you rate the design of our website? *</p>
          <div className="option-grid">
            <label>
              <input
                type="radio"
                name="design"
                value="Excellent"
                onChange={(e) => setDesign(e.target.value)}
                required
              />
              Excellent
            </label>
            <label>
              <input
                type="radio"
                name="design"
                value="Good"
                onChange={(e) => setDesign(e.target.value)}
              />
              Good
            </label>
            <label>
              <input
                type="radio"
                name="design"
                value="Average"
                onChange={(e) => setDesign(e.target.value)}
              />
              Average
            </label>
            <label>
              <input
                type="radio"
                name="design"
                value="Poor"
                onChange={(e) => setDesign(e.target.value)}
              />
              Poor
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
