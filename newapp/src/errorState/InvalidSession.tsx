import React, { useState, useEffect } from "react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Image from "../../../../assets/logo/KeyboardBackground.svg";
import { useLocation, useSearchParams } from "react-router-dom";
// import { UiText } from "@shivdemo/shared-ui";

import Image from '../assets/logo/KeyboardBackground.svg';
import Logo from '../assets/logo/1800AccountantLogo.svg';
import { UiText } from "../app/UiText";


const MEETING_ENDED = "This meeting has ended";

function toRem16(value: number) {
  const remValue = value / 16 + 'rem';
  return remValue;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    height: "auto",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  card: {
    backgroundColor: '#fff',
    width: "35%",
    height: "auto",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    padding: toRem16(40),
  },
  marginBottom: {
    marginBottom: toRem16(32),
  },
  mianText: {
    marginBottom: toRem16(8),
  },
  dashboardLink: {
    color: '#1776B6',
    textDecoration: "none",
    marginTop: toRem16(32),
  },
}));

function InvalidSession() {
  const classes = useStyles();
  const location = useLocation();
  const [errorInfo, setErrorInfo] = useState<any>();

  useEffect(() => {
    const error = location.state ?? MEETING_ENDED;
    setErrorInfo(error);
  }, [location.state]);
  const [search] = useSearchParams();

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div>
          <div className={classes.marginBottom}>
            <img src={Logo} alt="logo" />
          </div>
          {/* <div className={classes.marginBottom}>
            <img src={Logo} alt="info" />
          </div> */}
          <div className={classes.mianText}>
            <UiText variant="suv_150" weight="semi_bold_600">
              {errorInfo}
            </UiText>
          </div>
          <UiText>
            You can contact your accountant through the message center, or by
            scheduling another appoinment.
          </UiText>
          <a
            className={classes.dashboardLink}
            href={
              search.get("user") === "admin"
                ? `/admin/#/dashboard`
                : `/portal/#/dashboard/`
            }
          >
            <UiText
              variant="motorcycle_90"
              weight="semi_bold_600"
              className={classes.dashboardLink}
            >
              Go to my Dashboard
            </UiText>
          </a>
        </div>
      </div>
    </div>
  );
}
export default InvalidSession;
