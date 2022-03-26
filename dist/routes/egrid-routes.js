"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const egrid_data_1 = require("../data-provider/egrid-data");
const router = (0, express_1.Router)();
// router.get("/", (req, res, next) => {
//   res.status(200).json({ data: eGridData });
// });
router.get("api/egrid-data", (req, res, next) => {
    res.status(200).json({ data: egrid_data_1.eGridData });
});
router.get("/api/egrid-data/:paname", (req, res, next) => {
    const params = req.params;
    const paname = params.paname;
    const matchingData = egrid_data_1.eGridData.filter((item) => item.PNAME.includes(paname));
    if (matchingData && matchingData.length > 0) {
        return res.status(200).json({ message: "Success", data: matchingData });
    }
    res.status(404).json({ message: "Could not find any plant name.", data: [] });
});
exports.default = router;
