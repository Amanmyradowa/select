import { Button } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <div className="login_page">
      <div className="container">
        <div className="login">
          <input
            type="text"
            placeholder="Telefon belgiňiz ýada email giriziň"
            id="input"
            autoComplete="off"
            required
          />
          <div className="checkbox">
            <input type="checkbox" id="checkbox" required />
            <label htmlFor="checkbox">Duzgunnamany kabul etyarin</label>
          </div>
          <Button variant="contained">Tassyklamak</Button>
        </div>
        <div className="description">
          Ulgama girmek bilen, siz oz bildirislerinizi we profilinizi sazlap
          bilersiniz we ozunizin basga telefonlarynyza gecip bilersiniz{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
