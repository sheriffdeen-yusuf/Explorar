import { createContext, useContext, useEffect, useState } from "react";
import { Web5 } from "@web5/api";

interface AppContextProps {
  web5: any;
  myDid: any;
  recipientDid: string;
  submitStatus: string;
  didCopied: boolean;
  handleCopyDid: () => void;
}

export const AppContext = createContext<AppContextProps>({
  web5: null,
  myDid: "",
  recipientDid: "",
  submitStatus: "",
  didCopied: false,
  handleCopyDid: () => null,
});

export default function AppProvider({ children }: any) {
  const [web5, setWeb5] = useState<any>();
  const [myDid, setMyDid] = useState("");
  const [recipientDid, setRecipientDid] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");
  const [didCopied, setDidCopied] = useState(false);

  useEffect(() => {
    const initWeb5 = async () => {
      const { web5, did } = await Web5.connect({ sync: "5s" });
      setWeb5(web5);
      setMyDid(did);
      console.log(did);
      if (web5 && did) {
        console.log("configure protocol");
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
        handleCopyDid,
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
