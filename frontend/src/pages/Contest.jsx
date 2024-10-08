import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./Contest.css";

const Contest = () => {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContests();
  }, []);

  const fetchContests = async () => {
    try {
      const response = await axios.get(
        "https://codeforces.com/api/contest.list?gym=false"
      );
      if (response.data.status === "OK") {
        const upcomingContests = response.data.result.filter(
          (contest) => contest.phase === "BEFORE"
        );
        upcomingContests.sort(
          (a, b) => a.startTimeSeconds - b.startTimeSeconds
        );
        setContests(upcomingContests);
        setLoading(false);
      } else {
        setError("Failed to fetch contests.");
        setLoading(false);
      }
    } catch (error) {
      setError("Error fetching contests. Please try again later.");
      setLoading(false);
    }
  };

  const calculateTimeRemaining = (startTimeSeconds) => {
    const currentTime = moment().unix();
    const endTime = startTimeSeconds;
    const diffTime = endTime - currentTime;
    return moment.duration(diffTime, "seconds").humanize(true);
  };

  return (
    <div className="contest-container">
      <h2 className="contest-title">Upcoming Contests (Codeforces)</h2>

      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : contests.length > 0 ? (
        contests.map((contest) => (
          <CSSTransition
            key={contest.id}
            in={true}
            appear={true}
            timeout={500}
            classNames="transition-item"
          >
            <div className="contest-item">
              <div className="contest-details">
                <h3>{contest.name}</h3>
                <p>
                  Starts in: {calculateTimeRemaining(contest.startTimeSeconds)}
                </p>
                <p>
                  Duration:{" "}
                  {moment
                    .duration(contest.durationSeconds, "seconds")
                    .humanize()}
                </p>
                <Link
                  className="btn"
                  to={`https://codeforces.com/contest/${contest.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Contest
                </Link>
              </div>
            </div>
          </CSSTransition>
        ))
      ) : (
        <div className="no-contests">No upcoming contests found.</div>
      )}
    </div>
  );
};

export default Contest;
