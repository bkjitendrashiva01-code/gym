import React, { useState } from 'react';
import { X, CheckCircle, Calendar, User, Mail, Phone, QrCode, Download, ArrowRight, Sparkles } from 'lucide-react';
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
    passType: 'Free 1-Day Trial Guest Pass ($0)',
    agreedWaiver: false
  });
  const [ticketId, setTicketId] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.agreedWaiver) return;

    const randomId = 'PF-HAMPTON-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomId);
    setStep('ticket');
  };

  const handlePrint = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-xl my-8 rounded-2xl bg-[#140b22] border border-purple-700 shadow-2xl overflow-hidden relative">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/60 bg-[#0d0714]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-yellow-400 text-purple-950 font-black flex items-center justify-center text-xs">
              PF
            </div>
            <div>
              <span className="text-xs font-mono text-yellow-400 uppercase tracking-wider">Hampton, NH Club</span>
              <h3 className="font-display text-lg font-bold text-white uppercase">
                Free Guest Pass / Membership Enrollment
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-purple-900/40"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Price breakdown */}
            <div className="p-4 rounded-xl bg-[#0d0714] border border-purple-900/50 flex items-center justify-between">
              <div>
                <div className="text-xs text-purple-300">Judgement Free Zone® Pass</div>
                <div className="text-sm font-semibold text-white">Full Cardio, Strength & Locker Access</div>
              </div>
              <div className="text-right">
                <span className="font-display text-3xl font-black text-yellow-400">FREE</span>
                <span className="text-[10px] text-neutral-400 block">1-Day Trial</span>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-purple-300 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-[#0d0714] border border-purple-800 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-400 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-purple-300 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-[#0d0714] border border-purple-800 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-400 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-purple-300 uppercase tracking-wider mb-1.5">
                    Phone (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (603) 000-0000"
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-[#0d0714] border border-purple-800 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-400 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-purple-300 uppercase tracking-wider mb-1.5">
                    Target Visit Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-[#0d0714] border border-purple-800 text-white focus:outline-none focus:border-yellow-400 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-purple-300 uppercase tracking-wider mb-1.5">
                    Pass Option
                  </label>
                  <select
                    value={formData.passType}
                    onChange={(e) => setFormData({ ...formData, passType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#0d0714] border border-purple-800 text-white focus:outline-none focus:border-yellow-400 text-sm"
                  >
                    <option value="Free 1-Day Trial Guest Pass ($0)">Free 1-Day Trial Guest Pass ($0)</option>
                    <option value="Classic Membership ($10/mo)">Classic Membership ($10/mo)</option>
                    <option value="PF Black Card® ($24.99/mo)">PF Black Card® ($24.99/mo)</option>
                  </select>
                </div>
              </div>

              {/* Waiver */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreedWaiver}
                    onChange={(e) => setFormData({ ...formData, agreedWaiver: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-purple-800 text-yellow-400 focus:ring-yellow-400 bg-[#0d0714]"
                  />
                  <span className="text-xs text-neutral-300 leading-relaxed">
                    I agree to the Judgement Free Zone® community etiquette and standard facility guest guidelines for 4 Liberty Lane West, Hampton, NH.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-purple-950 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs text-neutral-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-purple-950 font-bold text-sm transition-all shadow-md shadow-yellow-400/20 active:translate-y-0.5 flex items-center gap-2"
              >
                <span>Generate Digital Pass Voucher</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* Step 2: Digital Ticket & Pass Confirmation */
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Voucher Card */}
            <div className="p-6 rounded-2xl bg-[#0d0714] border-2 border-yellow-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-yellow-400/10 rounded-full blur-xl" />
              
              <div className="flex items-start justify-between pb-4 border-b border-purple-950">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-400">
                    Official Guest Pass Voucher
                  </span>
                  <h4 className="font-display text-2xl font-black text-white uppercase mt-0.5">
                    Planet Fitness
                  </h4>
                  <div className="text-xs text-purple-200">4 Liberty Lane West · Hampton, NH 03842</div>
                </div>
                <div className="text-right font-mono">
                  <div className="text-xs text-neutral-500">PASS ID</div>
                  <div className="text-sm font-bold text-yellow-400">{ticketId}</div>
                </div>
              </div>

              <div className="py-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-neutral-500 block">Member/Guest</span>
                  <span className="font-semibold text-white">{formData.name}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Valid Date</span>
                  <span className="font-semibold text-white">{formData.visitDate}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Type</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Confirmed
                  </span>
                </div>
              </div>

              {/* Barcode / QR Simulation */}
              <div className="pt-4 border-t border-dashed border-purple-950 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-neutral-400">
                    Scan at front desk scanner on Liberty Lane West
                  </div>
                  <div className="flex gap-1 h-8 items-center opacity-80">
                    {[2, 4, 1, 3, 5, 2, 4, 1, 3, 2, 5, 3, 1, 4, 2, 3, 1, 4].map((w, idx) => (
                      <div
                        key={idx}
                        style={{ width: `${w * 2}px` }}
                        className="h-full bg-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <div className="w-14 h-14 rounded-lg bg-[#140b22] border border-purple-700 flex items-center justify-center p-1 text-white">
                  <QrCode className="w-10 h-10 text-yellow-400" />
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Show this barcode or your photo ID to our front desk team upon arrival.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Confirmation sent to <strong>{formData.email}</strong>. Clean locker rooms and private showers ready for you.</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-purple-950 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2.5 rounded-lg bg-purple-950 hover:bg-purple-900 border border-purple-800 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{downloadSuccess ? 'Pass Saved!' : 'Download / Print Pass'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-purple-950 text-xs font-bold transition-colors"
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
