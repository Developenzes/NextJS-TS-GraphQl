import Header  from './Header';
import {Box, Toolbar} from "@mui/material";

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}     
      </Box>
      <footer>
          
      </footer>
    </>
  );
}