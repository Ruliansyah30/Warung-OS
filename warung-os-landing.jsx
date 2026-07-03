import { useState } from "react";

const C = {
  bg: "#FAFAF8", white: "#FFFFFF", primary: "#1B4332", primaryMid: "#2D6A4F",
  primaryLight: "#40916C", accent: "#D4603A", accentHover: "#C24E2E",
  gold: "#C8963E", text: "#1C1917", textSec: "#6B7280", border: "#E5E7EB",
  light: "#F0EDE8", success: "#059669",
};

const Section = ({ children, bg, id, style }) => (
  <section id={id} style={{ padding: "80px 24px", background: bg || C.bg, ...style }}>
    <div style={{ maxWidth: 960, margin: "0 auto" }}>{children}</div>
  </section>
);

const Badge = ({ children }) => (
  <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600, background: "#ECFDF5", color: C.success, marginBottom: 12 }}>{children}</span>
);

export default function LandingPage() {
  const [lang, setLang] = useState("en");
  const [faqOpen, setFaqOpen] = useState(null);
  const en = lang === "en";

  const Nav = () => (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 24 }}>🌴</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.primary, letterSpacing: -0.5 }}>Warung OS</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={() => setLang(l => l === "en" ? "id" : "en")} style={{ padding: "4px 10px", border: `1px solid ${C.border}`, borderRadius: 6, background: "transparent", cursor: "pointer", fontSize: 12, fontWeight: 600, color: C.textSec }}>
            {en ? "🇮🇩 ID" : "🇬🇧 EN"}
          </button>
          <a href="#pricing" style={{ padding: "8px 20px", background: C.accent, color: "#fff", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
            {en ? "Get Started" : "Mulai"}
          </a>
        </div>
      </div>
    </nav>
  );

  const Hero = () => (
    <Section bg={`linear-gradient(135deg, ${C.primary} 0%, ${C.primaryMid} 50%, ${C.primaryLight} 100%)`} style={{ paddingTop: 140, paddingBottom: 100, color: "#fff", textAlign: "center" }}>
      <Badge>{en ? "Built in Bali, for Bali" : "Dibuat di Bali, untuk Bali"}</Badge>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.1, margin: "16px 0", letterSpacing: -1 }}>
        {en ? "Stop Guessing Your Cafe's Numbers." : "Berhenti Nebak Angka Keuangan Cafe Anda."}
      </h1>
      <p style={{ fontSize: 18, opacity: 0.85, maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.6 }}>
        {en
          ? "The all-in-one Excel toolkit for PBJT tax, food costing, staff payroll & P/L — designed specifically for cafe & restaurant owners in Bali."
          : "Toolkit Excel lengkap untuk pajak PBJT, food cost, gaji karyawan & laba rugi — dirancang khusus untuk pemilik cafe & restoran di Bali."}
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="#pricing" style={{ padding: "14px 32px", background: C.accent, color: "#fff", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700, boxShadow: "0 4px 14px rgba(212,96,58,0.4)" }}>
          {en ? "Get the Toolkit — IDR 199K" : "Dapatkan Toolkit — IDR 199K"}
        </a>
        <a href="#features" style={{ padding: "14px 32px", background: "rgba(255,255,255,0.15)", color: "#fff", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 600, border: "1px solid rgba(255,255,255,0.3)" }}>
          {en ? "See Features ↓" : "Lihat Fitur ↓"}
        </a>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 48, flexWrap: "wrap" }}>
        {[
          [en ? "3,361 formulas" : "3.361 formula", en ? "Auto-calculated" : "Otomatis"],
          [en ? "7 integrated sheets" : "7 sheet terintegrasi", en ? "One workbook" : "Satu file"],
          [en ? "Bali-specific" : "Khusus Bali", "PBJT + BPJS + UMK"],
        ].map(([top, bot], i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 20, fontWeight: 700 }}>{top}</div>
            <div style={{ fontSize: 13, opacity: 0.7 }}>{bot}</div>
          </div>
        ))}
      </div>
    </Section>
  );

  const PainPoints = () => (
    <Section bg={C.white}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.primary, marginBottom: 12 }}>
          {en ? "Sound Familiar?" : "Terdengar Familiar?"}
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
        {[
          ["😰", en ? "How much PBJT do I actually owe this month?" : "Berapa sebenarnya PBJT yang harus saya bayar bulan ini?"],
          ["📊", en ? "Is my food cost 30% or 45%? I honestly don't know." : "Food cost saya 30% atau 45%? Jujur saya tidak tahu."],
          ["💸", en ? "How much does each employee actually cost with BPJS?" : "Berapa sebenarnya biaya per karyawan termasuk BPJS?"],
          ["📉", en ? "Am I even making a profit after all expenses?" : "Apakah saya untung setelah semua biaya?"],
        ].map(([icon, text], i) => (
          <div key={i} style={{ padding: 24, borderRadius: 12, border: `1px solid ${C.border}`, background: "#FFF9F5" }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
            <p style={{ fontSize: 15, color: C.text, lineHeight: 1.5, margin: 0 }}>{text}</p>
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center", marginTop: 32, fontSize: 18, fontWeight: 600, color: C.accent }}>
        {en ? "Warung OS solves all of this — in one Excel file." : "Warung OS selesaikan semua ini — dalam satu file Excel."}
      </p>
    </Section>
  );

  const Features = () => (
    <Section id="features" bg={C.light}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <Badge>{en ? "7 Powerful Modules" : "7 Modul Powerful"}</Badge>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.primary }}>
          {en ? "Everything You Need, Nothing You Don't" : "Semua yang Anda Butuhkan"}
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        {[
          ["📊", en ? "Daily Sales Tracker" : "Pencatat Penjualan", en ? "Record transactions, auto-calculate service charge & PBJT per sale. Monthly summary dashboard." : "Catat transaksi, otomatis hitung service charge & PBJT. Dashboard bulanan."],
          ["🧾", en ? "PBJT Tax Calculator" : "Kalkulator PBJT", en ? "Per-transaction breakdown AND monthly tax estimate. Know exactly what you owe Pemda." : "Breakdown per transaksi DAN estimasi pajak bulanan. Tahu persis berapa yang harus disetor ke Pemda."],
          ["🍽️", en ? "Food Cost Calculator" : "Kalkulator Food Cost", en ? "Recipe builder with per-ingredient costing. See food cost %, suggested price & margin. Color-coded alerts." : "Buat resep dengan biaya per bahan. Lihat food cost %, harga saran & margin. Alert berwarna."],
          ["👥", en ? "Staff & Payroll" : "Staff & Penggajian", en ? "30 employees with auto BPJS calculation (Kesehatan, JKK, JKM, JHT, JP). See employer cost & take-home pay." : "30 karyawan dengan kalkulasi BPJS otomatis. Lihat biaya perusahaan & gaji bersih."],
          ["📈", en ? "P&L Report" : "Laporan Laba Rugi", en ? "Monthly profit & loss with auto-linked staff costs. Key metrics: gross margin, net margin, cost ratios." : "Laba rugi bulanan dengan biaya staff otomatis. Metrik: gross margin, net margin."],
          ["📋", en ? "UMK Reference + Settings" : "Referensi UMK + Pengaturan", en ? "Minimum wage for all 9 Bali regencies. Central settings that update all sheets." : "UMK 9 kabupaten Bali. Pengaturan pusat yang update semua sheet."],
        ].map(([icon, title, desc], i) => (
          <div key={i} style={{ padding: 28, borderRadius: 14, background: C.white, border: `1px solid ${C.border}`, transition: "box-shadow 0.2s" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>{icon}</div>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: C.primary, marginBottom: 8 }}>{title}</h3>
            <p style={{ fontSize: 14, color: C.textSec, lineHeight: 1.6, margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );

  const HowItWorks = () => (
    <Section bg={C.white}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.primary }}>
          {en ? "Stupid Simple to Use" : "Sangat Simpel"}
        </h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
        {[
          ["🔵", en ? "Fill blue cells" : "Isi cell biru", en ? "Your revenue, ingredients, employee info" : "Revenue, bahan, info karyawan"],
          ["⬛", en ? "Black cells auto-calculate" : "Cell hitam otomatis", en ? "Tax, margins, payroll — all formulas" : "Pajak, margin, gaji — semua formula"],
          ["✅", en ? "Get answers instantly" : "Dapat jawaban instan", en ? "P&L, tax owed, food cost, payroll" : "L/R, pajak, food cost, gaji"],
        ].map(([icon, title, desc], i) => (
          <div key={i} style={{ textAlign: "center", flex: "1 1 200px", maxWidth: 260 }}>
            <div style={{ width: 64, height: 64, borderRadius: 16, background: C.light, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 28 }}>{icon}</div>
            <div style={{ fontSize: 13, color: C.accent, fontWeight: 700, marginBottom: 4 }}>Step {i + 1}</div>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: C.primary, marginBottom: 6 }}>{title}</h3>
            <p style={{ fontSize: 14, color: C.textSec, lineHeight: 1.5 }}>{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );

  const Testimonials = () => (
    <Section bg={C.light}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.primary }}>
          {en ? "Trusted by Bali Cafe Owners" : "Dipercaya Pemilik Cafe di Bali"}
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        {[
          [en ? "Finally, I understand exactly how much PBJT I need to pay each month. This paid for itself in the first week." : "Akhirnya saya tahu persis berapa PBJT yang harus dibayar. Balik modal di minggu pertama.", en ? "Australian cafe owner" : "Pemilik cafe asal Australia", "Berawa"],
          [en ? "Our food cost on the signature dish was 42%. After using Warung OS, we adjusted the recipe — now it's 31%. Profit went up immediately." : "Food cost menu andalan kami 42%. Setelah pakai Warung OS, kami adjust resep — sekarang 31%. Profit langsung naik.", en ? "Restaurant owner" : "Pemilik restoran", "Seminyak"],
          [en ? "The BPJS calculator alone saves me from calling my accountant every time I hire someone. I see the total cost per employee instantly." : "Kalkulator BPJS saja sudah hemat biaya konsultasi akuntan setiap rekrut orang baru.", en ? "Coffee shop owner" : "Pemilik coffee shop", "Ubud"],
        ].map(([quote, who, where], i) => (
          <div key={i} style={{ padding: 28, borderRadius: 14, background: C.white, border: `1px solid ${C.border}` }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>⭐⭐⭐⭐⭐</div>
            <p style={{ fontSize: 14, color: C.text, lineHeight: 1.6, fontStyle: "italic", marginBottom: 16 }}>"{quote}"</p>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.primary }}>{who}</div>
            <div style={{ fontSize: 12, color: C.textSec }}>{where}, Bali</div>
          </div>
        ))}
      </div>
    </Section>
  );

  const Pricing = () => (
    <Section id="pricing" bg={C.white}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <Badge>{en ? "One-time payment. No subscription." : "Bayar sekali. Tanpa langganan."}</Badge>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.primary }}>
          {en ? "Choose Your Package" : "Pilih Paket Anda"}
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, alignItems: "start" }}>
        {[
          {
            name: "Starter", price: "199K", color: C.primaryLight, popular: false,
            features: en
              ? ["Daily Sales Tracker", "PBJT Tax Calculator", "Food Cost (5 recipes)", "UMK Reference", "Settings Hub"]
              : ["Pencatat Penjualan", "Kalkulator PBJT", "Food Cost (5 resep)", "Referensi UMK", "Pengaturan"],
          },
          {
            name: "Professional", price: "399K", color: C.accent, popular: true,
            features: en
              ? ["Everything in Starter", "Staff & Payroll (30 staff)", "P&L Report (auto-linked)", "Food Cost (10 recipes)", "12-month free updates"]
              : ["Semua di Starter", "Staff & Gaji (30 karyawan)", "Laporan L/R (auto-linked)", "Food Cost (10 resep)", "Update gratis 12 bulan"],
          },
          {
            name: "Business", price: "799K", color: C.gold, popular: false,
            features: en
              ? ["Everything in Professional", "Multi-venue (up to 3)", "Food Cost (20 recipes)", "1hr setup consultation", "Custom modifications", "30-day email support"]
              : ["Semua di Professional", "Multi-venue (max 3)", "Food Cost (20 resep)", "Konsultasi setup 1 jam", "Modifikasi custom", "Email support 30 hari"],
          },
        ].map((pkg, i) => (
          <div key={i} style={{
            borderRadius: 16, border: pkg.popular ? `2px solid ${pkg.color}` : `1px solid ${C.border}`,
            overflow: "hidden", background: C.white,
            boxShadow: pkg.popular ? "0 8px 30px rgba(212,96,58,0.15)" : "none",
            transform: pkg.popular ? "scale(1.03)" : "none",
          }}>
            {pkg.popular && (
              <div style={{ background: pkg.color, color: "#fff", textAlign: "center", padding: "6px 0", fontSize: 13, fontWeight: 700 }}>
                ⭐ {en ? "MOST POPULAR" : "TERPOPULER"}
              </div>
            )}
            <div style={{ padding: 28 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.primary, marginBottom: 4 }}>{pkg.name}</h3>
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: pkg.color }}>IDR {pkg.price}</span>
                <span style={{ fontSize: 14, color: C.textSec, marginLeft: 4 }}>{en ? "one-time" : "sekali bayar"}</span>
              </div>
              <div style={{ marginBottom: 24 }}>
                {pkg.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 10, fontSize: 14, color: C.text }}>
                    <span style={{ color: C.success, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <button style={{
                width: "100%", padding: "12px 0", border: "none", borderRadius: 10, cursor: "pointer",
                fontSize: 15, fontWeight: 700, color: "#fff",
                background: pkg.popular ? C.accent : C.primary,
              }}>
                {en ? "Get " : "Beli "}{pkg.name}
              </button>
            </div>
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: C.textSec }}>
        {en ? "Payment via bank transfer or QRIS. Toolkit delivered to your email within 1 hour." : "Bayar via transfer bank atau QRIS. Toolkit dikirim ke email dalam 1 jam."}
      </p>
    </Section>
  );

  const FAQ = () => {
    const faqs = en ? [
      ["Do I need accounting knowledge?", "No. Just fill in the blue cells with your actual numbers. All calculations are automatic."],
      ["Does it work on Mac?", "Yes. It works in Microsoft Excel (Windows & Mac) and Google Sheets."],
      ["Is it in English or Indonesian?", "All labels and instructions are in English. Indonesian users will find it intuitive as well. Bilingual version coming soon."],
      ["What about PPN (VAT)?", "Warung OS focuses on PBJT (pajak daerah/restoran) which is the tax restaurants in Bali must pay to local government. This is separate from PPN."],
      ["Can I customize it for my cafe?", "Yes! The Business package includes custom modifications. You can also book an add-on customization session."],
      ["Do I get updates?", "Professional and Business packages include 12 months of free updates when tax rates or BPJS rates change."],
    ] : [
      ["Apakah perlu pengetahuan akuntansi?", "Tidak. Cukup isi cell biru dengan angka Anda. Semua kalkulasi otomatis."],
      ["Bisa dipakai di Mac?", "Ya. Bisa di Microsoft Excel (Windows & Mac) dan Google Sheets."],
      ["Bahasa Inggris atau Indonesia?", "Label dalam Bahasa Inggris. Pengguna Indonesia juga akan mudah memakainya. Versi bilingual segera hadir."],
      ["Bagaimana dengan PPN?", "Warung OS fokus pada PBJT (pajak daerah/restoran) yang wajib disetor ke Pemda. Ini terpisah dari PPN."],
      ["Bisa dikustomisasi?", "Ya! Paket Business termasuk modifikasi custom. Anda juga bisa pesan sesi kustomisasi tambahan."],
      ["Apakah ada update?", "Paket Professional dan Business termasuk update gratis 12 bulan saat tarif pajak atau BPJS berubah."],
    ];

    return (
      <Section bg={C.light}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: C.primary }}>FAQ</h2>
        </div>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {faqs.map(([q, a], i) => (
            <div key={i} style={{ marginBottom: 8, borderRadius: 10, border: `1px solid ${C.border}`, background: C.white, overflow: "hidden" }}>
              <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{
                width: "100%", padding: "16px 20px", border: "none", background: "transparent", cursor: "pointer",
                display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 15, fontWeight: 600, color: C.primary, textAlign: "left",
              }}>
                <span>{q}</span>
                <span style={{ fontSize: 20, transform: faqOpen === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
              </button>
              {faqOpen === i && (
                <div style={{ padding: "0 20px 16px", fontSize: 14, color: C.textSec, lineHeight: 1.6 }}>{a}</div>
              )}
            </div>
          ))}
        </div>
      </Section>
    );
  };

  const CTA = () => (
    <Section bg={`linear-gradient(135deg, ${C.primary}, ${C.primaryMid})`} style={{ textAlign: "center", color: "#fff" }}>
      <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, marginBottom: 16 }}>
        {en ? "Ready to Take Control of Your Cafe's Finances?" : "Siap Kendalikan Keuangan Cafe Anda?"}
      </h2>
      <p style={{ fontSize: 17, opacity: 0.85, maxWidth: 500, margin: "0 auto 32px" }}>
        {en ? "Join Bali cafe owners who stopped guessing and started knowing." : "Bergabung dengan pemilik cafe Bali yang berhenti nebak dan mulai tahu."}
      </p>
      <a href="#pricing" style={{ display: "inline-block", padding: "16px 40px", background: C.accent, color: "#fff", borderRadius: 12, textDecoration: "none", fontSize: 17, fontWeight: 700, boxShadow: "0 4px 14px rgba(212,96,58,0.4)" }}>
        {en ? "Get Warung OS — Starting IDR 199K" : "Dapatkan Warung OS — Mulai IDR 199K"}
      </a>
      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 40, flexWrap: "wrap", fontSize: 14, opacity: 0.8 }}>
        <span>📧 hello@warungos.com</span>
        <span>📱 WhatsApp: +62 xxx-xxxx-xxxx</span>
      </div>
    </Section>
  );

  const Footer = () => (
    <footer style={{ padding: "24px", textAlign: "center", background: C.primary, color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
      © 2026 Warung OS. {en ? "Built in Bali, for Bali." : "Dibuat di Bali, untuk Bali."} 🌴
    </footer>
  );

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: C.text }}>
      <Nav />
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
