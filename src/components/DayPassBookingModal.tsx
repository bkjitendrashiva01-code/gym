import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Shield, User, Mail, Phone, QrCode, Dumbbell, Download, ArrowRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface DayPassBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DayPassBookingModal: React.FC<DayPassBookingModalProps> = ({
  isOpen,
  onClose
}) => {
  const [step, setStep] = useState<'form' | 'ticket'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitDate: '2026-10-06',
    trainingArea: 'Outdoor Yard & Heavy Iron',
    agreedWaiver: false
  });
  const [ticketId, setTicketId] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.agreedWaiver) return;

    const randomId = 'MECCA-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomId);
    setStep('ticket');
  };

  const handlePrint = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-xl my-8 rounded-2xl bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden relative">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-amber-400 text-neutral-950 font-bold flex items-center justify-center text-xs">
              <Dumbbell className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">The Mecca Pilgrimage</span>
              <h3 className="font-display text-lg font-bold text-white uppercase">
                Venice Day Pass ($50)
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Price breakdown pill-free note */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-neutral-400">Single Day Full Access</div>
                <div className="text-sm font-semibold text-white">Indoor + Outdoor Yard + Showers</div>
              </div>
              <div className="text-right">
                <span className="font-display text-3xl font-black text-amber-400">$50</span>
                <span className="text-[10px] text-neutral-400 block">USD</span>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Arnold Strong"
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="lifter@example.com"
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                    Phone (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (310) 000-0000"
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                    Target Visit Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                    Primary Training Focus
                  </label>
                  <select
                    value={formData.trainingArea}
                    onChange={(e) => setFormData({ ...formData, trainingArea: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400 text-sm"
                  >
                    <option value="Outdoor Yard & Heavy Iron">Outdoor Yard & Heavy Iron</option>
                    <option value="Dumbbell Pit (Up to 300 lbs)">Dumbbell Pit (Up to 300 lbs)</option>
                    <option value="Group Exercise & Cycle">Group Exercise & Cycle</option>
                    <option value="GOLD'S 3D Scan & Conditioning">GOLD'S 3D Scan & Conditioning</option>
                  </select>
                </div>
              </div>

              {/* Waiver Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreedWaiver}
                    onChange={(e) => setFormData({ ...formData, agreedWaiver: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-neutral-700 text-amber-400 focus:ring-amber-400 bg-neutral-950"
                  />
                  <span className="text-xs text-neutral-400 leading-relaxed">
                    I acknowledge that training at Gold's Gym Venice involves heavy resistance equipment. I agree to standard facility liability guidelines and respect fellow athletes at 360 Hampton Dr.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs text-neutral-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm transition-all shadow-md shadow-amber-400/20 active:translate-y-0.5 flex items-center gap-2"
              >
                <span>Confirm Pass & Generate Voucher</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* Step 2: Digital Ticket & Pass Confirmation */
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Digital Pass Voucher Card */}
            <div className="p-6 rounded-2xl bg-neutral-950 border-2 border-amber-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-amber-400/10 rounded-full blur-xl" />
              
              <div className="flex items-start justify-between pb-4 border-b border-neutral-800">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                    Official Guest Pass Voucher
                  </span>
                  <h4 className="font-display text-2xl font-black text-white uppercase mt-0.5">
                    Gold's Gym Venice
                  </h4>
                  <div className="text-xs text-neutral-400">360 Hampton Dr · Venice, CA 90291</div>
                </div>
                <div className="text-right font-mono">
                  <div className="text-xs text-neutral-500">PASS ID</div>
                  <div className="text-sm font-bold text-amber-400">{ticketId}</div>
                </div>
              </div>

              <div className="py-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-neutral-500 block">Athlete</span>
                  <span className="font-semibold text-white">{formData.name}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Valid Date</span>
                  <span className="font-semibold text-white">{formData.visitDate}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Status</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Confirmed ($50)
                  </span>
                </div>
              </div>

              {/* Barcode / QR Simulation */}
              <div className="pt-4 border-t border-dashed border-neutral-800 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-neutral-400">
                    Show this screen or ID at front desk
                  </div>
                  <div className="flex gap-1 h-8 items-center opacity-80">
                    {/* Barcode lines */}
                    {[2, 4, 1, 3, 5, 2, 4, 1, 3, 2, 5, 3, 1, 4, 2, 3, 1, 4].map((w, idx) => (
                      <div
                        key={idx}
                        style={{ width: `${w * 2}px` }}
                        className="h-full bg-neutral-300"
                      />
                    ))}
                  </div>
                </div>

                <div className="w-14 h-14 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center p-1 text-white">
                  <QrCode className="w-10 h-10 text-amber-400" />
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2 text-neutral-300">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Doors open at 5:00 AM. Free locker storage (bring personal padlock) & private showers included.</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>A receipt has been sent to <strong>{formData.email}</strong>.</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{downloadSuccess ? 'Pass Saved!' : 'Download / Print Pass'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold transition-colors"
              >
                Done
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
