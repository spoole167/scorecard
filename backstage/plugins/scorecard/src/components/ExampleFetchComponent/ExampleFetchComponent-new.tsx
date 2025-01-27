import React from "react";
import { GaugeCard } from "@backstage/core-components";
import { Grid } from "@material-ui/core";

// Example JSON data
const gaugeData = [
  { title: "Security Score", value: 80, subheader: "Out of 100" },
  { title: "Code Coverage", value: 70, subheader: "Out of 100" },
  { title: "Performance", value: 90, subheader: "Out of 100" },
];

export const GaugeCards: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {gaugeData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <GaugeCard
            title={item.title}
            value={item.value}
            subheader={item.subheader}
          />
        </Grid>
      ))}
    </Grid>
  );
};
