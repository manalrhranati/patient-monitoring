'use client';

import { useState } from 'react';
import { mockPatients } from '@/data/mockPatients';
import { Patient } from '@/types/patient';
import { Activity, Heart, Thermometer, ShieldAlert, User, MapPin } from 'lucide-react';

export default function PatientDashboard() {
  const [selectedPatient, setSelectedPatient] = useState<Patient>(mockPatients[0]);

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Activity className="text-emerald-400" /> Klinisches Patienten-Monitoring
          </h1>
          <p className="text-sm text-slate-400">FHIR-basiertes Echtzeit-Dashboard</p>
        </div>
        <div className="bg-slate-800 px-4 py-2 rounded-lg text-sm border border-slate-700">
          Status: <span className="text-emerald-400 font-semibold">● Live Monitoring Aktiv</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Liste des patients */}
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800">
          <h2 className="text-lg font-semibold mb-4 text-slate-200">Stationäre Patienten</h2>
          <div className="space-y-3">
            {mockPatients.map((patient) => {
              const isSelected = selectedPatient.id === patient.id;
              return (
                <div
                  key={patient.id}
                  onClick={() => setSelectedPatient(patient)}
                  className={`p-4 rounded-lg cursor-pointer transition-all border ${
                    isSelected 
                      ? 'bg-slate-800 border-emerald-500 shadow-lg' 
                      : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-100">{patient.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded uppercase font-semibold ${
                      patient.riskLevel === 'critical' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      patient.riskLevel === 'warning' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                      'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}>
                      {patient.riskLevel}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 flex justify-between">
                    <span>{patient.room}</span>
                    <span>{patient.condition}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Détails du patient sélectionné & Constantes vitales */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-800">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <User className="text-emerald-400" /> {selectedPatient.name}
                </h2>
                <p className="text-sm text-slate-400 flex items-center gap-2 mt-1">
                  <MapPin size={14} /> {selectedPatient.room} • {selectedPatient.age} Jahre • {selectedPatient.gender} • <span className="text-slate-200">{selectedPatient.condition}</span>
                </p>
              </div>
              <div className="text-right text-xs text-slate-400">
                Letztes Update: <span className="text-slate-200">{selectedPatient.vitals.timestamp}</span>
              </div>
            </div>

            {/* Cartes des constantes vitales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Fréquence cardiaque */}
              <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-700">
                <div className="flex justify-between text-slate-400 mb-2 text-sm">
                  <span className="flex items-center gap-1"><Heart size={16} className="text-red-400" /> Puls</span>
                  <span>BPM</span>
                </div>
                <div className="text-3xl font-bold text-slate-100">{selectedPatient.vitals.heartRate}</div>
                <div className="text-xs text-emerald-400 mt-1">Normalbereich (60-100)</div>
              </div>

              {/* SpO2 */}
              <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-700">
                <div className="flex justify-between text-slate-400 mb-2 text-sm">
                  <span className="flex items-center gap-1"><ShieldAlert size={16} className="text-blue-400" /> Sauerstoff ($SpO_2$)</span>
                  <span>%</span>
                </div>
                <div className="text-3xl font-bold text-slate-100">{selectedPatient.vitals.oxygenSat}%</div>
                <div className="text-xs text-slate-400 mt-1">Blutsauerstoffgehalt</div>
              </div>

              {/* Température */}
              <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-700">
                <div className="flex justify-between text-slate-400 mb-2 text-sm">
                  <span className="flex items-center gap-1"><Thermometer size={16} className="text-amber-400" /> Temperatur</span>
                  <span>°C</span>
                </div>
                <div className="text-3xl font-bold text-slate-100">{selectedPatient.vitals.temperature}°C</div>
                <div className="text-xs text-slate-400 mt-1">Körperkerntemperatur</div>
              </div>
            </div>
          </div>

          {/* Historique / Données FHIR brutes simulées */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-semibold mb-4 text-slate-200">Historischer Verlauf (FHIR Observations)</h3>
            <div className="space-y-2">
              {selectedPatient.history.map((entry, index) => (
                <div key={index} className="flex justify-between items-center bg-slate-900/40 px-4 py-3 rounded-lg text-sm border border-slate-800">
                  <span className="text-slate-400">Zeitpunkt: {entry.timestamp}</span>
                  <div className="flex gap-6 text-slate-200">
                    <span>Puls: <strong>{entry.heartRate} BPM</strong></span>
                    <span>$SpO_2$: <strong>{entry.oxygenSat}%</strong></span>
                    <span>Temp: <strong>{entry.temperature}°C</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}