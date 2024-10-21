enum StallNames {
  GeneralStalls = "General Stalls",
  ResidentStalls = "Resident Stalls",
  C = "C 7am - 5pm",
  P = "P Preferred",
  AR = "AR 7am - 5pm",
  AR24 = "AR 24 Hr",
  X = "X Permit Stalls",
  MX = "MX Stalls",
  Patient = "Patient Stalls",
  PbS = "Pay by Space Stalls",
  Coin = "Coin Token Meter",
  Service = "Service Dept Service",
  E = "E-Plate Only Stalls",
  Handicap = "Handicap Stalls",
  HandicapVan = "Van Access Handicap Stalls",
  Medical = "UCI Medical Permit",
  Electric = "Electric Vehicle Stalls",
  Specialty = "Specialty Stalls/ Loading Zone",
  Temp = "Temp Closed",
}

export interface Stall {
  name: StallNames;
  maxCount: number;
  count: number;
  missingCount: number;
}

interface LotProperties {
  name: string;
  timeIn: string;
  timeOut: string;
  stalls: Stall[];
}

const templateStall: Stall = {
  name: StallNames.AR,
  maxCount: 0,
  count: 0,
  missingCount: 0,
};

const RedLots: Record<string, LotProperties> = {
  "Lot 80": {
    name: "Lot 80",
    timeIn: "-1",
    timeOut: "-1",
    stalls: [
      { ...templateStall, maxCount: 38 },
      { ...templateStall, name: StallNames.AR24, maxCount: 37 },
      { ...templateStall, name: StallNames.MX, maxCount: 6 },
      { ...templateStall, name: StallNames.Patient, maxCount: 88 },
      { ...templateStall, name: StallNames.Service, maxCount: 5 },
      { ...templateStall, name: StallNames.E, maxCount: 3 },
      { ...templateStall, name: StallNames.Handicap, maxCount: 13 },
      { ...templateStall, name: StallNames.HandicapVan, maxCount: 3 },
      { ...templateStall, name: StallNames.Specialty, maxCount: 1 },
    ],
  },
  "Lot 81": {
    name: "Lot 81",
    timeIn: "-1",
    timeOut: "-1",
    stalls: [
      { ...templateStall, maxCount: 49 },
      { ...templateStall, name: StallNames.MX, maxCount: 5 },
      { ...templateStall, name: StallNames.Service, maxCount: 4 },
      { ...templateStall, name: StallNames.Handicap, maxCount: 4 },
      { ...templateStall, name: StallNames.HandicapVan, maxCount: 4 },
      { ...templateStall, name: StallNames.Specialty, maxCount: 1 },
    ],
  },
  "Lot 83": {
    name: "Lot 83",
    timeIn: "-1",
    timeOut: "-1",
    stalls: [
      { ...templateStall, name: StallNames.GeneralStalls, maxCount: 55 },
      { ...templateStall, maxCount: 94 },
      { ...templateStall, name: StallNames.Handicap, maxCount: 7 },
      { ...templateStall, name: StallNames.HandicapVan, maxCount: 2 },
      { ...templateStall, name: StallNames.Specialty, maxCount: 308 },
    ],
  },
  "Lot 70": {
    name: "Lot 70",
    timeIn: "-1",
    timeOut: "-1",
    stalls: [
      { ...templateStall, name: StallNames.GeneralStalls, maxCount: 907 },
      { ...templateStall, name: StallNames.MX, maxCount: 5 },
      { ...templateStall, name: StallNames.Handicap, maxCount: 17 },
      { ...templateStall, name: StallNames.HandicapVan, maxCount: 3 },
      { ...templateStall, name: StallNames.Electric, maxCount: 20 },
      { ...templateStall, name: StallNames.Specialty, maxCount: 13 },
    ],
  },
  "Lot 16AE": {
    name: "Lot 16AE",
    timeIn: "-1",
    timeOut: "-1",
    stalls: [
      { ...templateStall, name: StallNames.ResidentStalls, maxCount: 77 },
      { ...templateStall, name: StallNames.Service, maxCount: 2 },
      { ...templateStall, name: StallNames.Handicap, maxCount: 1 },
      { ...templateStall, name: StallNames.HandicapVan, maxCount: 1 },
      { ...templateStall, name: StallNames.Specialty, maxCount: 3 },
      { ...templateStall, name: StallNames.Temp, maxCount: 27 },
    ],
  },
  "Lot 16AW": {
    name: "Lot 16AW",
    timeIn: "-1",
    timeOut: "-1",
    stalls: [
      { ...templateStall, name: StallNames.ResidentStalls, maxCount: 91 },
      { ...templateStall, name: StallNames.HandicapVan, maxCount: 4 },
      { ...templateStall, name: StallNames.Specialty, maxCount: 5 },
    ],
  },
  "Lot 16H": {
    name: "Lot 16H",
    timeIn: "-1",
    timeOut: "-1",
    stalls: [
      { ...templateStall, name: StallNames.GeneralStalls, maxCount: 247 },
      { ...templateStall, name: StallNames.P, maxCount: 169 },
      { ...templateStall, name: StallNames.PbS, maxCount: 16 },
    ],
  },
  "Lot 12A": {
    name: "Lot 12A",
    timeIn: "-1",
    timeOut: "-1",
    stalls: [
      { ...templateStall, maxCount: 193 },
      { ...templateStall, name: StallNames.X, maxCount: 9 },
      { ...templateStall, name: StallNames.MX, maxCount: 2 },
      { ...templateStall, name: StallNames.Service, maxCount: 1 },
      { ...templateStall, name: StallNames.Handicap, maxCount: 4 },
      { ...templateStall, name: StallNames.HandicapVan, maxCount: 6 },
      { ...templateStall, name: StallNames.Specialty, maxCount: 3 },
      { ...templateStall, name: StallNames.Temp, maxCount: 17 },
    ],
  },
  "Lot 16": {
    name: "Lot 16",
    timeIn: "-1",
    timeOut: "-1",
    stalls: [
      { ...templateStall, name: StallNames.C, maxCount: 233 },
      { ...templateStall, maxCount: 347 },
      { ...templateStall, name: StallNames.PbS, maxCount: 5 },
      { ...templateStall, name: StallNames.Service, maxCount: 1 },
      { ...templateStall, name: StallNames.E, maxCount: 6 },
      { ...templateStall, name: StallNames.Handicap, maxCount: 4 },
      { ...templateStall, name: StallNames.HandicapVan, maxCount: 3 },
      { ...templateStall, name: StallNames.Electric, maxCount: 6 },
      { ...templateStall, name: StallNames.Specialty, maxCount: 3 },
    ],
  },
  "Lot 13": {
    name: "Lot 13",
    timeIn: "-1",
    timeOut: "-1",
    stalls: [
      { ...templateStall, name: StallNames.ResidentStalls, maxCount: 13 },
      { ...templateStall, maxCount: 86 },
      { ...templateStall, name: StallNames.X, maxCount: 4 },
      { ...templateStall, name: StallNames.MX, maxCount: 10 },
      { ...templateStall, name: StallNames.PbS, maxCount: 11 },
      { ...templateStall, name: StallNames.Service, maxCount: 6 },
      { ...templateStall, name: StallNames.Handicap, maxCount: 7 },
      { ...templateStall, name: StallNames.HandicapVan, maxCount: 8 },
      { ...templateStall, name: StallNames.Specialty, maxCount: 2 },
    ],
  },
  "EH&S": {
    name: "EH&S",
    timeIn: "-1",
    timeOut: "-1",
    stalls: [
      { ...templateStall, name: StallNames.GeneralStalls, maxCount: 26 },
      { ...templateStall, maxCount: 8 },
      { ...templateStall, name: StallNames.AR24, maxCount: 1 },
      { ...templateStall, name: StallNames.X, maxCount: 2 },
      { ...templateStall, name: StallNames.MX, maxCount: 2 },
      { ...templateStall, name: StallNames.Service, maxCount: 1 },
      { ...templateStall, name: StallNames.Handicap, maxCount: 2 },
      { ...templateStall, name: StallNames.HandicapVan, maxCount: 1 },
      { ...templateStall, name: StallNames.Specialty, maxCount: 11 },
    ],
  },
  "Lot 85": {
    name: "Lot 85",
    timeIn: "-1",
    timeOut: "-1",
    stalls: [
      { ...templateStall, maxCount: 2 },
      { ...templateStall, name: StallNames.X, maxCount: 7 },
      { ...templateStall, name: StallNames.MX, maxCount: 2 },
      { ...templateStall, name: StallNames.Handicap, maxCount: 11 },
      { ...templateStall, name: StallNames.HandicapVan, maxCount: 3 },
      { ...templateStall, name: StallNames.Specialty, maxCount: 32 },
    ],
  },
  HSPS: {
    name: "HSPS",
    timeIn: "-1",
    timeOut: "-1",
    stalls: [
      { ...templateStall, name: StallNames.GeneralStalls, maxCount: 1617 },
      { ...templateStall, maxCount: 92 },
      { ...templateStall, name: StallNames.X, maxCount: 4 },
      { ...templateStall, name: StallNames.Patient, maxCount: 160 },
      { ...templateStall, name: StallNames.PbS, maxCount: 33 },
      { ...templateStall, name: StallNames.Service, maxCount: 14 },
      { ...templateStall, name: StallNames.Handicap, maxCount: 33 },
      { ...templateStall, name: StallNames.Electric, maxCount: 43 },
      { ...templateStall, name: StallNames.Specialty, maxCount: 51 },
    ],
  },
};

export default RedLots;
