import { useEffect, useState } from "react";

const ChatRoom = ({ roomId }) => {
  const [serverUrl, setServerUrl] = useState('https://localhost1234');

  useEffect(() => { 
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);

  return <>Content</>
}