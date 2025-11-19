// This component is for reusing grid layout

import { Grid } from "@mui/material";



interface GridItem {
  id: string;
}

interface Props {
  items: GridItem[];
  renderItem: (item: GridItem) => React.ReactNode;
} // for reusing mui grid layout

export default function StopwatchGrid({ items, renderItem }: Props) {
  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid key={item.id} component="div">
          {renderItem(item)}
        </Grid>
      ))}
    </Grid>
  );
}
