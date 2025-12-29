import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AlarmIcon from "@mui/icons-material/Alarm";
export default function ButtonCd() {
  const handleEvent = () => {
    let ALARM_ACTIVATED = "ALARM ACTIVATED";
    console.log(ALARM_ACTIVATED);
  };
  return (
    <div>
      <Button color="secondary" startIcon={<DeleteIcon />}>
        Contained
      </Button>

      <Button endIcon={<SendIcon />}>Link</Button>

      <Button onClick={handleEvent} color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </Button>
    </div>
  );
}
