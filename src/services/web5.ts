import { Web5 } from "@web5/api";

export const web5Connection = async () => {
  console.log("testing connection");
  const { web5, did: lekenzDid } = await Web5.connect();

  const { record } = await web5.dwn.records.create({
    data: "Hello, web5:",
    message: {
      dataFormat: "text/plain",
    },
  });
  const readResult = await record.data.text();

  // const updateResult = await record.update({
  //   data: "Hello, Web5! I Lekenz updated this record.",
  // });

  // const deleteResult = await record.delete();
  console.log("did", lekenzDid);

  console.log("update record", readResult);
};
