import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNavigation from "../../components/TopNavigation";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import FlashCard from "../../components/flashcard";
import EndGame from "../../components/EndGame";

export interface GameStep {
  imageUrl: string;
  target_text: string;
  target_language: string;
  options: { correctIndex: number; text: [string, string] };
}

const gameSteps: GameStep[] = [
  {
    imageUrl:
      "https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    target_text: "Children",
    target_language: "te",
    options: { correctIndex: 1, text: ["పిల్లి", "పిల్లలు"] },
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1680985551022-ad298e8a5f82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    target_text: "Mobile",
    target_language: "kn",
    options: {
      correctIndex: 0,
      text: ["ಮೊಬೈಲ್", "ಪುಸ್ತಕ"],
    },
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    target_text: "Girl",
    target_language: "hi",
    options: {
      correctIndex: 1,
      text: ["लड़का", "लड़की"],
    },
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600",
    target_text: "Dog",
    target_language: "ml",
    options: {
      correctIndex: 1,
      text: ["പൂച്ച", "നായ"],
    },
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1679690884082-eaba9eccdcb5?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    target_text: "Bat",
    target_language: "hi",
    options: {
      correctIndex: 1,
      text: ["क्रिकेट की गेंद", "क्रिकेट का बल्ला"],
    },
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    target_text: "Cat",
    target_language: "ta",
    options: {
      correctIndex: 0,
      text: ["பூனை", "நாய்"],
    },
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    target_text: "Horse",
    target_language: "hi",
    options: {
      correctIndex: 0,
      text: ["घोड़ा", "बंदर"],
    },
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/12860439/pexels-photo-12860439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    target_text: "Camera",
    target_language: "te",
    options: {
      correctIndex: 1,
      text: ["చెంచా", "కెమెరా"],
    },
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/4168645/pexels-photo-4168645.jpeg",
    target_text: "Biscuits",
    target_language: "es",
    options: {
      correctIndex: 0,
      text: ["Galletas", "sopa"],
    },
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1670413/pexels-photo-1670413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    target_text: "Monkey",
    target_language: "as",
    options: {
      correctIndex: 1,
      text: ["মকৰা", "বান্দৰ"],
    },
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1679656264640-90dbbaccc2b0?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    target_text: "Cricket ball",
    target_language: "en",
    options: {
      correctIndex: 1,
      text: ["Cricket bat", "Cricket ball"],
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    target_text: "Bicycle",
    target_language: "gu",
    options: {
      correctIndex: 1,
      text: ["બાઇક", "સાયકલ"],
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1588413335653-34b770bca7c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    target_text: "Coconut",
    target_language: "kn",
    options: {
      correctIndex: 0,
      text: [ "ತೆಂಗಿನಕಾಯಿ","ಅಡಿಕೆ"],
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    target_text: "Honey",
    target_language: "te",
    options: {
      correctIndex: 1,
      text: ["చక్కెర", "తేనె"],
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1686839965458-0c6b07f4ad45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    target_text: "Butterfly",
    target_language: "hi",
    options: {
      correctIndex: 0,
      text: ["तितली", "कबूतर"],
    },
  },
];

export default function QuizScreen() {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const navigate = useNavigate();
  const [steps, setSteps] = useState<GameStep[]>(gameSteps);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // steps.length && createOptions();
    setLoaded(true);
  }, [steps]);

  const isStepOptional = (step: number) => {
    return step !== attempted;
  };

  const isNextPossible = (step: number) => {
    return step === attempted;
  };
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setAttempted(0);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    setAttempted(0);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleEnd = () => {
    // setActiveStep(0);
    navigate(`/game`);
  };

  return (
    <>
      <TopNavigation />
      {loaded ? (
        <Box sx={{ width: "100%", marginTop: 4 }}>
          <Stepper
            activeStep={activeStep}
            sx={{
              width: "100%",
              ".MuiStep-root": {
                paddingLeft: 0,
              },
            }}
          >
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={index} {...stepProps}>
                  <StepLabel {...labelProps}></StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <EndGame points={score} />
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleEnd}>End Game</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  m: 2,
                  alignItems: "center",
                }}
              >
                <FlashCard
                  stepNumber={activeStep}
                  step={steps[activeStep]}
                  settingScore={setScore}
                  settingAttempted={setAttempted}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}
                {isNextPossible(activeStep) && (
                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Box>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
