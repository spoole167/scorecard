export interface Metric {
  metric: string;
  value: number;
  description: string;
}

export const compareRuns = (runA: Metric[], runB: Metric[]) => {
  return runA.map((metricA) => {
    const metricB = runB.find((m) => m.metric === metricA.metric);

    if (metricB) {
      return {
        metric: metricA.metric,
        currentValue: metricB.value,
        previousValue: metricA.value,
        delta: metricB.value - metricA.value,
        description: metricA.description,
      };
    }
    return { ...metricA, delta: null };
  });
};
