import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Card, CardContent, Typography } from "@material-ui/core";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ComparisonResult {
  metric: string;
  currentValue: number;
  previousValue: number;
  delta: number | null;
  description: string;
}
const COLORS = ["#0088FE", "#E0E0E0"]; // Color for pie chart sections

export const ScoreComparisonTable: React.FC<{ results: ComparisonResult[] }> = ({ results }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Scorecard Comparison</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Metric</TableCell>
              <TableCell align="right">Current Value</TableCell>
              <TableCell align="right">Previous Value</TableCell>
              <TableCell align="right">Change</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
         <TableBody>
                     {results.map((result, index) => {
                       const chartData = [
                         { name: "Current", value: result.currentValue },
                         { name: "Remaining", value: 100 - result.currentValue },
                       ];

                       return (
                         <TableRow key={index}>
                           <TableCell>{result.metric}</TableCell>
                           <TableCell align="center">
                             {/* Pie Chart */}
                             <ResponsiveContainer width={50} height={50}>
                               <PieChart>
                                 <Pie
                                   data={chartData}
                                   dataKey="value"
                                   outerRadius={20}
                                   innerRadius={10}
                                   fill="#8884d8"
                                 >
                                   {chartData.map((entry, i) => (
                                     <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                                   ))}
                                 </Pie>
                               </PieChart>
                             </ResponsiveContainer>
                           </TableCell>
                           <TableCell align="right">{result.currentValue}</TableCell>
                           <TableCell align="right">{result.previousValue}</TableCell>
                           <TableCell
                             align="right"
                             style={{ color: result.delta >= 0 ? "green" : "red" }}
                           >
                             {result.delta >= 0 ? `+${result.delta}` : result.delta}
                           </TableCell>
                           <TableCell>{result.description}</TableCell>
                         </TableRow>
                       );
                     })}
                   </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
