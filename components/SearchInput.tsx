import { Input } from "@mui/material";

interface Props {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchInput(props: Props) {
    return <Input sx={{marginBottom: 4, padding: "6px 0",  minWidth: 200, fontSize:20}} placeholder="Search Launch..." {...props} />;
  }