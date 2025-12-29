import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./infoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let HOT_URL =
    "https://images.unsplash.com/photo-1525490829609-d166ddb58678?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VufGVufDB8fDB8fHww";
  let COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW58ZW58MHx8MHx8fDA%3D";

  return (
    <div className="infoBox">
      <div className="cardContent">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                info.humadity > 80
                  ? RAIN_URL
                  : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city} <span style={{ marginRight: 6 }} />
                {info.humadity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 15 ? (
                  <WbSunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </Typography>
              <Typography
                component="div"
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                <div>
                  <p>temp:-{info.temp}</p>
                  <p>temp-max:-{info.temp_max}</p>
                  <p>temp-min:-{info.temp_min}</p>
                  <p>humadity:-{info.humadity}</p>
                  <p>pressure:-{info.pressure}</p>
                  <p>
                    the temp is feelsLike:{info.feelsLike}
                    <br></br>
                    <br></br>
                    The weather will be described as:
                    <i>{info.weather}</i>
                    <br></br>
                    <br></br>
                  </p>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
