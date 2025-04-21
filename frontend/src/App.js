import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./components/card";
import { Button } from "./components/button";
import { Select, SelectItem } from "./components/select";
import { X } from "lucide-react";
import "chart.js/auto";
import "./App.css";

const App = () => {
  const [patients, setPatients] = useState([]);
  const [referrals, setReferrals] = useState({});
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [filterStatus, setFilterStatus] = useState("");
  const [clickedInsideDetails, setClickedInsideDetails] = useState(false);
  const [hoveredStage, setHoveredStage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/patients").then(res => res.json()).then(setPatients);
    fetch("http://localhost:3001/referrals").then(res => res.json()).then(setReferrals);
  }, []);

  const handlePatientSelect = (p) => {
    if (clickedInsideDetails) {
      setClickedInsideDetails(false);
      return;
    }
    if (selectedPatient?.id === p.id) {
      setSelectedPatient(null);
    } else {
      setSelectedPatient(p);
    }
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);
    setSelectedPatient(null);
  };

  const handleClearFilter = () => {
    setFilterStatus("");
    setSelectedPatient(null);
  };

  const handleCloseCard = () => {
    setSelectedPatient(null);
  };

  const filteredPatients = filterStatus
    ? patients.filter(p => p.referralStatus === filterStatus)
    : patients;

  const statusOptions = [...new Set(patients.map(p => p.referralStatus))];

  const referralEvents = selectedPatient ? referrals[selectedPatient.id] || [] : [];

  const ReferralDetailsCard = () => (
    <div
      className="relative p-4 sm:p-6 bg-white rounded-2xl shadow-xl w-full max-w-xl flex flex-col items-center sm:ring-0 ring-4 ring-green-300 pb-3"
      onClick={(e) => {
        e.stopPropagation();
        setClickedInsideDetails(true);
      }}
    >
      <button onClick={handleCloseCard} className="absolute top-3 right-3 text-purple-700 hover:text-purple-900">
        <X />
      </button>
      <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4 text-center">Referral Timeline: {selectedPatient.name}</h2>
      <div className="space-y-2 text-gray-700 text-sm text-left w-full">
        {referralEvents.length > 0 ? (
          referralEvents.map((e, i) => (
            <p
              key={i}
              data-stage={i}
              onMouseEnter={() => setHoveredStage(i)}
              onMouseLeave={() => setHoveredStage(null)}
              className={`transition-colors ${hoveredStage === i ? 'bg-purple-50' : ''}`}
            >
              <strong>{e.event}</strong> on {new Date(e.timestamp).toLocaleString()}
            </p>
          ))
        ) : (
          <p className="text-purple-700">Referral process yet to start...</p>
        )}
      </div>
      {referralEvents.length > 0 && (
        <div className="mt-3 w-full overflow-x-auto relative z-10">
          <div className="flex gap-2 min-w-max">
            {referralEvents.map((e, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center"
                onMouseEnter={() => setHoveredStage(i)}
                onMouseLeave={() => setHoveredStage(null)}
              >
                <div className={`arrow-step ${hoveredStage === i ? 'bg-purple-600 scale-[1.04]' : ''}`}>
                  <span className="arrow-label">Stage {i + 1}</span>
                </div>
                {/* <div className="absolute top-full mt-1 z-[9999] bg-purple-700 text-white text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {e.event}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: "radial-gradient(circle at center, #d4f1ec, #b0f4ca 100%)" }}>
      <header className="w-full bg-purple-700 flex items-center px-4 py-2">
        <img src="/wekare360_logo.png" alt="WeKare360 Logo" className="w-9 h-9 sm:w-10 sm:h-10 mr-3" />
        <h1 className="text-lg sm:text-xl font-bold text-green-200">Patient Referral Dashboard</h1>
      </header>

      <div className="flex flex-1 flex-col sm:flex-row">
        <aside className="bg-white shadow-xl sm:rounded-r-2xl p-4 w-full sm:w-72 flex flex-col border-r border-gray-200">
          <div className="mb-6 flex flex-col gap-4">
            <Select onValueChange={handleFilterChange} value={filterStatus}>
              <SelectItem value="">All Statuses</SelectItem>
              {statusOptions.map(status => (
                <SelectItem key={status} value={status}>{status}</SelectItem>
              ))}
            </Select>
            <Button onClick={handleClearFilter}>Clear Filter</Button>
          </div>

          <div className="flex flex-col gap-4 overflow-y">
            {filteredPatients.map(p => (
              <Card
                key={p.id}
                className={`bg-white shadow-lg border-l-[6px] border-green-400 rounded-2xl hover:scale-[1.02] hover:shadow-xl transition-all duration-200 cursor-pointer p-4 ring-1 ring-green-100 hover:ring-green-300 ${selectedPatient?.id === p.id ? 'ring-2 ring-green-500' : ''}`}
                onClick={() => handlePatientSelect(p)}
              >
                <CardContent>
                  <h2 className="text-xl font-semibold text-purple-800 mb-1">{p.name}</h2>
                  <p>Age: {p.age}</p>
                  <p>Status: <span className="font-medium">{p.referralStatus}</span></p>
                  <div className="block sm:hidden mt-4">
                    {selectedPatient?.id === p.id && <ReferralDetailsCard />}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </aside>

        <main className="flex-1 p-6 justify-center items-center hidden sm:flex">
          {selectedPatient ? (
            <ReferralDetailsCard />
          ) : (
            <div className="flex flex-col items-center text-center text-purple-800 opacity-30">
              <img src="/wekare360_logo.png" alt="WeKare360 Logo" className="w-32 h-32 mb-2" />
              <p className="text-lg font-semibold">Select a patient to know more</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
