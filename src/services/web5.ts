import { Web5 } from "@web5/api";

export const web5Connection = async () => {
  console.log("testing connection");
  const { web5, did: lekenzDid } = await Web5.connect();

  const { record }: any = await web5.dwn.records.create({
    data: "Hello, web5:",
    message: {
      dataFormat: "application/json",
    },
  });
  const readResult = await record.data.text();

  // const updateResult = await record.update({
  //   data: "Hello, Web5! I Lekenz updated this record.",
  // });

  // const deleteResult = await record.delete();
  // console.log("did", lekenzDid);

  console.log("update record", readResult);
};

const exploraProtocolDefinition = {
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
