import React, { useState } from "react";
import ZoomMtgEmbedded from "@zoom/meetingsdk/embedded";

const ZoomSDKComponent = ({
  authEndpoint,
  sdkKey,
  meetingNumber,
  passWord,
  role,
  userName,
  userEmail,
  registrantToken,
  zakToken,
}) => {
  const [inMeeting, setInMeeting] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const client = ZoomMtgEmbedded.createClient();

  function getSignature(e) {
    e.preventDefault();
    setButtonDisabled(true);

    fetch(authEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        startMeeting(response.signature);
      })
      .catch((error) => {
        console.error(error);
        setButtonDisabled(false);
      });
  }

  function startMeeting(signature) {
    let meetingSDKElement = document.getElementById("meetingSDKElement");
    client
      .init({
        zoomAppRoot: meetingSDKElement,
        language: "pt-PT",
        customize: {
          video: {
            isResizable: true,
            viewSizes: {
              default: { width: 600, height: 600 },
              ribbon: {
                width: 400,
                height: 600,
              },
            },
          },
        },
        patchJsMedia: true,
        leaveOnPageUnload: true,
      })
      .then(() => {
        client
          .join({
            signature: signature,
            sdkKey: sdkKey,
            meetingNumber: meetingNumber,
            password: passWord,
            userName: userName,
            userEmail: userEmail,
            tk: registrantToken,
            zak: zakToken,
          })
          .then(() => {
            console.log("joined successfully");
            setInMeeting(true);
          })
          .catch((error) => {
            console.log(error);
            setButtonDisabled(false);
          });
      })
      .catch((error) => {
        console.log(error);
        setButtonDisabled(false);
      });
  }

  function leaveMeeting() {
    client
      .leaveMeeting()
      .then(() => {
        setInMeeting(false);
        console.log("left the meeting");
        setButtonDisabled(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <div id="meetingSDKElement">
        {/* Zoom Meeting SDK Component View Rendered Here */}
      </div>
      {inMeeting ? (
        <button onClick={leaveMeeting}>Sair da Sessão</button>
      ) : (
        <button onClick={getSignature} disabled={buttonDisabled}>
          Entrar na Sessão
        </button>
      )}
    </div>
  );
};

export default ZoomSDKComponent;
