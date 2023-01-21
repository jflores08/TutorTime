// Import React components
import { FC } from "react";
import * as React from "react";

// Import Mui components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import { Link as MuiLink } from "@mui/material";

// Creates a framework for the Price Card data
export interface IPriceCard {
  title: string;
  subheader: string;
  price: number;
  description: string[];
  buttonText: string;
  href: string;
  externalLink: boolean;
  buttonVariant: string;
}

const PriceCard: FC<{
  title: string;
  subheader?: string;
  price: number;
  description: string[];
  buttonText: string;
  href: string;
  // externalLink?: boolean;
  buttonVariant: string;
  onClickHandler?: Function;
}> = ({
  title,
  subheader,
  price,
  description,
  buttonText,
  href,
  // externalLink,
  buttonVariant,
  onClickHandler,
}) => {
  const handleClick = () => {
    if (onClickHandler) {
      onClickHandler();
    }
  };

  return (
    <Card>
      <CardHeader
        title={title}
        subheader={subheader}
        titleTypographyProps={{ align: "center" }}
        action={title === "Pro" ? <StarBorderIcon /> : null}
        subheaderTypographyProps={{
          align: "center",
        }}
        sx={{
          minHeight: "88px",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[700],
        }}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            mb: 2,
          }}
        >
          <Typography component="h2" variant="h3" color="text.primary">
            ${price}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            /mo
          </Typography>
        </Box>
        <ul>
          {description.map((line) => (
            <Typography
              component="li"
              variant="subtitle1"
              align="center"
              key={line}
            >
              {line}
            </Typography>
          ))}
        </ul>
      </CardContent>
      <CardActions>
        <MuiLink underline="none" href={href}>
          <Button fullWidth variant={buttonVariant as "outlined" | "contained"}>
            {buttonText}
          </Button>
        </MuiLink>
      </CardActions>
    </Card>
  );
};

export { PriceCard };
