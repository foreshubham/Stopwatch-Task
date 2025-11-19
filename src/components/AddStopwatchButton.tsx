import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

interface Props {
  onAdd: () => void;
}

export default function AddStopwatchButton({ onAdd }: Props) {
  return (
    <Button variant="contained" startIcon={<Add />} onClick={onAdd}>
      Add Stopwatch
    </Button>
  );
}
