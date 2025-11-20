import React, { useState, useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Types
interface Inputs {
  tenureMonths: number;
  initialCEOsMonth1: number;
  newCEOsPerMonth: number;
  ceoPricePerMonth: number;
  workshopsPerQuarterBonus: number;
  workshopBasePerMonth: number;
  workshopPrice: number;
  sprintsPerQuarter: number;
  sprintPrice: number;
  onDemandPrice: number;
  onDemandCoursesPerMonth: number;
}

interface MonthRow {
  year: number;
  month: number;
  monthLabel: string;
  newCEOs: number;
  activeCEOs: number;
  workshops: number;
  sprints: number;
  onDemandCourses: number;
  ceoRevenue: number;
  workshopRevenue: number;
  sprintRevenue: number;
  onDemandRevenue: number;
  totalRevenue: number;
  ceoHours: number;
  workshopHours: number;
  sprintHours: number;
  totalHours: number;
  totalDays: number;
}

interface YearlySummary {
  year: number;
  ceoRevenue: number;
  workshopRevenue: number;
  sprintRevenue: number;
  onDemandRevenue: number;
  totalRevenue: number;
  totalDays: number;
}

type Preset = 'base' | 'growth' | 'lifestyle' | 'custom';

// Default inputs
const defaultInputs: Inputs = {
  tenureMonths: 6,
  initialCEOsMonth1: 2,
  newCEOsPerMonth: 1,
  ceoPricePerMonth: 5000,
  workshopsPerQuarterBonus: 1,
  workshopBasePerMonth: 1,
  workshopPrice: 7500,
  sprintsPerQuarter: 1,
  sprintPrice: 25000,
  onDemandPrice: 500,
  onDemandCoursesPerMonth: 0,
};

// Preset configurations
const presets: Record<Preset, Inputs> = {
  base: {
    tenureMonths: 6,
    initialCEOsMonth1: 2,
    newCEOsPerMonth: 1,
    ceoPricePerMonth: 5000,
    workshopsPerQuarterBonus: 1,
    workshopBasePerMonth: 1,
    workshopPrice: 7500,
    sprintsPerQuarter: 1,
    sprintPrice: 25000,
    onDemandPrice: 500,
    onDemandCoursesPerMonth: 0,
  },
  growth: {
    tenureMonths: 9,
    initialCEOsMonth1: 3,
    newCEOsPerMonth: 2,
    ceoPricePerMonth: 5500,
    workshopsPerQuarterBonus: 2,
    workshopBasePerMonth: 2,
    workshopPrice: 8000,
    sprintsPerQuarter: 2,
    sprintPrice: 30000,
    onDemandPrice: 500,
    onDemandCoursesPerMonth: 10,
  },
  lifestyle: {
    tenureMonths: 6,
    initialCEOsMonth1: 1,
    newCEOsPerMonth: 0.5,
    ceoPricePerMonth: 6000,
    workshopsPerQuarterBonus: 0,
    workshopBasePerMonth: 1,
    workshopPrice: 8500,
    sprintsPerQuarter: 0.5,
    sprintPrice: 35000,
    onDemandPrice: 500,
    onDemandCoursesPerMonth: 5,
  },
  custom: defaultInputs,
};

// Build model function
function buildModel(inputs: Inputs): MonthRow[] {
  const months: MonthRow[] = [];
  const startDate = new Date(2026, 0, 1); // January 2026
  
  // Track when each CEO was added
  const ceoStartMonths: number[] = [];
  let fractionalCEOs = 0; // Accumulator for fractional CEOs
  
  for (let i = 0; i < 36; i++) {
    const currentDate = new Date(2026, i, 1);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const monthLabel = currentDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    
    // New CEOs
    const newCEOs = i === 0 ? inputs.initialCEOsMonth1 : inputs.newCEOsPerMonth;
    
    // Handle fractional CEOs with accumulator
    // Example: 1.5 CEOs/month means:
    //   Month 1: +1.5 → floor(1.5) = 1 CEO, remainder 0.5
    //   Month 2: +1.5 → accumulator = 2.0 → floor(2.0) = 2 CEOs, remainder 0
    //   Month 3: +1.5 → accumulator = 1.5 → floor(1.5) = 1 CEO, remainder 0.5
    //   This alternates between 1 and 2 CEOs per month, averaging 1.5
    fractionalCEOs += newCEOs;
    const wholeCEOs = Math.floor(fractionalCEOs);
    fractionalCEOs -= wholeCEOs;
    
    // Add new CEOs to tracking (each CEO gets the current month as their start month)
    for (let j = 0; j < wholeCEOs; j++) {
      ceoStartMonths.push(i);
    }
    
    // Calculate active CEOs using SUMPRODUCT-like logic (prevents flatlining)
    // This matches the Excel formula: SUMPRODUCT($C$15:C[row], --(ROW >= ROW(current) - tenure + 1))
    // We sum CEOs from all months where: (currentMonth - startMonth) < tenureMonths
    // This ensures we only count CEOs from the last "tenure" months, preventing flatlining
    // The key is that we're summing from the beginning up to current month, but only counting
    // those within the tenure window - this matches Excel's expanding range behavior
    const activeCEOs = ceoStartMonths.reduce((sum, startMonth) => {
      const monthsElapsed = i - startMonth;
      // A CEO is active if they started within the last "tenureMonths" months
      // Example: If tenure is 6, a CEO from month 0 is active in months 0-5 (drops in month 6)
      if (monthsElapsed < inputs.tenureMonths) {
        return sum + 1; // Count this CEO
      }
      return sum; // CEO has completed tenure, don't count
    }, 0);
    
    // Workshops: base + bonus in Q1 months (March, June, September, December)
    const isQuarterEnd = month === 3 || month === 6 || month === 9 || month === 12;
    const workshops = inputs.workshopBasePerMonth + (isQuarterEnd ? inputs.workshopsPerQuarterBonus : 0);
    
    // Sprints: sprintsPerQuarter starting in January, April, July, October
    const isQuarterStart = month === 1 || month === 4 || month === 7 || month === 10;
    const sprints = isQuarterStart ? inputs.sprintsPerQuarter : 0;
    
    // On-demand courses
    const onDemandCourses = inputs.onDemandCoursesPerMonth;
    
    // Revenues
    const ceoRevenue = activeCEOs * inputs.ceoPricePerMonth;
    const workshopRevenue = workshops * inputs.workshopPrice;
    const sprintRevenue = sprints * inputs.sprintPrice;
    const onDemandRevenue = onDemandCourses * inputs.onDemandPrice;
    const totalRevenue = ceoRevenue + workshopRevenue + sprintRevenue + onDemandRevenue;
    
    // Time calculations
    const ceoHours = activeCEOs * 2 * 1.5; // 2 sessions/month, 90 min each
    const workshopHours = workshops * 4;
    const sprintHours = sprints * 17;
    const totalHours = ceoHours + workshopHours + sprintHours;
    const totalDays = totalHours / 8;
    
    months.push({
      year,
      month,
      monthLabel,
      newCEOs: wholeCEOs,
      activeCEOs,
      workshops: Math.floor(workshops),
      sprints: Math.floor(sprints),
      onDemandCourses: Math.floor(onDemandCourses),
      ceoRevenue,
      workshopRevenue,
      sprintRevenue,
      onDemandRevenue,
      totalRevenue,
      ceoHours,
      workshopHours,
      sprintHours,
      totalHours,
      totalDays,
    });
  }
  
  return months;
}

// Calculate yearly summaries
function calculateYearlySummaries(months: MonthRow[]): YearlySummary[] {
  const summaries: YearlySummary[] = [];
  
  for (let year = 2026; year <= 2028; year++) {
    const yearMonths = months.filter(m => m.year === year);
    const summary: YearlySummary = {
      year,
      ceoRevenue: yearMonths.reduce((sum, m) => sum + m.ceoRevenue, 0),
      workshopRevenue: yearMonths.reduce((sum, m) => sum + m.workshopRevenue, 0),
      sprintRevenue: yearMonths.reduce((sum, m) => sum + m.sprintRevenue, 0),
      onDemandRevenue: yearMonths.reduce((sum, m) => sum + m.onDemandRevenue, 0),
      totalRevenue: yearMonths.reduce((sum, m) => sum + m.totalRevenue, 0),
      totalDays: yearMonths.reduce((sum, m) => sum + m.totalDays, 0),
    };
    summaries.push(summary);
  }
  
  return summaries;
}

// Format currency
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// Format days
const formatDays = (value: number): string => {
  return value.toFixed(1);
};

// Inputs Panel Component
const InputsPanel: React.FC<{
  inputs: Inputs;
  onChange: (inputs: Inputs) => void;
}> = ({ inputs, onChange }) => {
  const updateInput = (key: keyof Inputs, value: number) => {
    onChange({ ...inputs, [key]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Input Variables</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1">
            Average CEO Tenure (months)
          </label>
          <input
            type="number"
            value={inputs.tenureMonths}
            onChange={(e) => updateInput('tenureMonths', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1">
            Initial CEOs (Month 1)
          </label>
          <input
            type="number"
            value={inputs.initialCEOsMonth1}
            onChange={(e) => updateInput('initialCEOsMonth1', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1">
            New CEOs per Month
          </label>
          <input
            type="number"
            step="0.5"
            value={inputs.newCEOsPerMonth}
            onChange={(e) => updateInput('newCEOsPerMonth', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1">
            CEO Price per Month ($)
          </label>
          <input
            type="number"
            value={inputs.ceoPricePerMonth}
            onChange={(e) => updateInput('ceoPricePerMonth', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1">
            Workshops per Quarter Bonus
          </label>
          <input
            type="number"
            value={inputs.workshopsPerQuarterBonus}
            onChange={(e) => updateInput('workshopsPerQuarterBonus', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1">
            Base Workshops per Month
          </label>
          <input
            type="number"
            value={inputs.workshopBasePerMonth}
            onChange={(e) => updateInput('workshopBasePerMonth', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1">
            Workshop Price ($)
          </label>
          <input
            type="number"
            value={inputs.workshopPrice}
            onChange={(e) => updateInput('workshopPrice', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1">
            Sprints per Quarter
          </label>
          <input
            type="number"
            step="0.5"
            value={inputs.sprintsPerQuarter}
            onChange={(e) => updateInput('sprintsPerQuarter', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1">
            Sprint Price ($)
          </label>
          <input
            type="number"
            value={inputs.sprintPrice}
            onChange={(e) => updateInput('sprintPrice', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1">
            On-Demand Price ($)
          </label>
          <input
            type="number"
            value={inputs.onDemandPrice}
            onChange={(e) => updateInput('onDemandPrice', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1">
            On-Demand Courses per Month
          </label>
          <input
            type="number"
            value={inputs.onDemandCoursesPerMonth}
            onChange={(e) => updateInput('onDemandCoursesPerMonth', parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>
    </div>
  );
};

// Preset Buttons Component
const PresetButtons: React.FC<{
  activePreset: Preset;
  onPresetChange: (preset: Preset) => void;
}> = ({ activePreset, onPresetChange }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-charcoal-700 mb-3">Scenarios</h3>
      <div className="flex flex-wrap gap-3">
        {(['base', 'growth', 'lifestyle'] as Preset[]).map((preset) => (
          <button
            key={preset}
            onClick={() => onPresetChange(preset)}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activePreset === preset
                ? 'bg-accent text-white'
                : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
            }`}
          >
            {preset.charAt(0).toUpperCase() + preset.slice(1)}
          </button>
        ))}
        {activePreset === 'custom' && (
          <button
            className="px-4 py-2 rounded-md font-medium bg-yellow-100 text-yellow-800"
          >
            Custom
          </button>
        )}
      </div>
    </div>
  );
};

// Summary Cards Component
const SummaryCards: React.FC<{
  summaries: YearlySummary[];
}> = ({ summaries }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Annual Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summaries.map((summary) => (
          <div key={summary.year} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-charcoal-900 mb-4">{summary.year}</h3>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-charcoal-600 mb-1">Total Revenue</div>
                <div className="text-2xl font-bold text-charcoal-900">
                  {formatCurrency(summary.totalRevenue)}
                </div>
              </div>
              <div className="pt-3 border-t border-charcoal-200">
                <div className="text-xs text-charcoal-600 mb-2">By Stream:</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-charcoal-600">CEO</span>
                    <span className="font-medium">{formatCurrency(summary.ceoRevenue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-600">Workshops</span>
                    <span className="font-medium">{formatCurrency(summary.workshopRevenue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-600">Sprints</span>
                    <span className="font-medium">{formatCurrency(summary.sprintRevenue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-600">On-Demand</span>
                    <span className="font-medium">{formatCurrency(summary.onDemandRevenue)}</span>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-charcoal-200">
                <div className="text-sm text-charcoal-600 mb-1">Total Delivery Days</div>
                <div className="text-lg font-bold text-charcoal-900">
                  {formatDays(summary.totalDays)} days
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Revenue Chart Component
const RevenueChart: React.FC<{
  months: MonthRow[];
}> = ({ months }) => {
  const chartData = months.map((m) => ({
    month: m.monthLabel,
    CEO: m.ceoRevenue,
    Workshops: m.workshopRevenue,
    Sprints: m.sprintRevenue,
    'On-Demand': m.onDemandRevenue,
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Monthly Revenue by Stream</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="month"
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            formatter={(value: number) => formatCurrency(value)}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '6px' }}
          />
          <Legend />
          <Bar dataKey="CEO" stackId="a" fill="#4B3F72" />
          <Bar dataKey="Workshops" stackId="a" fill="#228BE6" />
          <Bar dataKey="Sprints" stackId="a" fill="#2ECC71" />
          <Bar dataKey="On-Demand" stackId="a" fill="#FFB02E" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Monthly Table Component
const MonthlyTable: React.FC<{
  months: MonthRow[];
}> = ({ months }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Monthly Detail</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-charcoal-200">
              <th className="text-left py-3 px-4 font-semibold text-charcoal-700">Year</th>
              <th className="text-left py-3 px-4 font-semibold text-charcoal-700">Month</th>
              <th className="text-right py-3 px-4 font-semibold text-charcoal-700">Active CEOs</th>
              <th className="text-right py-3 px-4 font-semibold text-charcoal-700">CEO Revenue</th>
              <th className="text-right py-3 px-4 font-semibold text-charcoal-700">Workshops</th>
              <th className="text-right py-3 px-4 font-semibold text-charcoal-700">Workshop Rev</th>
              <th className="text-right py-3 px-4 font-semibold text-charcoal-700">Sprints</th>
              <th className="text-right py-3 px-4 font-semibold text-charcoal-700">Sprint Rev</th>
              <th className="text-right py-3 px-4 font-semibold text-charcoal-700">On-Demand</th>
              <th className="text-right py-3 px-4 font-semibold text-charcoal-700">On-Demand Rev</th>
              <th className="text-right py-3 px-4 font-semibold text-charcoal-700">Total Revenue</th>
              <th className="text-right py-3 px-4 font-semibold text-charcoal-700">Total Days</th>
            </tr>
          </thead>
          <tbody>
            {months.map((month, idx) => (
              <tr
                key={idx}
                className="border-b border-charcoal-100 hover:bg-charcoal-50 transition-colors"
              >
                <td className="py-3 px-4 text-charcoal-700">{month.year}</td>
                <td className="py-3 px-4 text-charcoal-700">{month.monthLabel}</td>
                <td className="py-3 px-4 text-right text-charcoal-700">{month.activeCEOs}</td>
                <td className="py-3 px-4 text-right text-charcoal-700">
                  {formatCurrency(month.ceoRevenue)}
                </td>
                <td className="py-3 px-4 text-right text-charcoal-700">{month.workshops}</td>
                <td className="py-3 px-4 text-right text-charcoal-700">
                  {formatCurrency(month.workshopRevenue)}
                </td>
                <td className="py-3 px-4 text-right text-charcoal-700">{month.sprints}</td>
                <td className="py-3 px-4 text-right text-charcoal-700">
                  {formatCurrency(month.sprintRevenue)}
                </td>
                <td className="py-3 px-4 text-right text-charcoal-700">
                  {month.onDemandCourses}
                </td>
                <td className="py-3 px-4 text-right text-charcoal-700">
                  {formatCurrency(month.onDemandRevenue)}
                </td>
                <td className="py-3 px-4 text-right font-semibold text-charcoal-900">
                  {formatCurrency(month.totalRevenue)}
                </td>
                <td className="py-3 px-4 text-right text-charcoal-700">
                  {formatDays(month.totalDays)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Documentation Sidebar Component
const DocumentationSidebar: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full lg:w-96 bg-white shadow-2xl z-50 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-charcoal-900">
              Model Documentation
            </h2>
            <button
              onClick={onClose}
              className="text-charcoal-500 hover:text-charcoal-900 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          <div className="space-y-8 text-sm text-charcoal-700">
            {/* Introduction */}
            <div>
              <p className="text-base font-semibold text-charcoal-900 mb-2">
                ScaleOS Business Model – Key Parameters & Time/Revenue Drivers
              </p>
              <p className="leading-relaxed">
                This is the definitive guide to all components in the model — what they mean, how they're priced, and how much time they require. Use it to understand every lever in the system.
              </p>
            </div>

            {/* CEO Coaching */}
            <div className="border-l-4 pl-4" style={{ borderColor: '#4B3F72' }}>
              <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                1. CEO Coaching Retainer (1:1 Coaching)
              </h3>
              <p className="text-xs text-charcoal-600 mb-3 italic">Your recurring revenue engine.</p>
              <div className="space-y-2">
                <div>
                  <span className="font-semibold">Pricing:</span> $5,000 per CEO per month (default; adjustable)
                </div>
                <div>
                  <span className="font-semibold">Client Flow:</span> Initial CEOs (Month 1), New CEOs per month, Tenure (3–12 months)
                </div>
                <div>
                  <span className="font-semibold">Time:</span> 2 sessions/month × 90 min = 3 hours per CEO per month
                </div>
                <div className="pt-2 text-xs text-charcoal-600">
                  <span className="font-semibold">Impact:</span> High-quality revenue, predictable monthly cadence, drives the most cumulative hours
                </div>
              </div>
            </div>

            {/* Workshops */}
            <div className="border-l-4 pl-4" style={{ borderColor: '#228BE6' }}>
              <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                2. Workshops (Half-Day)
              </h3>
              <p className="text-xs text-charcoal-600 mb-3 italic">High-leverage, repeatable, scalable.</p>
              <div className="space-y-2">
                <div>
                  <span className="font-semibold">Pricing:</span> $7,500 per workshop
                </div>
                <div>
                  <span className="font-semibold">Cadence:</span> 1 workshop/month + 1 bonus per quarter (Mar, Jun, Sep, Dec) = 16/year
                </div>
                <div>
                  <span className="font-semibold">Time:</span> 4 hours per workshop (half-day)
                </div>
                <div className="pt-2 text-xs text-charcoal-600">
                  <span className="font-semibold">Impact:</span> Excellent blended margin, pairs well with CEO coaching
                </div>
              </div>
            </div>

            {/* Sprints */}
            <div className="border-l-4 pl-4" style={{ borderColor: '#2ECC71' }}>
              <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                3. 90-Day Sprint (Quarterly Intensive)
              </h3>
              <p className="text-xs text-charcoal-600 mb-3 italic">A bundled, high-touch engagement that compresses 3 months of work.</p>
              <div className="space-y-2">
                <div>
                  <span className="font-semibold">Pricing:</span> Bundled at $25,000 (worth $30,000 individually)
                </div>
                <div>
                  <span className="font-semibold">Included:</span>
                  <ul className="list-disc list-inside ml-2 mt-1 space-y-1">
                    <li>6 CEO sessions (90 min each) = 9 hours</li>
                    <li>2 workshops (4 hours each) = 8 hours</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold">Total Time:</span> 17 hours per sprint
                </div>
                <div>
                  <span className="font-semibold">Cadence:</span> 1 sprint per quarter (Jan, Apr, Jul, Oct) = 4/year
                </div>
                <div className="pt-2 text-xs text-charcoal-600">
                  <span className="font-semibold">Impact:</span> High-value engagements, creates predictable spikes in revenue and workload
                </div>
              </div>
            </div>

            {/* On-Demand */}
            <div className="border-l-4 pl-4" style={{ borderColor: '#FFB02E' }}>
              <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                4. On-Demand Courses / Digital Products
              </h3>
              <p className="text-xs text-charcoal-600 mb-3 italic">Zero-headcount revenue.</p>
              <div className="space-y-2">
                <div>
                  <span className="font-semibold">Pricing:</span> $500 per course (adjustable)
                </div>
                <div>
                  <span className="font-semibold">Time:</span> 0 hours per sale (no delivery time)
                </div>
                <div className="pt-2 text-xs text-charcoal-600">
                  <span className="font-semibold">Impact:</span> Scalable, passive, smooths revenue without adding delivery load
                </div>
              </div>
            </div>

            {/* Time Model */}
            <div className="bg-charcoal-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-charcoal-900 mb-3">
                5. Time Model (Hours → Days)
              </h3>
              <p className="mb-3">Everything converts into hours and then days.</p>
              <div className="text-xs space-y-1 mb-3">
                <div><span className="font-semibold">1 working day = 8 hours</span></div>
              </div>
              <div className="text-xs">
                <div className="font-semibold mb-2">Monthly Time Drivers:</div>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-1">Component</th>
                      <th className="text-left py-1">Time per unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-1">CEO coaching</td>
                      <td className="py-1">3 hours per CEO/month</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-1">Workshop</td>
                      <td className="py-1">4 hours</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-1">Sprint</td>
                      <td className="py-1">17 hours</td>
                    </tr>
                    <tr>
                      <td className="py-1">On-demand</td>
                      <td className="py-1">0 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Annual Rollups */}
            <div>
              <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                6. Annual Rollups (2026, 2027, 2028)
              </h3>
              <p className="mb-2">Each year produces:</p>
              <div className="text-xs space-y-1">
                <div><span className="font-semibold">Revenue:</span> CEO, Workshop, Sprint, On-Demand, Total</div>
                <div><span className="font-semibold">Time:</span> CEO hours, Workshop hours, Sprint hours, Total days</div>
              </div>
              <p className="text-xs text-charcoal-600 mt-2">
                These metrics allow you to evaluate revenue efficiency, load, and sustainability.
              </p>
            </div>

            {/* Adjustable Inputs */}
            <div className="bg-accent/10 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                7. Adjustable Inputs (Your Control Panel)
              </h3>
              <p className="mb-3 text-xs">These are the levers that dynamically shape the model:</p>
              <div className="text-xs space-y-2">
                <div>
                  <span className="font-semibold">Volume Levers:</span>
                  <ul className="list-disc list-inside ml-2 mt-1">
                    <li>Tenure of CEOs (3–12 months)</li>
                    <li>Initial CEO count</li>
                    <li>New CEOs per month</li>
                    <li>On-demand course volume</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold">Pricing Levers:</span>
                  <ul className="list-disc list-inside ml-2 mt-1">
                    <li>Monthly CEO price</li>
                    <li>Workshop price</li>
                    <li>Sprint price</li>
                    <li>On-demand course price</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold">Cadence Levers:</span>
                  <ul className="list-disc list-inside ml-2 mt-1">
                    <li>Workshops per month</li>
                    <li>Extra workshops per quarter</li>
                    <li>Sprints per quarter</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-charcoal-600 mt-3">
                Together, these give you full flexibility for scenario planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Main Component
const ScaleOSBusinessModel: React.FC = () => {
  const [inputs, setInputs] = useState<Inputs>(defaultInputs);
  const [activePreset, setActivePreset] = useState<Preset>('base');
  const [docsOpen, setDocsOpen] = useState(false);

  // Check if current inputs match a preset
  const checkPreset = (newInputs: Inputs): Preset => {
    for (const [presetName, presetInputs] of Object.entries(presets)) {
      if (presetName === 'custom') continue;
      let matches = true;
      for (const key in presetInputs) {
        if (Math.abs(presetInputs[key as keyof Inputs] - newInputs[key as keyof Inputs]) > 0.01) {
          matches = false;
          break;
        }
      }
      if (matches) return presetName as Preset;
    }
    return 'custom';
  };

  const handleInputChange = (newInputs: Inputs) => {
    setInputs(newInputs);
    setActivePreset(checkPreset(newInputs));
  };

  const handlePresetChange = (preset: Preset) => {
    if (preset !== 'custom') {
      setInputs(presets[preset]);
      setActivePreset(preset);
    }
  };

  // Build model and calculate summaries
  const months = useMemo(() => buildModel(inputs), [inputs]);
  const yearlySummaries = useMemo(() => calculateYearlySummaries(months), [months]);

  return (
    <div className="min-h-screen bg-charcoal-50 py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-charcoal-900 mb-2">ScaleOS Business Model</h1>
            <p className="text-charcoal-600">Interactive dashboard for modeling coaching business revenue and time commitments</p>
          </div>
          <button
            onClick={() => setDocsOpen(!docsOpen)}
            className="ml-4 px-4 py-2 bg-white border border-charcoal-300 rounded-md shadow-sm hover:bg-charcoal-50 text-sm font-medium text-charcoal-700 flex items-center gap-2"
          >
            <span>📖</span>
            <span className="hidden sm:inline">{docsOpen ? 'Hide' : 'Show'} Documentation</span>
            <span className="sm:hidden">Docs</span>
          </button>
        </div>

        <PresetButtons activePreset={activePreset} onPresetChange={handlePresetChange} />
        <InputsPanel inputs={inputs} onChange={handleInputChange} />
        <SummaryCards summaries={yearlySummaries} />
        <RevenueChart months={months} />
        <MonthlyTable months={months} />
      </div>

      <DocumentationSidebar isOpen={docsOpen} onClose={() => setDocsOpen(false)} />
    </div>
  );
};

export default ScaleOSBusinessModel;

