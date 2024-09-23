const gameinitialState = {
  sentences: [
    {
      test: "The quick brown fox jumps over the lazy dog.",
      level: "easy",
    },
    {
      test: "Coding is fun when you understand the logic behind it.",
      level: "easy",
    },
    {
      test: "HTML is the foundation of web pages and structures the content.",
      level: "easy",
    },
    {
      test: "CSS is used to style web pages and make them look visually appealing.",
      level: "easy",
    },
    {
      test: "JavaScript is versatile and used for both frontend and backend development.",
      level: "medium",
    },
    {
      test: "React hooks allow you to manage state and side effects in functional components.",
      level: "medium",
    },
    {
      test: "A closure is a function bundled together with references to its surrounding state.",
      level: "medium",
    },
    {
      test: "APIs enable communication between different software applications over the internet.",
      level: "medium",
    },
    {
      test: "Concurrency is about managing multiple tasks that start, run, and complete in overlapping time periods.",
      level: "hard",
    },
    {
      test: "Asynchronous programming allows for non-blocking code execution, enabling faster performance in JavaScript applications.",
      level: "hard",
    },
    {
      test: "Object-oriented programming is a paradigm based on the concept of objects, which can contain data and methods.",
      level: "hard",
    },
    {
      test: "Functional programming focuses on pure functions and immutability to avoid side effects in application logic.",
      level: "hard",
    },
    {
      test: "Distributed systems involve multiple computers working together to solve a large computational problem.",
      level: "hard",
    },
    {
      test: "Optimizing algorithms can lead to significant improvements in performance and efficiency.",
      level: "hard",
    },
  ],
  level: "",
  highScore: 0,
  secondRemaining: null,
};

export default function gameReducer(state = gameinitialState, action) {
  switch (action.type) {
    case "game/sentences":
      return {
        ...state,
        sentences: action.payload,
      };

    case "game/level":
      return {
        ...state,
        level: action.payload,
      };

    default:
      return state;
  }
}

export function sentences(sentences) {
  return { type: "game/sentences", payload: sentences };
}

export function level(level) {
  return { type: "game/level", payload: level };
}
