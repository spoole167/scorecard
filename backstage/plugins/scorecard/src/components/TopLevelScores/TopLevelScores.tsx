import React from "react";
import { Page, Header, Content, ContentHeader } from "@backstage/core-components";
import { Grid } from "@material-ui/core";
import { ScoreComparisonTable } from "./ScoreComparisonTable";
import { compareRuns } from "./compareUtils";
import runA from "../data/runA.json";
import runB from "../data/runB.json";

export const TopLevelScores: React.FC  = () => {
const results = compareRuns(runA, runB);

  return (
    <Page themeId="tool">
      <Header title="Scorecard Comparison" />
      <Content>
        <ContentHeader title="Comparison Results" />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ScoreComparisonTable results={results} />
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};