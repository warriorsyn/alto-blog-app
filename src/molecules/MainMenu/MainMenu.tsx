import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../atoms/Logo/Logo";
import { Autocomplete, Option } from "../../atoms/Autocomplete/Autocomplete";
import { Container, Grid } from "@mui/material";
import "./menu.scss";

type Props = {
  autocompleteOptions: Option[];
};

export const MainMenu: React.FC<Props> = ({ autocompleteOptions }) => {
  const navigate = useNavigate();

  const handleAutocompleteSelection = useCallback(
    (opt: Option) => {
      navigate(`/posts/${opt.value}`);
    },
    [navigate]
  );

  return (
    <div className="main-menu">
      <Container>
        <Grid container alignItems="center" style={{ height: "100%" }}>
          <Grid xs={2}>
            <Logo />
          </Grid>
          <Grid md={6} xs={8}>
            <ul className="main-menu__nav-items">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Grid>
          <Grid md={4} xs={12}>
            <Autocomplete
              options={autocompleteOptions}
              onSelected={handleAutocompleteSelection}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
