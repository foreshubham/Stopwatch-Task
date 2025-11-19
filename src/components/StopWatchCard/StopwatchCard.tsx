// This component represents an individual stopwatch card with its own state and controls.

import { Card, CardContent, Typography } from "@mui/material";
import StopwatchDisplay from "./StopwatchDisplay";
import StopwatchControls from "./StopWatchControls";
import useStopwatch from "../../hooks/useStopwatch";

interface Props {
  id: string;
  onDelete: () => void;
}

export default function StopwatchCard({onDelete }: Props) {
  const { time, running, start, pause, reset } = useStopwatch(); // using this logic for each stopwatch card

  return (
    <Card sx={{ p: 1 }}>
      <CardContent>
        <Typography variant="h6">Stopwatch</Typography>

        <StopwatchDisplay time={time} />

        <StopwatchControls
          running={running}
          start={start}
          pause={pause}
          reset={reset}
          onDelete={onDelete}
        />
      </CardContent>
    </Card>
  );
}
