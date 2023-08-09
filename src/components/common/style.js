const style = {
  /*header*/
  BoxStyle: {
    flexGrow: 1,
    width: "100%",
    height: "70px",
    backgroundColor: "#A1E8A1",
    position: "fixed",
    bottom: 0,
    top: 0,
    left: 0,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  BoxContainer: {
    width: "1200px",
    margin: "0 auto",
    height: "100%",
    backgroundColor: "#A1E8A1",
  },
  BoxLeft: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  BoxRight: {
    display: "flex",
    alignItems: "center",
    //gap: "16px",
    marginLeft: "auto",
  },
  btnStyle: {
    color: "#ffffff",
    height: "70px",
    fontSize: "18px",
    fontWeight: "bold",
    "&:hover": {
      color: "#000",
    },
  },
  menuStyle: {
    position: "absolute",
    top: "90%",
    left: 0,
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#fff",
  },
  myBtn: {
    color: "#fff",
    backgroundColor: "#51BC51",
    marginRight: "10px",
  },
  coinStyle: {
    backgroundColor: "#ffff",
    color: "#51BC51",
    fontSize: "18px",
    fontWeight: "bold",
    borderRadius: "120px",
    marginRight: "2px",
  },

  /*Login*/
  loginBtn: {
    color: "#fff",
    backgroundColor: "#A1E8A1",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#51BC51",
    },
  },
};

export default style;
