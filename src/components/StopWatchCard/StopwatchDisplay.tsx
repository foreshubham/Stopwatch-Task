// This component displays the formatted time for the each individual stopwatch.

import { Typography } from "@mui/material";

interface Props {
  time: number;
}

export default function StopwatchDisplay({ time }: Props) {
  const format = (ms: number): string => {
    const milliseconds = Math.floor(ms % 1000);
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor(ms / 60000);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(Math.floor(milliseconds / 10)).padStart(2, "0")}`;
  }; // Format time as MM:SS:MS

  return (
    <Typography variant="h3" align="center" sx={{ my: 2, fontFamily: "monospace" }}>
      {format(time)}
    </Typography>
  );
}
