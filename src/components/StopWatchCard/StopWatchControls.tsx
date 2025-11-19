// This components is used for providing control buttons

import { Button, Stack, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

interface Props {
  running: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
  onDelete: () => void;
}

export default function StopwatchControls({
  running,
  start,
  pause,
  reset,
  onDelete,
}: Props) {
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      {!running ? (
        <Button variant="contained" onClick={start}>
          Start
        </Button>
      ) : (
        <Button variant="contained" color="warning" onClick={pause}>
          Pause
        </Button>
      )}

      <Button variant="outlined" color="error" onClick={reset}>
        Reset
      </Button>

      <IconButton color="error" onClick={onDelete}>
        <Delete />
      </IconButton>
    </Stack>
  );
}
