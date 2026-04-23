import { Camera, FileText, FileCheck, Check } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-[#2D2D2D] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="font-mono tracking-tight" style={{ fontSize: '18px', fontWeight: 600 }}>
              FIELDWORK
            </div>
            <button
              className="bg-[#FF5733] px-8 py-3 font-mono tracking-tight text-white transition-opacity hover:opacity-90"
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              START FREE TRIAL
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-[#2D2D2D] bg-white py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1
                className="mb-8 leading-[1.1] tracking-tight"
                style={{ fontSize: '64px', fontWeight: 700 }}
              >
                Site documentation that works like you do.
              </h1>
              <p
                className="mb-12 text-[#6B6B6B]"
                style={{ fontSize: '20px', lineHeight: '1.6', letterSpacing: '-0.01em' }}
              >
                Transform field photos and voice notes into professional progress reports.
                No admin overhead. No lost context.
              </p>
              <div className="flex items-center gap-4">
                <button
                  className="bg-[#FF5733] px-10 py-4 font-mono tracking-tight text-white transition-opacity hover:opacity-90"
                  style={{ fontSize: '16px', fontWeight: 500 }}
                >
                  GET STARTED
                </button>
                <span className="font-mono text-[#6B6B6B]" style={{ fontSize: '13px' }}>
                  14-DAY FREE TRIAL
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                <div className="border border-[#2D2D2D] bg-white">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 border-b border-[#E5E5E5] bg-[#F5F5F5] px-4 py-3">
                    <div className="h-3 w-3 border border-[#2D2D2D]"></div>
                    <div className="h-3 w-3 border border-[#2D2D2D]"></div>
                    <div className="h-3 w-3 border border-[#2D2D2D]"></div>
                  </div>
                  {/* Dashboard mockup */}
                  <div className="p-8">
                    <div className="mb-6 flex items-center justify-between border-b border-[#E5E5E5] pb-4">
                      <div className="font-mono" style={{ fontSize: '14px' }}>WEEKLY PROGRESS REPORT</div>
                      <div className="font-mono text-[#6B6B6B]" style={{ fontSize: '12px' }}>2026-04-23</div>
                    </div>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border border-[#E5E5E5] p-4">
                          <div className="mb-2 h-4 w-3/4 bg-[#2D2D2D]"></div>
                          <div className="h-3 w-full bg-[#E5E5E5]"></div>
                          <div className="mt-1 h-3 w-5/6 bg-[#E5E5E5]"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="border-b border-[#2D2D2D] bg-white py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2
              className="mb-4 tracking-tight"
              style={{ fontSize: '48px', fontWeight: 700 }}
            >
              Three steps. Zero friction.
            </h2>
            <p className="font-mono text-[#6B6B6B]" style={{ fontSize: '14px' }}>
              CAPTURE → CONTEXTUALIZE → COMMUNICATE
            </p>
          </div>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
            {[
              { icon: Camera, title: 'Capture', desc: 'Take photos and voice notes directly from site. No app switching, no data entry.' },
              { icon: FileText, title: 'Contextualize', desc: 'FieldWork auto-organizes by date, location, and project phase. Add annotations in seconds.' },
              { icon: FileCheck, title: 'Communicate', desc: 'Generate client-ready PDF reports with one click. Professional formatting, every time.' }
            ].map((step, i) => (
              <div key={i} className="border border-[#2D2D2D] bg-white p-10">
                <step.icon className="mb-6 h-12 w-12 stroke-1 text-[#2D2D2D]" />
                <div className="mb-3 font-mono" style={{ fontSize: '16px', fontWeight: 600 }}>
                  {step.title.toUpperCase()}
                </div>
                <p className="text-[#6B6B6B]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="border-b border-[#2D2D2D] bg-white py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2
              className="mb-4 tracking-tight"
              style={{ fontSize: '48px', fontWeight: 700 }}
            >
              From chaos to clarity.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Input (messy) */}
            <div>
              <div className="mb-6 font-mono text-[#6B6B6B]" style={{ fontSize: '12px' }}>
                INPUT: RAW FIELD DATA
              </div>
              <div className="border border-[#2D2D2D] bg-[#F5F5F5] p-8">
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="relative border border-[#2D2D2D] bg-white p-4"
                      style={{ transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (i * 0.5)}deg)` }}
                    >
                      <div className="mb-2 h-32 w-full bg-[#E5E5E5]"></div>
                      <div className="font-mono text-[#6B6B6B]" style={{ fontSize: '10px' }}>
                        IMG_{20260420 + i}.JPG
                      </div>
                    </div>
                  ))}
                  <div className="border border-[#2D2D2D] bg-[#FFFACD] p-4">
                    <div className="font-mono text-[#2D2D2D]" style={{ fontSize: '11px', lineHeight: '1.4' }}>
                      "Check north wall framing"{'\n'}
                      "Plumbing roughin complete"{'\n'}
                      "HVAC delayed 2 days"
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Output (clean) */}
            <div>
              <div className="mb-6 font-mono text-[#6B6B6B]" style={{ fontSize: '12px' }}>
                OUTPUT: PROFESSIONAL REPORT
              </div>
              <div className="border border-[#2D2D2D] bg-white">
                <div className="border-b border-[#2D2D2D] bg-[#F5F5F5] px-6 py-4">
                  <div className="font-mono" style={{ fontSize: '14px' }}>PROGRESS REPORT — WEEK 16</div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="mb-2 font-mono" style={{ fontSize: '12px' }}>
                      STRUCTURAL FRAMING
                    </div>
                    <div className="mb-3 h-32 w-full border border-[#E5E5E5] bg-[#FAFAFA]"></div>
                    <div className="text-[#6B6B6B]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      North wall framing completed per plan. All measurements verified on-site.
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="mb-2 font-mono" style={{ fontSize: '12px' }}>
                      MEP SYSTEMS
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 text-[#2D2D2D]" />
                        <span className="text-[#6B6B6B]" style={{ fontSize: '14px' }}>Plumbing rough-in complete</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-4 w-4 border border-[#FF5733]"></div>
                        <span className="text-[#6B6B6B]" style={{ fontSize: '14px' }}>HVAC installation delayed 2 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-b border-[#2D2D2D] bg-white py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-20">
            {[
              { quote: "We cut our reporting time from 4 hours to 15 minutes per week. The ROI was immediate.", name: "Sarah Chen", firm: "Chen Architecture" },
              { quote: "Finally, a tool that understands how contractors actually work. No fluff, just results.", name: "Mike Davison", firm: "Davison Construction Group" },
              { quote: "Our clients love the clarity. We look more professional, and it requires zero extra effort.", name: "James Park", firm: "Park Development Co." }
            ].map((testimonial, i) => (
              <div key={i} className="border-l-2 border-[#2D2D2D] pl-8">
                <p
                  className="mb-6 text-[#2D2D2D]"
                  style={{ fontSize: '24px', lineHeight: '1.5', letterSpacing: '-0.01em' }}
                >
                  "{testimonial.quote}"
                </p>
                <div className="font-mono text-[#6B6B6B]" style={{ fontSize: '11px', letterSpacing: '0.05em' }}>
                  {testimonial.name.toUpperCase()}, {testimonial.firm.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-b border-[#2D2D2D] bg-white py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2
              className="mb-4 tracking-tight"
              style={{ fontSize: '48px', fontWeight: 700 }}
            >
              Simple, transparent pricing.
            </h2>
            <p className="text-[#6B6B6B]" style={{ fontSize: '18px' }}>
              One plan. All features. No surprises.
            </p>
          </div>
          <div className="mx-auto max-w-md">
            <div className="border border-[#2D2D2D] bg-white p-10">
              <div className="mb-8 text-center">
                <div className="mb-2 font-mono text-[#6B6B6B]" style={{ fontSize: '12px' }}>
                  PROFESSIONAL
                </div>
                <div className="mb-1">
                  <span style={{ fontSize: '64px', fontWeight: 700 }}>$49</span>
                  <span className="text-[#6B6B6B]" style={{ fontSize: '18px' }}>/user/mo</span>
                </div>
                <div className="font-mono text-[#6B6B6B]" style={{ fontSize: '11px' }}>
                  BILLED ANNUALLY
                </div>
              </div>
              <div className="mb-8 space-y-4">
                {[
                  'Unlimited projects',
                  'Unlimited reports',
                  'Photo + voice capture',
                  'PDF export',
                  'Team collaboration',
                  'Cloud storage (50GB)',
                  'Mobile + desktop apps',
                  'Priority support'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 stroke-[1.5] text-[#2D2D2D]" />
                    <span style={{ fontSize: '16px' }}>{feature}</span>
                  </div>
                ))}
              </div>
              <button
                className="w-full bg-[#FF5733] py-4 font-mono tracking-tight text-white transition-opacity hover:opacity-90"
                style={{ fontSize: '16px', fontWeight: 500 }}
              >
                START 14-DAY FREE TRIAL
              </button>
              <p className="mt-4 text-center font-mono text-[#6B6B6B]" style={{ fontSize: '11px' }}>
                NO CREDIT CARD REQUIRED
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <div className="font-mono tracking-tight text-white" style={{ fontSize: '16px', fontWeight: 600 }}>
              FIELDWORK
            </div>
            <div className="font-mono text-[#9B9B9B]" style={{ fontSize: '11px' }}>
              © 2026 FIELDWORK. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
