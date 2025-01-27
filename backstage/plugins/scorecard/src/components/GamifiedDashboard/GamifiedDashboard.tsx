import React from "react";
import { Box, Grid, Typography, Card, CardContent, Avatar } from "@material-ui/core";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LockIcon from "@material-ui/icons/Lock";

// Sample Data
const results = [
  {
    metric: "Security Score",
    currentValue: 85,
    previousValue: 80,
    delta: 5,
    icon: "🛡️",
  },
  {
    metric: "Code Coverage",
    currentValue: 72,
    previousValue: 70,
    delta: 2,
    icon: "🧪",
  },
  {
    metric: "Performance",
    currentValue: 88,
    previousValue: 90,
    delta: -2,
    icon: "⚡",
  },
];

const achievements = {
  unlocked: [
    { title: "First Analysis", description: "Completed the first analysis." },
    { title: "Improved Security", description: "Increased Security Score by 5 points." },
  ],
  locked: [
    { title: "Top Performer", description: "Achieve a Security Score of 90 or more." },
    { title: "Full Coverage", description: "Achieve Code Coverage of 100%." },
  ],
};

export const GamifiedDashboard: React.FC = () => {
  const totalAchievements = achievements.unlocked.length + achievements.locked.length;
  const achievementsUnlockedPercent = Math.round((achievements.unlocked.length / totalAchievements) * 100);

  const chartColors = ["#4CAF50", "#E0E0E0"]; // Green for unlocked, gray for locked

  return (
    <Box p={2}>
      {/* Top Metrics */}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Achievements Unlocked</Typography>
              <Typography variant="h3" color="primary">
                {achievementsUnlockedPercent}%
              </Typography>
              <Typography variant="body2">({achievements.unlocked.length} of {totalAchievements})</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Leaderboard Position</Typography>
              <Typography variant="h3" color="secondary">
                #4
              </Typography>
              <Typography variant="body2">Global ranking</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Results Table */}
      <Box mt={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Metric Results
            </Typography>
            <Grid container spacing={2}>
              {results.map((result, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card style={{ height: "100%" }}>
                    <CardContent>
                      <Typography variant="h5">
                        <span style={{ fontSize: "1.5rem" }}>{result.icon}</span> {result.metric}
                      </Typography>
                      <ResponsiveContainer width="100%" height={100}>
                        <PieChart>
                          <Pie
                            data={[
                              { name: "Current", value: result.currentValue },
                              { name: "Remaining", value: 100 - result.currentValue },
                            ]}
                            dataKey="value"
                            innerRadius={30}
                            outerRadius={50}
                            fill="#8884d8"
                          >
                            <Cell fill="#4CAF50" />
                            <Cell fill="#E0E0E0" />
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      <Typography variant="body1" align="center">
                        {result.currentValue} (Δ {result.delta >= 0 ? `+${result.delta}` : result.delta})
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Achievements Section */}
      <Box mt={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Achievements
            </Typography>
            <Grid container spacing={3}>
              {/* Unlocked Achievements */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6">Unlocked</Typography>
                {achievements.unlocked.map((achievement, index) => (
                  <Box key={index} display="flex" alignItems="center" mb={1}>
                    <Avatar style={{ backgroundColor: "#4CAF50", marginRight: 8 }}>
                      <CheckCircleIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="body1">{achievement.title}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {achievement.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
              {/* Locked Achievements */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6">Yet to Unlock</Typography>
                {achievements.locked.map((achievement, index) => (
                  <Box key={index} display="flex" alignItems="center" mb={1}>
                    <Avatar style={{ backgroundColor: "#E0E0E0", marginRight: 8 }}>
                      <LockIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="body1">{achievement.title}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {achievement.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
