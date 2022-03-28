import { Router } from "express";

import { eGridData } from "../data-provider/egrid-data";

type RequestParams = { paname: string };
const router = Router();

const filteredData = eGridData.filter((data) => {
  if (data.LAT && data.LON && data.PNAME && data.PLNGENAN) {
    return true;
  } else {
    return false;
  }
});
router.get("/egrid-data", (req, res, next) => {
  res.status(200).json({ data: filteredData });
});

router.get("/egrid-data/:paname", (req, res, next) => {
  const params = req.params as RequestParams;
  const paname = params.paname;
  const matchingData = filteredData.filter((item) =>
    item.PNAME.includes(paname)
  );
  if (matchingData && matchingData.length > 0) {
    return res.status(200).json({ message: "Success", data: matchingData });
  }
  res.status(404).json({ message: "Could not find any plant name.", data: [] });
});

export default router;
