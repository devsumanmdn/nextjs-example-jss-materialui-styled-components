/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import styled from "styled-components";

import StyledButton from "../src/StyledButton";

const StyledTypography = styled(Typography)`
  && {
    color: blueviolet;
    font-family: Roboto Mono;
    > span {
      color: unset;
    }
  }
`;

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <StyledTypography variant="h4" gutterBottom>
        I like monoSpace fonts .
      </StyledTypography>
      <Typography gutterBottom />
      <Link href="/">
        <StyledButton>Go to Home</StyledButton>
      </Link>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
