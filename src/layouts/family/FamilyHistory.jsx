import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import AnimatedPage from "../../components/Animation/Pages";
import Bottom from "../../components/Bottom/Bottom";
import * as actionCreators from "../../state/actionCreators/index";
import store from "../../state/store";
import styles from "../../styles/FamilyHistory.module.css";

const FamilyHistory = () => {
  const dispatch = useDispatch();
  const { addFamilyHistory } = bindActionCreators(actionCreators, dispatch);
  const location = useLocation();

  const [data, setData] = useState({
    diabetes: "",
  });

  useEffect(() => {
    const state = store?.getState()?.data?.familyHistory;
    setData(state);
  }, []);

  return (
    <AnimatedPage>
      <div className={styles.familyHisContainer}>
        <div>
          <h3 className="header3">
            DOES (DID) YOUR MOTHER OR FATHER HAVE DIABETES?
          </h3>
          <br />
          <FormControl>
            <RadioGroup
              className={styles.radioBtnContainer}
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              {data?.diabetes === "yes" ? (
                <FormControlLabel
                  className={styles.radioBtn}
                  value="yes"
                  control={<Radio />}
                  label="YES"
                  onClick={(e) => setData({ diabetes: e.target.value })}
                  checked
                />
              ) : (
                <FormControlLabel
                  className={styles.radioBtn}
                  value="yes"
                  control={<Radio />}
                  label="YES"
                  onClick={(e) => setData({ diabetes: e.target.value })}
                />
              )}
              {data?.diabetes === "no" ? (
                <FormControlLabel
                  className={styles.radioBtn}
                  value="no"
                  control={<Radio />}
                  label="NO"
                  onClick={(e) => setData({ diabetes: e.target.value })}
                  checked
                />
              ) : (
                <FormControlLabel
                  className={styles.radioBtn}
                  value="no"
                  control={<Radio />}
                  label="NO"
                  onClick={(e) => setData({ diabetes: e.target.value })}
                />
              )}
            </RadioGroup>
          </FormControl>
        </div>
        <Bottom
          isEdit={location.state}
          handleSubmit={addFamilyHistory}
          data={data}
        />
      </div>
    </AnimatedPage>
  );
};

export default FamilyHistory;
