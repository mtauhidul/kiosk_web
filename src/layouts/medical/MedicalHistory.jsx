import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import AnimatedPage from "../../components/Animation/Pages";
import Bottom from "../../components/Bottom/Bottom";
import History from "../../components/history/History";
import * as actionCreators from "../../state/actionCreators/index";
import store from "../../state/store";
import styles from "../../styles/Medicals.module.css";
import { arrangeListOfItems } from "../../utils/arrangeListOfItems";

const diseaseList = [
  "Alzheimer’s",
  "Arthritis",
  "Back Problems",
  "Liver Disease",
  "Cancer",
  "Cholesterol",
  "Chest Pain",
  "AIDS/HIV",
  "Circulatory Problems",
  "Stomach/GI Ulcers",
  "Heart Disease",
  "Gout",
  "Phlebitis",
  "Hepatitis",
  "Hemophilia",
  "Diabetes",
  "Allergies to medicine or drugs",
];

const MedicalHistory = () => {
  const dispatch = useDispatch();
  const { addMedicalHistory } = bindActionCreators(actionCreators, dispatch);
  const location = useLocation();
  const [data, setData] = useState([]);

  const state = store?.getState()?.data?.medicalHistory;
  const newDiseaseList = arrangeListOfItems(diseaseList, state);

  const addItemToList = (item) => {
    const repeatDataCheck = data.find((d) => d === item);
    if (!repeatDataCheck) {
      const newArray = [...data];
      newArray.push(item);
      setData(newArray);
    } else {
      const newArray = data.filter((d) => d !== item);
      setData(newArray);
    }
  };

  useEffect(() => {
    const state = store?.getState()?.data?.medicalHistory;
    setData(state);
  }, []);

  return (
    <AnimatedPage>
      <div className={styles.diseasesContainer}>
        <History
          addedItems={data}
          addToList={addItemToList}
          items={newDiseaseList}
          headerText="PLEASE ADD MEDICAL HISTORY :"
          btnText="Add Other Medications"
        />
        <Bottom
          isEdit={location.state}
          handleSubmit={addMedicalHistory}
          data={data}
        />
      </div>
    </AnimatedPage>
  );
};

export default MedicalHistory;
