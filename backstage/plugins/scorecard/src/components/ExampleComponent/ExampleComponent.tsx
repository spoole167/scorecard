import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  GaugeCard,
  SupportButton,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';
import { TopLevelScores } from '../TopLevelScores';
import { GamifiedDashboard } from '../GamifiedDashboard';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="OpenSSF Scorecard Dashboard" >
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>

      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Project test1">
            <Typography variant="body1">
              Latest scores from running scorecard against the repository.
            </Typography>
          </InfoCard>
        </Grid>
          <Grid item>
                          <GamifiedDashboard />
                        </Grid>






      </Grid>
    </Content>
  </Page>
);
