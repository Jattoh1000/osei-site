import React, { useState, useEffect } from "react";
import "./App.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";

const LoveLanguagesApp = () => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [showLove, setShowLove] = useState(false);
  const [heartBeat, setHeartBeat] = useState(false);
  const [showMemory, setShowMemory] = useState(null);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [showPhoto, setShowPhoto] = useState(false);

  // Personalized memories for Grace, Ama, and Princess
  const memories = [
    "The first time I saw your beautiful smile",
    "Your laughter that brightens my darkest days",
    "Your gentle touch that comforts my soul",
    "Your eyes that sparkle like the morning sun",
    "Your voice that sounds like sweet music",
    "Your kindness that knows no bounds",
    "Your intelligence that constantly amazes me",
    "Your courage that inspires me every day",
    "Your warmth that makes every moment special",
    "Your strength that holds us together",
    "Your creativity that colors our world",
    "Your patience that teaches me to be better",
    "Your humor that keeps me laughing",
    "Your wisdom that guides us forward",
    "Your love that heals my heart",
    "Your dedication that moves mountains",
    "Your passion that sets my soul on fire",
    "Your generosity that touches everyone",
    "Your beauty that takes my breath away",
    "Ama and Your love that completes my world",
  ];

  const photos = [
    { img: img1, caption: "Our first wonderful moment together" },
    { img: img2, caption: "Grace's beautiful smile that lights up my world" },
    { img: img3, caption: "Ama's radiant energy that inspires me daily" },
    { img: img4, caption: "Princess's gentle presence that comforts me" },
  ];

  const lovePhrases = [
    { language: "English", phrase: "I love you", phonetic: "I love you" },
    { language: "French", phrase: "Je t'aime", phonetic: "Zhuh tem" },
    { language: "Spanish", phrase: "Te amo", phonetic: "Tay ah-mo" },
    { language: "Italian", phrase: "Ti amo", phonetic: "Tee ah-mo" },
    {
      language: "German",
      phrase: "Ich liebe dich",
      phonetic: "Ish lee-beh dish",
    },
    {
      language: "Portuguese",
      phrase: "Eu te amo",
      phonetic: "Eh-oo chee ah-mo",
    },
    {
      language: "Russian",
      phrase: "Я тебя люблю",
      phonetic: "Ya te-byah lyub-lyu",
    },
    { language: "Japanese", phrase: "愛してる", phonetic: "Aishiteru" },
    { language: "Korean", phrase: "사랑해", phonetic: "Saranghae" },
    { language: "Mandarin", phrase: "我爱你", phonetic: "Wǒ ài nǐ" },
    { language: "Arabic", phrase: "أحبك", phonetic: "Uhibbuka" },
    {
      language: "Hindi",
      phrase: "मैं तुमसे प्यार करता हूँ",
      phonetic: "Main tumse pyaar karta hoon",
    },
    {
      language: "Swedish",
      phrase: "Jag älskar dig",
      phonetic: "Yahg el-skar day",
    },
    { language: "Dutch", phrase: "Ik hou van jou", phonetic: "Ik how van yow" },
    { language: "Greek", phrase: "Σε αγαπώ", phonetic: "Se agapó" },
    {
      language: "Turkish",
      phrase: "Seni seviyorum",
      phonetic: "Sen-ee sev-ee-yor-um",
    },
    { language: "Polish", phrase: "Kocham Cię", phonetic: "Ko-ham chye" },
    { language: "Thai", phrase: "ฉันรักคุณ", phonetic: "Chan rak khun" },
    { language: "Vietnamese", phrase: "Tôi yêu bạn", phonetic: "Toy yew ban" },
    { language: "Hebrew", phrase: "אני אוהב אותך", phonetic: "Ani ohev otakh" },
  ];

  useEffect(() => {
    if (completedTasks > 0 && completedTasks <= 20) {
      setShowMemory(completedTasks - 1);
      const timer = setTimeout(() => setShowMemory(null), 6000); // Increased from 3s to 6s
      return () => clearTimeout(timer);
    }
  }, [completedTasks]);

  useEffect(() => {
    if (showLove) {
      const message =
        "Grace, Ama, Princess - no matter how you say it, my love for you three transcends all languages. It's in every heartbeat, every glance, every moment we share. You are my always, my forever, my everything.";
      let i = 0;
      const typing = setInterval(() => {
        if (i < message.length) {
          setTypedMessage(message.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typing);
          setTimeout(() => setShowFinalMessage(true), 1500);
        }
      }, 40); // Slightly faster typing speed

      return () => clearInterval(typing);
    }
  }, [showLove]);

  const handleCompleteTask = () => {
    if (completedTasks < 20) {
      setCompletedTasks((prev) => {
        const newCount = prev + 1;
        if (newCount === 20) {
          setTimeout(() => setShowLove(true), 2000);
        }
        return newCount;
      });

      setHeartBeat(true);
      setTimeout(() => setHeartBeat(false), 1000);

      if ((completedTasks + 1) % 5 === 0) {
        setShowPhoto(true);
        setCurrentPhoto(Math.floor((completedTasks + 1) / 5) - 1);
        setTimeout(() => setShowPhoto(false), 6000); // Increased from 3s to 6s
      }
    }
  };

  const handleReset = () => {
    setCompletedTasks(0);
    setShowLove(false);
    setShowFinalMessage(false);
    setTypedMessage("");
  };

  return (
    <div className="app">
      <div className="sky">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="shooting-stars"></div>
      </div>

      <div className="hearts-container">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.3,
              transform: `scale(${Math.random() * 0.7 + 0.3})`,
            }}
          >
            ❤
          </div>
        ))}
      </div>

      <div className="container">
        <h1 className="title">For Grace, Ama & Princess</h1>

        <div className="subtitle">My love for you three in 20 languages</div>

        <div
          className={`heart ${heartBeat ? "beat" : ""} ${
            completedTasks >= 20 ? "glow" : ""
          }`}
          onClick={handleCompleteTask}
        >
          ❤
        </div>

        <p className="instructions">
          {completedTasks < 20
            ? `Click the heart ${
                20 - completedTasks
              } more time(s) to reveal my love`
            : "You've unlocked all the love in my heart"}
        </p>

        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${(completedTasks / 20) * 100}%` }}
          ></div>
          <div className="progress-text">{completedTasks}/20</div>
        </div>

        {showMemory !== null && (
          <div className="memory-bubble">
            <div className="memory-content">
              What I love about you #{showMemory + 1}: {memories[showMemory]}
            </div>
          </div>
        )}

        {/* {showPhoto && (
          <div className="photo-modal">
            <div className="photo-content">
              <div className="photo-placeholder">
                Precious Memory #{currentPhoto + 1} with Grace, Ama & Princess
              </div>
              <div className="photo-caption">A moment I'll cherish forever</div>
            </div>
          </div>
        )} */}

        {showPhoto && (
          <div className="photo-modal">
            <div className="photo-content">
              <img
                src={photos[currentPhoto].img}
                alt="Special memory"
                className="memory-photo"
              />
              <div className="photo-caption">
                {photos[currentPhoto].caption}
              </div>
            </div>
          </div>
        )}

        {showLove && (
          <div className="love-messages">
            <h2>For Grace, Ama & Princess - in every language I know...</h2>

            <div className="love-grid">
              {lovePhrases.map((item, index) => (
                <div key={index} className="love-card">
                  <div className="language">{item.language}</div>
                  <div className="phrase">{item.phrase}</div>
                  <div className="phonetic">{item.phonetic}</div>
                </div>
              ))}
            </div>

            <div className="final-message-container">
              <div className="typed-message">{typedMessage}</div>
              {showFinalMessage && (
                <div className="eternal-love">
                  <div className="infinity-symbol">∞</div>
                  <div className="eternal-text">
                    My love for you three is infinite
                  </div>
                  <div className="names">
                    <span className="name">Grace</span>
                    <span className="name">Ama</span>
                    <span className="name">Princess</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {completedTasks > 0 && (
          <button className="reset-btn" onClick={handleReset}>
            Feel My Love Again
          </button>
        )}
      </div>

      <div className="petals">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 25}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            ❀
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoveLanguagesApp;
