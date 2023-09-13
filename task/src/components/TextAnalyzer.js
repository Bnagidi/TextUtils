import "./TextAnalyzerStyle.css";
import 'bootstrap/dist/css/bootstrap.css';

import React, { useState, useEffect } from 'react';

function TextAnalyzer() {
  const [inputText, setInputText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [statementCount, setStatementCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [exclamationCount, setExclamationCount] = useState(0);
  const [minutesToRead, setMinutesToRead] = useState(0);

  //notification

  const [isUppercaseNotificationVisible, setIsUppercaseNotificationVisible] = useState(false);
  const [isLowercaseNotificationVisible, setIsLowercaseNotificationVisible] = useState(false);
  const [isTextClearedNotificationVisible, setIsTextClearedNotificationVisible] = useState(false);

  useEffect(() => {

    // Function to analyze text and update statistics

    const analyzeText = () => {
      const text = inputText.trim();
      const words = text.split(/\s+/).filter(word => word.length > 0);
      const characters = text.replace(/\s/g, '').split('');
      const statements = text.split(/[.!?]+/).filter(statement => statement.length > 0);
      const questions = text.split('?').length - 1;
      const exclamations = text.split('!').length - 1;

      // Update state with the calculated statistics

      setWordCount(words.length);
      setCharacterCount(characters.length);
      setStatementCount(statements.length);
      setQuestionCount(questions);
      setExclamationCount(exclamations);

      // Calculate estimated minutes to read based on average reading speed

      const wordsPerMinute = 200; // Average reading speed
      const estimatedMinutes = Math.ceil(words.length / wordsPerMinute);
      setMinutesToRead(estimatedMinutes);
    };
    analyzeText();

  }, [inputText]);

  const handleConvertToUppercase = () => {
    const uppercaseText = inputText.toUpperCase();
     setInputText(uppercaseText);


    //it will display notification

    setIsUppercaseNotificationVisible(true);

    // for removing Notification automatically after 5sec

    setTimeout(() => {
      setIsUppercaseNotificationVisible(false);
    }, 5000);

  };
  const handleCaptalize =() =>{
    const capitalText= inputText.split(' ')
    .map((word) => {
       
        // Capitalize the first letter of subsequent words
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    )
    .join(' ');
    setInputText(capitalText)

  }

  const handleConvertToLowercase = () => {
    const lowercaseText = inputText.toLowerCase();
    setInputText(lowercaseText);

    //it will display notification

    setIsLowercaseNotificationVisible(true);

    //for removing notif after 5sec
    setTimeout(() => {
      setIsLowercaseNotificationVisible(false);
    }, 5000);

  }
  const handleClearText = () => {
    const confirmation = window.confirm('Do you want to delete the text');
    if (confirmation) {
      setInputText('');
      //it will display notification
      setIsTextClearedNotificationVisible(true);
      //for removing notif after 5sec
      setTimeout(() => {
        setIsTextClearedNotificationVisible(false);
      }, 5000);

    }
  };
  return (
    <div className="textanalyze">
      <div class="container text-start">
        <div className="djs">
          <div>
            <h1 >Enter The Text To Analyze Below</h1>

            {}
            <textarea
              className="form-control textareaincrease"
              id="floatingTextarea"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea><br />
          </div>
          <div className="jhj">
            <button type="button" class="btn btn-primary btn-space" onClick={handleConvertToUppercase}>Convert to uppercase</button>
            <button type="button" class="btn btn-primary btn-space" onClick={handleConvertToLowercase}>Convert to lowercase</button>
            <button type="button" class="btn btn-primary btn-space" onClick={handleClearText}>Clear Text</button>
            <button type="button" class="btn btn-primary btn-space" onClick={handleCaptalize}>Captalize</button>
          </div><br />
          <h2>Your Text Summary</h2>
          <div>
            <p> <b>{wordCount} </b>  words,
              <b>{characterCount}</b> characters,  <b>{statementCount}</b> statements,
              <b>{questionCount}</b> questions,
              <b>{exclamationCount}</b>exclamations</p>
            <p> {minutesToRead} Minutes Read</p>
          </div>
          <h2>Preview</h2>
          <div>{inputText}</div>
        </div>
      </div>
      
      {/* for uppercase notification */}
      {isUppercaseNotificationVisible && (
        <div className=" container-fluid notification text-start">
          <b>Success</b>  : Converted to Uppercase
        </div>
      )}

      {/* for lowercase notification */}
      {isLowercaseNotificationVisible && (
        <div className=" container-fluid notification text-start">
          <b>Success</b>  : Converted to Lowercase
        </div>
      )}
      {/*for text cleared notification */}
      {isTextClearedNotificationVisible && (
        <div className=" container-fluid notification text-start">
          <b>Success</b> : Text cleared
        </div>
      )}
    </div>
  )
}
export default TextAnalyzer;                                                                                                                                                                                                                                                                                                                                                                                                   