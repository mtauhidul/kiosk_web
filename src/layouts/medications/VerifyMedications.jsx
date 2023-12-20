import AnimatedPage from "../../components/Animation/Pages";
import Bottom from "../../components/Bottom/Bottom";
import store from "../../state/store";

const VerifyMedications = () => {
  const state = store?.getState()?.data?.medications;

  return (
    <AnimatedPage>
      <div style={{ width: "100%", minHeight: "85vh", position: "relative" }}>
        <div>
          <h3 className="header3">YOUR ACTIVE MEDICATIONS :</h3>
          <br />
          {state.map((medication, index) => {
            return (
              <h5
                style={{ marginBottom: "20px" }}
                key={index}
                className="header5"
              >
                {medication}
              </h5>
            );
          })}
          {/* <TextField
          sx={{ width: "350px", mb: 3 }}
          id="outlined-multiline-static"
          label="Type your review..."
          multiline
          rows={2}
          columns={10}
        /> */}

          {/* <div className={styles.verificationWrapper}>
          <h4 className="header4">Verify all medications added?</h4>
          <Button
            id={styles.verifyBtn}
            onClick={() => navigate("/")}
            variant="contained"
            size="medium"
            className="binaryButton"
          >
            Verify
          </Button>
        </div> */}
        </div>
        <Bottom />
      </div>
    </AnimatedPage>
  );
};

export default VerifyMedications;
