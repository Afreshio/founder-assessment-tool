import React from 'react';
import ScalabilityDiagnostic from '../components/ScalabilityDiagnostic';
import { LandingNav } from '../components/LandingNav';

const ScalabilityDiagnosticPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-50 via-white to-charcoal-50/30">
      <LandingNav />
      <div className="pt-24 pb-16">
        <ScalabilityDiagnostic />
      </div>
    </div>
  );
};

export default ScalabilityDiagnosticPage;

