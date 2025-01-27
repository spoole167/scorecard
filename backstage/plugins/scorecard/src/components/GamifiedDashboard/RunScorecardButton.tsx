import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  CircularProgress,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";

export const RunScorecardButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleRunScorecard = async () => {
    setLoading(true);

    try {
      // Replace this with your backend API call to run Scorecard
      const response = await fetch("http://localhost:3000/api/run-scorecard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error("Failed to run Scorecard");
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error running Scorecard:", error);
      alert("An error occurred while running Scorecard.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <div>
      {/* Button to Open Dialog */}
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Run Scorecard
      </Button>

      {/* Dialog for URL Input */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Run OpenSSF Scorecard</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Repository URL"
            type="url"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleRunScorecard} color="primary" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Run"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Display Results */}
      {results && (
        <Card style={{ marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h6">Scorecard Results</Typography>
            <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
              {JSON.stringify(results, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
