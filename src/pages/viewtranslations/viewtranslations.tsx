// import { Grid, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import TopNavigation from "../../components/TopNavigation";
// import ViewObject from "../../components/viewObject";
// // import { DetectionWithTranslation } from '../../types/common/common.types';

// // background: 'linear-gradient(to right bottom, #430089, #82ffa1)'
// export default function ViewTranslations() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [rawurl, setRawURL] = useState("");
//   // const [detections, setDetections] = useState<DetectionWithTranslation>();

//   useEffect(() => {
//     if (!location.state) navigate("/");
//     else {
//       setRawURL(location.state.rawurl);
//       // setDetections(location.state.detections);
//     }
//   }, [location.state, navigate]);

//   return (
//     <>
//       <TopNavigation />
//       <Grid container direction="column" color="primary">
//         <Grid
//           item
//           xs={12}
//           sm={9}
//           md={10}
//           alignItems="center"
//           sx={{ m: 2, display: "flex" }}
//         >
//           {/* <Toolbar /> */}
//           <ViewObject rawurl={rawurl} detectedObject="Dog" />
//         </Grid>
//         <Grid item xs={12} sm={9} md={10} alignItems="left" sx={{ m: 2 }}>
//           <Typography variant="h5" color="purple" component="div">
//             Your favourite languages
//           </Typography>
//           {/* <Toolbar /> */}
//           {/* <TranslationObject rawurl={rawurl} /> */}
//         </Grid>
//       </Grid>
//     </>
//   );
// }

import { Grid, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TopNavigation from "../../components/TopNavigation";
import ViewObject from "../../components/viewObject";
// import { DetectionWithTranslation } from '../../types/common/common.types';

// background: 'linear-gradient(to right bottom, #430089, #82ffa1)'
export default function ViewTranslations() {
  const location = useLocation();
  const navigate = useNavigate();
  const [rawurl, setRawURL] = useState("");
  // const [detections, setDetections] = useState<DetectionWithTranslation>();

  useEffect(() => {
    if (!location.state) navigate("/");
    else {
      setRawURL(location.state.rawurl);
      // setDetections(location.state.detections);
    }
  }, [location.state, navigate]);

  return (
    <>
      <TopNavigation />
      <Grid
        container
        direction="column"
        sx={{
          background: "linear-gradient(to right bottom, #430089, #82ffa1)",
          minHeight: "100vh",
          py: 4,
          px: 2,
        }}
      >
        <Grid
          item
          xs={12}
          sm={9}
          md={10}
          alignItems="center"
          sx={{ m: 2, display: "flex" }}
        >
          <Paper
            sx={{
              p: 2,
              borderRadius: 3,
              boxShadow: 5,
              backgroundColor: "#ffffffcc",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <ViewObject rawurl={rawurl} detectedObject="Dog" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9} md={10} alignItems="left" sx={{ m: 2 }}>
          <Paper
            sx={{
              p: 2,
              borderRadius: 3,
              boxShadow: 5,
              backgroundColor: "#ffffffcc",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="h5" color="purple" component="div">
              Your favourite languages
            </Typography>
            {/* <TranslationObject rawurl={rawurl} /> */}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
