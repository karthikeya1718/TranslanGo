
// import React, { useContext, useEffect, useState } from "react";
// import {
//   Container,
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   Typography,
//   TextField,
//   IconButton,
//   Button,
//   Paper,
//   keyframes,
//   Box,
// } from "@mui/material";
// import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
// import TopNavigation from "../../components/TopNavigation";
// // import BottomNavigation from "../../components/BottomNavigation";
// import AppCtx, { TRANSLATION_KEYS } from "../../store/app-state-context";
// import GeneralController from "../../controllers/general.controller";
// import { TranslationResponseType } from "../../types/common/common.types";
// import TranslateIcon from "@mui/icons-material/Translate";
// import SendIcon from "@mui/icons-material/Send";

// // Define the animated gradient keyframes using a template literal
// const gradientBackground = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

// // OriginalTextCard component with the same styling as in your first snippet
// const OriginalTextCard: React.FC<{ changeText: React.Dispatch<React.SetStateAction<string>> }> = ({
//   changeText,
// }) => {
//   const ctx = useContext(AppCtx);
//   const t = (key: TRANSLATION_KEYS) =>
//     ctx.translations[ctx.nativeLanguage]
//       ? ctx.translations[ctx.nativeLanguage][key]
//       : ctx.translations["en"][key];
//   const [state, setState] = useState("");

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       style={{ marginBottom: "2rem" }}
//     >
//       <Card
//         sx={{
//           maxWidth: "90%",
//           width: "90%",
//           mx: "auto",
//           mt: 4,
//           p: 3,
//           borderRadius: 4,
//           boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
//           background: "linear-gradient(135deg, #ffffff, #f8f9fa)",
//           backdropFilter: "blur(10px)",
//           border: "1px solid rgba(255,255,255,0.2)",
//           transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//           "&:hover": {
//             transform: "translateY(-5px)",
//             boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
//           },
//         }}
//       >
//         <CardHeader
//           title={
//             <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
//               <Typography variant="h5" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "primary.main" }}>
//                 {t("WRITE_TEXT_TO_TRANSLATE")}
//               </Typography>
//             </motion.div>
//           }
//           subheader={
//             <Typography variant="body2" sx={{ color: "text.secondary", fontFamily: "Poppins, sans-serif" }}>
//               {t("TEXT_WILL_BE_TRANSLATED")}
//             </Typography>
//           }
//         />
//         <CardContent>
//           <motion.div whileFocus={{ scale: 1.02 }}>
//             <TextField
//               variant="outlined"
//               minRows={4}
//               multiline
//               fullWidth
//               value={state}
//               onChange={(e) => setState(e.target.value)}
//               onBlur={() => changeText(state)}
//               placeholder="Enter text here..."
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   color: "text.primary",
//                   background: "rgba(245,245,245,0.8)",
//                   borderRadius: 2,
//                   "& fieldset": { borderColor: "rgba(0,0,0,0.3)", transition: "all 0.3s ease" },
//                   "&:hover fieldset": { borderColor: "primary.main", boxShadow: "0 0 15px rgba(0,0,0,0.1)" },
//                   "&.Mui-focused fieldset": { borderColor: "primary.main", boxShadow: "0 0 20px rgba(0,0,0,0.15)" },
//                 },
//                 "& .MuiInputLabel-root": { color: "text.secondary", fontFamily: "Poppins" },
//               }}
//               InputProps={{ style: { fontSize: "1.2rem", fontFamily: "Poppins", padding: "10px" } }}
//             />
//           </motion.div>
//         </CardContent>
//         <CardActions sx={{ justifyContent: "flex-end", pr: 2, pb: 2 }}>
//           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//             <IconButton
//               sx={{
//                 color: "primary.main",
//                 backgroundColor: "rgba(0,0,0,0.05)",
//                 "&:hover": { backgroundColor: "rgba(0,0,0,0.1)", boxShadow: "0 0 15px rgba(0,0,0,0.1)" },
//                 transition: "all 0.3s ease",
//               }}
//             >
//               <TranslateIcon fontSize="large" />
//             </IconButton>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button
//               endIcon={
//                 <motion.div animate={{ rotate: [0, 20, -20, 0], x: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
//                   <SendIcon sx={{ color: "white" }} />
//                 </motion.div>
//               }
//               sx={{
//                 color: "white",
//                 border: "2px solid rgba(255,255,255,0.5)",
//                 borderRadius: "15px",
//                 px: 4,
//                 py: 1.5,
//                 fontFamily: "Poppins",
//                 fontWeight: 600,
//                 fontSize: "1.1rem",
//                 letterSpacing: "1px",
//                 background: "linear-gradient(45deg, #2575fc 0%, #6a11cb 100%)",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   background: "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)",
//                   boxShadow: "0 0 25px rgba(0,0,0,0.2)",
//                 },
//               }}
//             >
//               {t("TRANSLATE")}
//             </Button>
//           </motion.div>
//         </CardActions>
//       </Card>
//     </motion.div>
//   );
// };

// // Translation component with animated paper styling
// const Translation: React.FC<{ lang_code: string; text: string; index: number }> = ({
//   lang_code,
//   text,
//   index,
// }) => {
//   const ctx = useContext(AppCtx);
//   const [translation, setTranslation] = useState("");
//   const [translationAvailable, setTranslationAvailable] = useState(false);

//   useEffect(() => {
//     if (text.trim() !== "") {
//       GeneralController.getTranslation(text, lang_code).then((data: TranslationResponseType) => {
//         setTranslation(data.translatedText);
//         setTranslationAvailable(true);
//       });
//     }
//   }, [text, lang_code]);

//   if (!translationAvailable || text.trim() === "") return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20, scale: 0.95 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.5 }}
//       transition={{ duration: 0.4, ease: "backOut", delay: index * 0.1 }}
//       whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
//       style={{ originX: 0, width: "90%", margin: "0 auto", marginBottom: "1.5rem" }}
//     >
//       <Paper
//         sx={{
//           p: 3,
//           background: `linear-gradient(45deg, ${index % 2 === 0 ? "#f6d365" : "#84fab0"} 0%, ${
//             index % 2 === 0 ? "#fda085" : "#8fd3f4"
//           } 100%)`,
//           borderRadius: 3,
//           position: "relative",
//           overflow: "hidden",
//           transition: "all 0.3s ease",
//           boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//           "&:before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: "-100%",
//             width: "200%",
//             height: "100%",
//             background:
//               "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
//             transition: "left 0.6s",
//           },
//           "&:hover:before": {
//             left: "100%",
//           },
//         }}
//       >
//         <Typography
//           variant="body1"
//           sx={{
//             fontFamily: "Poppins, sans-serif",
//             fontSize: "1.2rem",
//             color: "#2c3e50",
//             lineHeight: 1.6,
//           }}
//         >
//           {translation}
//         </Typography>
//         <Typography
//           variant="caption"
//           sx={{
//             color: "#7f8c8d",
//             display: "block",
//             mt: 1,
//           }}
//         >
//           ({ctx.availableLanguages[lang_code]})
//         </Typography>
//       </Paper>
//     </motion.div>
//   );
// };

// const TextTranslationPage: React.FC = () => {
//   const ctx = useContext(AppCtx);
//   const [text, setText] = useState("");

//   // Hide BottomNavigation when this page is opened
//   useEffect(() => {
//     ctx.setShowBottomNavigation(false);
//     return () => ctx.setShowBottomNavigation(true); // Restore when leaving
//   }, [ctx]);

//   return (
//     <>
//       <TopNavigation />
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//         <Box
//           sx={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             zIndex: -1,
//             background: "linear-gradient(-45deg, #23a6d5, #e73c7e, #23a6d5, #e73c7e)",
//             backgroundSize: "400% 400%",
//             animation: `${gradientBackground} 15s ease infinite`,
//             transition: "background 1s ease-in-out",
//           }}
//         />
//         <Container sx={{ minHeight: "100vh", py: 4 }}>
//           <LayoutGroup>
//             <OriginalTextCard changeText={setText} />
//             <AnimatePresence>
//               {Array.from(ctx.favouriteLanguages).map((lang, index) => (
//                 <Translation key={lang} lang_code={lang} text={text} index={index} />
//               ))}
//             </AnimatePresence>
//           </LayoutGroup>
//         </Container>
//       </motion.div>
//     </>
//   );
// };

// export default TextTranslationPage;

import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  IconButton,
  Button,
  Paper,
  keyframes,
  Box,
} from "@mui/material";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import TopNavigation from "../../components/TopNavigation";
import AppCtx, { TRANSLATION_KEYS } from "../../store/app-state-context";
import GeneralController from "../../controllers/general.controller";
import { TranslationResponseType } from "../../types/common/common.types";
import TranslateIcon from "@mui/icons-material/Translate";
import SendIcon from "@mui/icons-material/Send";

// Define the animated gradient keyframes using a template literal
const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// OriginalTextCard component with the same styling as in your first snippet
const OriginalTextCard: React.FC<{ changeText: React.Dispatch<React.SetStateAction<string>> }> = ({
  changeText,
}) => {
  const ctx = useContext(AppCtx);
  const t = (key: TRANSLATION_KEYS) =>
    ctx.translations[ctx.nativeLanguage]
      ? ctx.translations[ctx.nativeLanguage][key]
      : ctx.translations["en"][key];
  const [state, setState] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ marginBottom: "2rem" }}
    >
      <Card
        sx={{
          maxWidth: "90%",
          width: "90%",
          mx: "auto",
          mt: 4,
          p: 3,
          borderRadius: 4,
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
          background: "linear-gradient(135deg, #ffffff, #f8f9fa)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          },
        }}
      >
        <CardHeader
          title={
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Typography variant="h5" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "primary.main" }}>
                {t("WRITE_TEXT_TO_TRANSLATE")}
              </Typography>
            </motion.div>
          }
          subheader={
            <Typography variant="body2" sx={{ color: "text.secondary", fontFamily: "Poppins, sans-serif" }}>
              {t("TEXT_WILL_BE_TRANSLATED")}
            </Typography>
          }
        />
        <CardContent>
          <motion.div whileFocus={{ scale: 1.02 }}>
            <TextField
              variant="outlined"
              minRows={4}
              multiline
              fullWidth
              value={state}
              onChange={(e) => setState(e.target.value)}
              onBlur={() => changeText(state)}
              placeholder="Enter text here..."
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "text.primary",
                  background: "rgba(245,245,245,0.8)",
                  borderRadius: 2,
                  "& fieldset": { borderColor: "rgba(0,0,0,0.3)", transition: "all 0.3s ease" },
                  "&:hover fieldset": { borderColor: "primary.main", boxShadow: "0 0 15px rgba(0,0,0,0.1)" },
                  "&.Mui-focused fieldset": { borderColor: "primary.main", boxShadow: "0 0 20px rgba(0,0,0,0.15)" },
                },
                "& .MuiInputLabel-root": { color: "text.secondary", fontFamily: "Poppins" },
              }}
              InputProps={{ style: { fontSize: "1.2rem", fontFamily: "Poppins", padding: "10px" } }}
            />
          </motion.div>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end", pr: 2, pb: 2 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <IconButton
              sx={{
                color: "primary.main",
                backgroundColor: "rgba(0,0,0,0.05)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.1)", boxShadow: "0 0 15px rgba(0,0,0,0.1)" },
                transition: "all 0.3s ease",
              }}
            >
              <TranslateIcon fontSize="large" />
            </IconButton>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              endIcon={
                <motion.div animate={{ rotate: [0, 20, -20, 0], x: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <SendIcon sx={{ color: "white" }} />
                </motion.div>
              }
              sx={{
                color: "white",
                border: "2px solid rgba(255,255,255,0.5)",
                borderRadius: "15px",
                px: 4,
                py: 1.5,
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "1.1rem",
                letterSpacing: "1px",
                background: "linear-gradient(45deg, #2575fc 0%, #6a11cb 100%)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)",
                  boxShadow: "0 0 25px rgba(0,0,0,0.2)",
                },
              }}
            >
              {t("TRANSLATE")}
            </Button>
          </motion.div>
        </CardActions>
      </Card>
    </motion.div>
  );
};

// Translation component with animated paper styling
const Translation: React.FC<{ lang_code: string; text: string; index: number }> = ({
  lang_code,
  text,
  index,
}) => {
  const ctx = useContext(AppCtx);
  const [translation, setTranslation] = useState("");
  const [translationAvailable, setTranslationAvailable] = useState(false);

  useEffect(() => {
    if (text.trim() !== "") {
      GeneralController.getTranslation(text, lang_code).then((data: TranslationResponseType) => {
        setTranslation(data.translatedText);
        setTranslationAvailable(true);
      });
    }
  }, [text, lang_code]);

  if (!translationAvailable || text.trim() === "") return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.4, ease: "backOut", delay: index * 0.1 }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      style={{ originX: 0, width: "90%", margin: "0 auto", marginBottom: "1.5rem" }}
    >
      <Paper
        sx={{
          p: 3,
          background: `linear-gradient(45deg, ${
            index % 5 === 0
              ? "#f6d365"
              : index % 5 === 1
              ? "#84fab0"
              : index % 5 === 2
              ? "#ff9a9e" // New: Pink
              : index % 5 === 3
              ? "#8ec5fc"// New: Blue
              : "#96e6a1" // New: Green
          } 0%, ${
            index % 5 === 0
              ? "#fda085"
              : index % 5 === 1
              ? "#8fd3f4"
              : index % 5 === 2
              ? "#fad0c4" // New: Peach
              : index % 5 === 3
              ? "#e0c3fc" // New: Lavender
              : "#d4fc79" // New: Mint
          } 100%)`,
          borderRadius: 3,
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "200%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            transition: "left 0.6s",
          },
          "&:hover:before": {
            left: "100%",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "1.2rem",
            color: "#2c3e50",
            lineHeight: 1.6,
          }}
        >
          {translation}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#7f8c8d",
            display: "block",
            mt: 1,
          }}
        >
          ({ctx.availableLanguages[lang_code]})
        </Typography>
      </Paper>
    </motion.div>
  );
};

const TextTranslationPage: React.FC = () => {
  const ctx = useContext(AppCtx);
  const [text, setText] = useState("");

  // Hide BottomNavigation when this page is opened
  useEffect(() => {
    ctx.setShowBottomNavigation(false);
    return () => ctx.setShowBottomNavigation(true); // Restore when leaving
  }, [ctx]);

  return (
    <>
      <TopNavigation />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            background: "linear-gradient(-45deg, #23a6d5, #e73c7e, #23a6d5, #e73c7e)",
            backgroundSize: "400% 400%",
            animation: `${gradientBackground} 15s ease infinite`,
            transition: "background 1s ease-in-out",
          }}
        />
        <Container sx={{ minHeight: "100vh", py: 4 }}>
          <LayoutGroup>
            <OriginalTextCard changeText={setText} />
            <AnimatePresence>
              {Array.from(ctx.favouriteLanguages).map((lang, index) => (
                <Translation key={lang} lang_code={lang} text={text} index={index} />
              ))}
            </AnimatePresence>
          </LayoutGroup>
        </Container>
      </motion.div>
    </>
  );
};

export default TextTranslationPage;