import { Patient } from '@/types/patient';

export const mockPatients: Patient[] = [
  {
    id: "PAT-1001",
    name: "Thomas Müller",
    age: 64,
    gender: "male",
    room: "Zimmer 104",
    condition: "Post-OP Herzchirurgie",
    riskLevel: "warning",
    vitals: {
      heartRate: 95,
      bloodPressureSys: 145,
      bloodPressureDia: 90,
      oxygenSat: 93,
      temperature: 37.8,
      timestamp: "10:45"
    },
    history: [
      { heartRate: 78, bloodPressureSys: 125, bloodPressureDia: 82, oxygenSat: 96, temperature: 37.0, timestamp: "08:00" },
      { heartRate: 85, bloodPressureSys: 135, bloodPressureDia: 86, oxygenSat: 95, temperature: 37.3, timestamp: "09:00" },
      { heartRate: 95, bloodPressureSys: 145, bloodPressureDia: 90, oxygenSat: 93, temperature: 37.8, timestamp: "10:00" },
    ]
  },
  {
    id: "PAT-1002",
    name: "Sophie Becker",
    age: 42,
    gender: "female",
    room: "Zimmer 208",
    condition: "Observation Pneumonie",
    riskLevel: "critical",
    vitals: {
      heartRate: 112,
      bloodPressureSys: 155,
      bloodPressureDia: 98,
      oxygenSat: 88,
      temperature: 39.1,
      timestamp: "10:46"
    },
    history: [
      { heartRate: 98, bloodPressureSys: 140, bloodPressureDia: 90, oxygenSat: 92, timestamp: "08:00", temperature: 38.5 },
      { heartRate: 105, bloodPressureSys: 148, bloodPressureDia: 94, oxygenSat: 90, timestamp: "09:00", temperature: 38.8 },
      { heartRate: 112, bloodPressureSys: 155, bloodPressureDia: 98, oxygenSat: 88, timestamp: "10:00", temperature: 39.1 },
    ]
  },
  {
    id: "PAT-1003",
    name: "Lukas Weber",
    age: 29,
    gender: "male",
    room: "Zimmer 112",
    condition: "Routine Post-OP",
    riskLevel: "normal",
    vitals: {
      heartRate: 68,
      bloodPressureSys: 118,
      bloodPressureDia: 76,
      oxygenSat: 99,
      temperature: 36.6,
      timestamp: "10:40"
    },
    history: [
      { heartRate: 70, bloodPressureSys: 120, bloodPressureDia: 78, oxygenSat: 98, timestamp: "08:00", temperature: 36.5 },
      { heartRate: 69, bloodPressureSys: 119, bloodPressureDia: 77, oxygenSat: 99, timestamp: "09:00", temperature: 36.6 },
      { heartRate: 68, bloodPressureSys: 118, bloodPressureDia: 76, oxygenSat: 99, timestamp: "10:00", temperature: 36.6 },
    ]
  }
];