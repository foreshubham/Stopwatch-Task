import { useState } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { nanoid } from "nanoid"; //for unique IDs
import { toast } from "react-toastify";

// Components 
import ThemeToggle from "./components/ThemeToggle";
import AddStopwatchButton from "./components/AddStopwatchButton";
import StopwatchGrid from "./components/StopwatchGrid";
import StopwatchCard from "./components/StopWatchCard/StopwatchCard";

interface StopwatchItem {
  id: string;
}

export default function App() {
  const [stopwatches, setStopwatches] = useState<StopwatchItem[]>([]);

  const addStopwatch = () => {
    const id = nanoid();
    setStopwatches((prev) => [...prev, { id }]);
    toast.success("Stopwatch added successfully!"); // Success Action feedback using Toastify
  };

  const deleteStopwatch = (id: string) => {
    setStopwatches((prev) => prev.filter((sw) => sw.id !== id));
    toast.error("Stopwatch deleted successfully!"); // Deletion Action feedback using Toastify
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Typography variant="h4" fontWeight="bold">
          Multi Stopwatch
        </Typography>
        <ThemeToggle />
      </Stack>

      <AddStopwatchButton onAdd={addStopwatch} />

      <StopwatchGrid
        items={stopwatches}
        renderItem={(sw) => (
          <StopwatchCard
            key={sw.id}
            id={sw.id}
            onDelete={() => deleteStopwatch(sw.id)}
          />
        )}
      />
    </Container>
  );
}
