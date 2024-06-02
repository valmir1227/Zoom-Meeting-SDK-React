import React from "react";
import "./App.css";
import ZoomSDKComponent from "./components/ZoomSDKComponent";

function App() {
  const authEndpoint = "http://localhost:4001";
  const sdkKey = "";
  const meetingNumber = "";
  const passWord = "";
  const role = 1;
  const userName = "Valmir Almeida";
  const userEmail = "almeidavalmir76@gmail.com";
  const registrantToken =
    "";
  const zakToken = "";

  return (
    <div className="App">
      <main>
        <ZoomSDKComponent
          authEndpoint={authEndpoint}
          sdkKey={sdkKey}
          meetingNumber={meetingNumber}
          passWord={passWord}
          role={role}
          userName={userName}
          userEmail={userEmail}
          registrantToken={registrantToken}
          zakToken={zakToken}
        />
      </main>
    </div>
  );
}

export default App;
