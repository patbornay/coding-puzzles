import { useEffect, useState } from "react";

const ChatRoom = ({ roomId }) => {
  const [serverUrl, setServerUrl] = useState('https://localhost1234');

  useEffect(() => { 
    const connection = createConnection(serverUrl, roomId); // imagine its a real function
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);

  return <>Content</>
}

// wrapped use effect 
const useChatRoom = ({ serverUrl, roomId }) => {
  useEffect(() => {
    const options = {
      serverUrl,
      roomId
    };
    const connection = createConnnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId]);
}

const ChatRoom1 = ({roomId}) => {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  useChatRoom({serverUrl, roomId}); 
}