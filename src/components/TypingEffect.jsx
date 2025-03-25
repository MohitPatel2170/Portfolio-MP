import { useEffect, useState } from "react";

// let tagIndex = 0;

// const typeingFun = () => {
//   tagLists[tagIndex].split("").map((c) => {
//     // setTimeout(() => setTag(...tag, c), 2000);
//     setTag((c) => tag + c);
//   });
// };

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    // let forward = true;
    const typingInterval = setInterval(() => {
      //   if (i == text.length) forward = false;

      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      }
      // else if (!forward) {
      //     forward = false;
      //     setDisplayText(displayText.substring(0, i));
      //     i--;
      //   }
      else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

const TypingEffect = () => {
  //   const [tag, setTag] = useState("font end developer");
  const displayText = useTypewriter("F ull stack developer", 200);

  //   const tagLists = [
  //     "Frontend developer",
  //     "Backend developer",
  //     "Full stack developer 😎",
  //   ];

  //   typeingFun();

  return <>{displayText}</>;
};

export default TypingEffect;
