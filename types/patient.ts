export type RiskLevel = 'normal' | 'warning' | 'critical';

export interface VitalSigns {
  heartRate: number;       // BPM
  bloodPressureSys: number;// mmHg Systolique
  bloodPressureDia: number;// mmHg Diastolique
  oxygenSat: number;       // SpO2 %
  temperature: number;     // °C
  timestamp: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  room: string;
  condition: string;
  riskLevel: RiskLevel;
  vitals: VitalSigns;
  history: VitalSigns[];
}