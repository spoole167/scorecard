import React from "react";
import { Page, Header, Content, ContentHeader } from "@backstage/core-components";
import { RunScorecardButton } from "../RunScorecardButton";

export const ExamplePage: React.FC = () => {
  return (
    <Page themeId="tool">
      <Header title="OpenSSF Scorecard Runner" subtitle="Run and view results of a scorecard analysis" />
      <Content>
        <ContentHeader title="Run Scorecard">
          <p>Use the button below to analyze a repository with OpenSSF Scorecard:</p>
        </ContentHeader>
        <RunScorecardButton />
      </Content>
    </Page>
  );
};
