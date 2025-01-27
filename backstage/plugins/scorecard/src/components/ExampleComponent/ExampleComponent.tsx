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
  Button,
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
       <Button variant="contained" color="primary">
                                              Add new repo
                                            </Button>
    </Header>
    <Content>

      <Grid container spacing={3} direction="column">

          <Grid item>
                          <GamifiedDashboard />
                        </Grid>






      </Grid>
    </Content>
  </Page>
);
