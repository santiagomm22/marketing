import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaSnapchatGhost } from "react-icons/fa";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export default function ImgMediaCard() {
  return (
    <Card
      sx={{
        maxWidth: "26.5%",
        backgroundColor: "black",
        margin: "0px 0px 0px 13.2%",
      }}
    >
      <CardMedia
        component="img"
        alt="..."
        height="140"
        image="/images/image (4).png"
      />
      <CardContent style={{ color: "#ffff", alignItems: "center" }}>
        <Typography gutterBottom variant="h6" component="div">
          Impulsando tu marca al siguiente nivel
        </Typography>
        <Typography variant="body2">
          ___________________________________________
        </Typography>
      </CardContent>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ color: "#ffff", margin: "0px 0px 0px 3%" }}
      >
        <EmailIcon
          sx={{ color: "blue", fontSize: "180%", marginRight: "2%" }}
        />
        msjdiseñoypublicidad@gmail.com
      </Typography>
      <Stack
        color="#ffff"
        direction="row"
        spacing={1}
        style={{ margin: "0px 0px 0px 15%", marginTop: "3%" }}
      >
        <FacebookIcon sx={{ fontSize: "220%" }} />
        <InstagramIcon sx={{ fontSize: "220%" }} />
        <FaSnapchatGhost size={30} />
        <TwitterIcon sx={{ fontSize: "220%" }} />
        <WhatsAppIcon sx={{ fontSize: "220%" }} />
        <LinkedInIcon sx={{ fontSize: "220%" }} />
      </Stack>
    </Card>
  );
}
