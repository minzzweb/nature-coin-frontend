const style = {
  marginLayout: {
    width: "1200px",
    margin: "0 auto",
  },

  /************************header*********************************/
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
    zIndex: "1000",
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
  HeaderListItem: {
    position: "relative",
    height: "100%",
  },
  BoxRight: {
    display: "flex",
    alignItems: "center",
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

  /*************************footer****************************/
  FooterContainer: {
    width: "100%",
    padding: "20px 0px",
    marginTop: "70px",
    borderTop: "1px solid #ddd",
  },
  FooterLeftBox1: {
    width: "1200px",
    margin: "0 auto",
    display: "flex",
  },
  FooterLeftBox2: {
    width: "50%",
    height: "100%",
  },
  FooterRightBox1: {
    width: "50%",
    position: "relative",
  },
  FooterRightBox2: {
    display: "flex",
    justifyContent: "space-around",
    position: "absolute",
    width: "200px",
    top: "0px",
    right: "20px",
  },
  FooterIcon: {
    color: "#51BC51",
  },
  /**************************HomeBackground**************************/
  HbgContainer: {
    marginTop: "70px",
    marginBottom: "30px",
    width: "100%",
    height: "600px",
    position: "relative",
  },
  videoStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  HbgBox_2: {
    width: "100%",
    position: "absolute",
    top: "100px",
    left: "0%",
  },
  HbgTextColor: {
    color: "#fff",
  },
  /**************************HomeSection**************************/
  HomeSectionTitle: {
    color: "#EA9A3E",
  },
  /**************************commom/Image**************************/
  ImageImageList: {
    width: 1200,
    overflow: "hidden",
  },
  ImageImageListItem: {
    height: "300px",
    width: "300px",
  },
  ImageIconButton: {
    color: "rgba(255, 255, 255, 0.54)",
  },

  SquareIcon1: {
    position: "absolute",
    top: "0px",
    left: "-8px",
    color: "#A1E8A1",
    fontSize: "50px",
  },
  SquareIcon2: {
    position: "absolute",
    top: "0px",
    left: "20px",
    color: "#A1E8A1",
    fontSize: "50px",
  },
  LabelIcon: {
    position: "absolute",
    top: "-7px",
    left: "50px",
    color: "#A1E8A1",
    fontSize: "64px",
  },
  ImageDate: {
    position: "absolute",
    top: "8px",
    left: "3px",
    fontSize: "20px",
    color: "#fff",
  },
  /**************************ImageBoard**************************/
  ImageBoardContainer: {
    width: "600px",
    margin: "0 auto",
    marginTop: "100px",
    padding: "10px",
    boxSizing: "border-box",
  },
  ImageBoardTitle: {
    color: "#EA9A3E",
  },
  ImageBoardBox1: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#F6FEF6",
    width: "100%",
  },
  ImageBoardBox2: {
    width: "300px",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    margin: "0 auto",
  },
  ImageBoardImg: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  ImageBoardTextarea: {
    height: "200px",
  },
  ImageBoardBox: {
    display: "flex",
    justifyContent: "flex-end",
  },
  ImageBoardtd1Width: {
    width: "25%",
  },
  ImageBoardtd2Width: {
    width: "75%",
  },
  ImageBoardRegistBtn: { backgroundColor: "#A1E8A1", marginRight: "5px" },
  ImageBoardResetBtn: {
    backgroundColor: "#CDD7E1",
    height: "36px",
  },

  /**************************ImageRead**************************/
  ImageReadBox1: {
    borderRadius: "50%",
    border: "2px solid #A1E8A1",
    overflow: "hidden",
  },
  ImageReadProfileImg: {
    width: "50px",
    height: "50px",
    display: "block",
  },
  categoryColor: {
    color: "#EA9A3E",
  },
  ImageEditBtn: { backgroundColor: "#CDD7E1", height: "36px" },
  ImageRemoveBtn: {
    backgroundColor: "#CDD7E1",
    height: "40px",
    margin: "0px 3px",
  },
  ImageCoinBtn: {
    backgroundColor: "#A1E8A1",
    height: "40px",
    margin: "0px 3px",
  },
  ImageListBtn: {
    backgroundColor: "#CDD7E1",
    height: "36px",
  },
  /**************************ItemList**************************/
  ItemListContainer: {
    width: 1200,
    overflowY: "hidden",
    overflowX: "hidden",
    margin: "0 auto",
    marginTop: "100px",
    padding: "20px",
  },
  ItemListTitle: {
    color: "#EA9A3E",
  },
  IlImageList: { width: "1160px", overflow: "hidden" },
  ItemListImg: {
    objectFit: "cover",
    border: "1px solid #A1E8A1",
    borderRadius: "15px",
    width: "180px",
    height: "180px",
  },
  ItemListBtn: {
    backgroundColor: "#A1E8A1",
    width: "90px",
  },

  //....
  /**************************SignInForm******************************/
  SignInFormContaniner: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
    margin: "200px 0px",
  },
  SignInFormTitle: {
    color: "#1F7A1F",
  },
  SignInFormBox1: {
    display: "flex",
    flexDirection: "column",
    width: "400px",
  },
  SignInFormEmailBox: {
    display: "flex",
    flexDirection: "row",
  },
  SignInFormFormLabel: {
    width: "100px",
    fontWeight: "bold",
    paddingRight: "20px",
  },
  SignInFormPwdBox: {
    margin: "30px 0px 0px",
    display: "flex",
    flexDirection: "row",
  },
  SignInBtn: {
    color: "#fff",
    backgroundColor: "#A1E8A1",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#51BC51",
    },
  },
  SignInAskBox: {
    textAlign: "center",
    marginTop: "4px",
  },

  /**************************SetupForm******************************/
  SetupContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
    margin: "200px 0px",
  },
  SetupTitle: {
    color: "#1F7A1F",
  },
  SetupBox1: {
    display: "flex",
    flexDirection: "column",
    width: "500px",
  },
  SetupBox2: {
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
  },
  SetupFormLabel: {
    width: "120px",
    fontWeight: "bold",
    paddingRight: "20px",
  },
  /*SignupBtn*/
  SignupBtn: {
    color: "#fff",
    backgroundColor: "#A1E8A1",
    marginTop: "20px",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#51BC51",
    },
  },
  /**************************SignUpForm******************************/
  SufAdminBtn: {
    margin: "0px",
    marginLeft: "5px",
    background: "#1F7A1F",
    color: "#fff",
  },
  /************************MyItemList*********************************/
  MyItemListDate: {
    fontSize: "14px",
    color: "#EA9A3E",
    paddingBottom: "10px",
  },
  MyItemListDlBtn: {
    backgroundColor: "#A1E8A1",
    width: "90px",
  },
  /************************MyPageMenu*********************************/
  MyPageMenuList: {
    display: "flex",
    maxWidth: 1200,
    margin: "0px auto",
  },
  /************************Profile*********************************/
  ProfileCard: {
    maxWidth: 1200,
    margin: "120px auto 0px",
    position: "relative",
    boxShadow: "0",
    borderBottom: "1px solid #ddd",
  },
  ProfileAvatar: {
    width: "70px",
    height: "70px",
  },
  ProfileBox1: {
    position: "absolute",
    top: "10px",
    right: "20px",
  },

  /************************ProfileModifyForm*********************************/
  PfmLabel: {
    position: "absolute",
    bottom: "12px",
    left: "0px",
    color: "#EA9A3E",
  },
  PfmLabelBox: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  PfmEditBtn: {
    background: "#EA9A3E",
    "&:hover": {
      background: "#EA9A3E",
    },
  },
  PfmbtnText: {
    color: "#fff",
  },
  PfmIdPwdBtn: {
    background: "#fff",
    padding: "0px 10px",
    "&:hover": {
      background: "#fff",
    },
  },
  PfmText: { fontSize: "12px" },
  PfmEmailText: {
    color: "red",
    fontSize: "12px",
  },
};

export default style;
