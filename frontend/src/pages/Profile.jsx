import React, { useEffect, useState } from "react";
import {
  FaCodeBranch,
  FaStar,
  FaTrophy,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAuth } from "../context/auth";
import "./Profile.css";

const Profile = () => {
  const [auth] = useAuth();
  const [userData, setUserData] = useState({
    codeforces: null,
    codeforcesContests: [],
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.user && auth.user.codeforcesUsername) {
        try {
          // Fetching Codeforces data
          const codeforcesResponse = await fetch(
            `https://codeforces.com/api/user.info?handles=${auth.user.codeforcesUsername}`
          );
          const codeforcesData = await codeforcesResponse.json();

          // Fetch Codeforces Contest Data
          const codeforcesContestResponse = await fetch(
            `https://codeforces.com/api/user.rating?handle=${auth.user.codeforcesUsername}`
          );
          const codeforcesContestData = await codeforcesContestResponse.json();

          setUserData({
            codeforces: codeforcesData.result[0],
            codeforcesContests: codeforcesContestData.result,
          });
        } catch (error) {
          console.error("Error fetching user data", error);
        }
      }
    };

    fetchUserData();
  }, [auth.user]);

  return (
    <div className="profile-container">
      <h1 className="profile-heading">Your Profile</h1>

      {userData.codeforces && (
        <div className="profile-section codeforces-section">
          <h2>
            <FaUser /> Codeforces
          </h2>
          <p>
            <FaUser /> Username: <span>{userData.codeforces.handle}</span>
          </p>
          <p>
            <FaTrophy /> Rank: <span>{userData.codeforces.rank}</span>
          </p>
          <p>
            <FaStar /> Rating: <span>{userData.codeforces.rating}</span>
          </p>
          <p>
            <FaTrophy /> Max Rank: <span>{userData.codeforces.maxRank}</span>
          </p>
          <p>
            <FaStar /> Max Rating: <span>{userData.codeforces.maxRating}</span>
          </p>
          <p>
            <FaCodeBranch /> Contributions:{" "}
            <span>{userData.codeforces.contribution}</span>
          </p>
          <p>
            <FaUsers /> Friends:{" "}
            <span>{userData.codeforces.friendOfCount}</span>
          </p>
          <p>
            <FaUsers /> Organization:{" "}
            <span>{userData.codeforces.organization || "N/A"}</span>
          </p>
        </div>
      )}

      {userData.codeforcesContests && (
        <div className="profile-section contests-section">
          <h2>Recent Codeforces Contests</h2>
          <table>
            <thead>
              <tr>
                <th>Contest Name</th>
                <th>Rank</th>
                <th>Rating Change</th>
              </tr>
            </thead>
            <tbody>
              {userData.codeforcesContests.map((contest, index) => (
                <tr key={index}>
                  <td>{contest.contestName}</td>
                  <td>{contest.rank}</td>
                  <td>{contest.newRating - contest.oldRating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {userData.codeforcesContests.length > 0 && (
        <div className="profile-section graph-section">
          <h2>Rating History</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={userData.codeforcesContests.map((contest) => ({
                name: contest.contestName,
                rating: contest.newRating,
              }))}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="rating"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Profile;
