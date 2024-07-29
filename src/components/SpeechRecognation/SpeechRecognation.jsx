import { IconMicrophone } from "@tabler/icons-react";
import React, { useEffect } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
// import SpeechRecognationComponent from "../SpeechRecognation/"
const SpeechRecognationComponent = ({ setSourceText }) => {
  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    setSourceText(transcript);
  }, [transcript, setSourceText]);

  const handlingVoiceRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continue: true });
    }
  };

  return (
    <div>
      <IconMicrophone
        size={22}
        className="text-white "
        onClick={handlingVoiceRecording}
      />
    </div>
  );
};

export default SpeechRecognationComponent;
