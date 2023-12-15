import { createContext, useContext, useEffect, useState } from "react";
import { Web5 } from "@web5/api";

interface AppContextProps {
  web5: any;
  myDid: any;
  recipientDid: string;
  submitStatus: string;
  didCopied: boolean;
  formData: any;
  setFormData: (e: any) => void;
  handleCopyDid: () => void;
  fetchFlightMessages: () => void;

  handleSubmit: () => void;
}

export const AppContext = createContext<AppContextProps>({
  web5: null,
  myDid: "",
  recipientDid: "",
  submitStatus: "",
  didCopied: false,
  formData: {},
  setFormData: (e) => null,
  handleCopyDid: () => null,
  fetchFlightMessages: () => null,
  handleSubmit: () => null,
});

export default function AppProvider({ children }: any) {
  const [web5, setWeb5] = useState<any>();
  const [myDid, setMyDid] = useState("");
  const [recipientDid, setRecipientDid] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");
  const [didCopied, setDidCopied] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const initWeb5 = async () => {
      try {
        const { web5, did } = await Web5.connect({ sync: "5s" });
        setWeb5(web5);
        setMyDid(did);
        console.log(did);
        if (web5 && did) {
          await configureProtocol(web5, did);
        }
      } catch (err) {
        console.log("An error occured" + err);
      }
    };
    initWeb5();
  }, []);

  const installLocalProtocol = async (web5, protocolDefinition) => {
    return await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });
  };

  const installRemoteProtocol = async (web5, did, protocolDefinition) => {
    const { protocol } = await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });
    return await protocol.send(did);
  };

  //   querying local protocol
  const queryLocalProtocol = async (web5) => {
    return await web5.dwn.protocols.query({
      message: {
        filter: {
          protocol: "https://explorar.netlify.app",
        },
      },
    });
  };

  //   querying remote protocol
  const queryRemoteProtocol = async (web5, did) => {
    return await web5.dwn.protocols.query({
      from: did,
      message: {
        filter: {
          protocol: "https://explorar.netlify.app",
        },
      },
    });
  };

  //   define we protocol
  const configureProtocol = async (web5, did) => {
    const protocolDefinition = defineNewProtocol();
    const protocolUrl = protocolDefinition.protocol;

    const { protocols: localProtocols, status: localProtocolStatus } =
      await queryLocalProtocol(web5);
    if (localProtocolStatus.code !== 200 || localProtocols.length === 0) {
      const result = await installLocalProtocol(web5, protocolDefinition);
      console.log({ result });
      console.log("Protocol installed locally");
    }

    const { protocols: remoteProtocols, status: remoteProtocolStatus } =
      await queryRemoteProtocol(web5, did);
    if (remoteProtocolStatus.code !== 200 || remoteProtocols.length === 0) {
      const result = await installRemoteProtocol(web5, did, protocolDefinition);
      console.log({ result });
      console.log("Protocol installed remotely");
    }
  };

  //   install protocol
  const defineNewProtocol = () => {
    return {
      protocol: "https://explorar.netlify.app",
      published: true,
      types: {
        flights: {
          schema: "https://explorar.netlify.app/schemas/flightSchema",
          dataFormats: ["application/json"],
        },
        hotels: {
          schema: "https://explorar.netlify.app/schemas/hotelsSchema",
          dataFormats: ["application/json"],
        },
        carrentals: {
          schema: "https://explorar.netlify.app/schemas/carRentalsSchema",
          dataFormats: ["application/json"],
        },
        restaurants: {
          schema: "https://explorar.netlify.app/schemas/restaurantsSchema",
          dataFormats: ["application/json"],
        },
      },
      structure: {
        flights: {
          $actions: [
            { who: "anyone", can: "read" },
            { who: "anyone", can: "write" },
            { who: "author", of: "flights", can: "read" },
            { who: "recipient", of: "flights", can: "read" },
          ],
        },
        hotels: {
          $actions: [
            { who: "anyone", can: "read" },
            { who: "anyone", can: "write" },
            { who: "author", of: "hotels", can: "read" },
            { who: "recipient", of: "hotels", can: "read" },
          ],
        },
        carrentals: {
          $actions: [
            { who: "anyone", can: "read" },
            { who: "anyone", can: "write" },
            { who: "author", of: "carrentals", can: "read" },
            { who: "recipient", of: "carrentals", can: "read" },
          ],
        },
        restaurants: {
          $actions: [
            { who: "anyone", can: "read" },
            { who: "anyone", can: "write" },
            { who: "author", of: "restaurants", can: "read" },
            { who: "recipient", of: "restaurants", can: "read" },
          ],
        },
      },
    };
  };

  // write to DWN
  const writeToDWN = async (formData: any) => {
    try {
      const exploraMessageProtocol = defineNewProtocol();
      const record = await web5?.dwn.records.write({
        data: formData,
        message: {
          protocol: exploraMessageProtocol.protocol,
          protocolPath: "flights",
          schema: exploraMessageProtocol.types.flights.schema,
          recipient: myDid,
        },
      });

      // if (status.code === 200) {
      //   console.log("print currForm record", {
      //     ...formData,
      //     recordId: record.id,
      //   });
      // }

      console.log("flight message written to DWN", { record });
      return record;
    } catch (error) {
      console.error("Error writing  message to DWN", error);
    }
  };

  // construct message
  const constructMessage = (recipientDid: any) => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    return {
      text: formData,
      timestamp: `${currentDate}Direct ${currentTime}`,
      sender: myDid,
      type: "flights",
      recipientDid: recipientDid,
    };
  };

  // fetch message

  // if (response.status.code === 200) {
  //   const filghtsMessages = await Promise.all(
  //     response.records.map(async (record) => {
  //       const data = await record.data.json();
  //       return {
  //         ...data,
  //         recordId: record.id,
  //       };
  //     }),
  //   );
  //   console.log(filghtsMessages, "I received filghtsMessage");
  //   return filghtsMessages;
  // } else {
  //   console.error("Error fetching sent messages:", response.status);
  //   return [];
  // }

  const fetchFlightMessages = async () => {
    console.log("Fetching  messages...");
    try {
      const response = await web5.dwn.records.query({
        from: myDid,
        message: {
          filter: {
            protocol: "https://explorar.netlify.app",
            schema: "https://explorar.netlify.app/schemas/flightSchema",
          },
        },
      });
      if (response) console.log("response", response);
    } catch (error) {
      console.error("Error in fetchFlightMessages:", error);
    }
  };

  // handle submit
  const handleSubmit = async () => {
    setSubmitStatus("Submitting...");

    try {
      let messageObj;
      let record;

      console.log("Sending direct message...");
      messageObj = constructMessage(recipientDid);
      record = await writeToDWN(messageObj);

      if (record) {
        console.log(record, "successfully write to record");
        // const { status } = await record.send(targetDid);
        // console.log("Send record status in handleSubmit", status);
        // setSubmitStatus("Message submitted successfully");
        // await fetchFlightMessages();
      } else {
        throw new Error("Failed to create record");
      }
    } catch (error) {
      console.error("Error in handleSubmit", error);
      setSubmitStatus("Error submitting message: " + error);
    }
  };
  //   handle copy did
  const handleCopyDid = async () => {
    if (myDid) {
      try {
        await navigator.clipboard.writeText(myDid);
        setDidCopied(true);
        setTimeout(() => {
          setDidCopied(false);
        }, 4000);
      } catch (err) {
        console.error("Failed to copy DID: " + err);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        web5,
        myDid,
        recipientDid,
        submitStatus,
        didCopied,
        formData,
        setFormData,
        handleCopyDid,
        fetchFlightMessages,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    console.error("App context is used outside of its provider");
    // throw new Error("App context is used outside of its provider");
  }
  return context;
}
