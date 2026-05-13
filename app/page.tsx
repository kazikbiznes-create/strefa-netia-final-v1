"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Cog,
  Hammer,
  HardHat,
  Mail,
  MapPin,
  Medal,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";

const phoneDisplay = "508 933 543";
const phoneHref = "tel:508933543";
const email = "mirekbenka0108@gmail.com";

const services = [
  { title: "Transport piachu", text: "Dowóz piachu, ziemi, kruszyw i materiałów sypkich.", icon: Truck },
  { title: "Wykopy", text: "Wykopy pod fundamenty, przyłącza i instalacje.", icon: HardHat },
  { title: "Niwelacja terenu", text: "Równanie działek i przygotowanie terenu pod budowę.", icon: Hammer },
  { title: "Wyburzenia", text: "Rozbiórki, skuwanie i usuwanie elementów budowlanych.", icon: Zap },
];

const benefits = [
  { title: "Doświadczenie", text: "Lata praktyki i setki realizacji", icon: ShieldCheck },
  { title: "Nowoczesny sprzęt", text: "Sprawne maszyny i konkretne efekty", icon: Cog },
  { title: "Terminowość", text: "Działamy szybko i zgodnie z planem", icon: Clock },
  { title: "Konkurencyjne ceny", text: "Uczciwe wyceny bez ukrytych kosztów", icon: Medal },
];

const zones = [
  "Warszawa",
  "Marki",
  "Ząbki",
  "Piaseczno",
  "Pruszków",
  "Legionowo",
  "Wołomin",
  "Otwock",
  "Józefów",
  "Konstancin",
];

function HeroPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[2rem] border border-red-500/30 bg-black/70 p-6 shadow-[0_0_80px_rgba(220,38,38,.18)] backdrop-blur-2xl md:rounded-[2.7rem] md:p-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,.35),transparent_40%)]" />

      <div className="absolute right-0 top-0 hidden h-full w-[45%] overflow-hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-red-600/20 to-transparent" />
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [-40, 430] }}
            transition={{ duration: 3.8, repeat: Infinity, delay: i * 0.35, ease: "linear" }}
            className="absolute top-0 h-44 w-[2px] rotate-[25deg] bg-gradient-to-b from-transparent via-red-500 to-transparent blur-[1px]"
            style={{ right: `${18 + i * 12}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-full lg:max-w-[58%]">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">BENEK</p>
        <h3 className="mt-4 text-5xl font-black leading-[0.9] tracking-tight lg:text-6xl">
          Szybka
          <span className="block">wycena</span>
        </h3>
        <div className="mt-5 h-1 w-24 rounded-full bg-red-600" />
        <p className="mt-6 text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
          Zadzwoń, opisz robotę i lokalizację. Ustalimy termin, zakres i konkretną cenę.
        </p>
      </div>

      <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2">
        {services.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + i * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-[1.7rem] border border-white/10 bg-black/55 p-5 backdrop-blur-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-600/10">
                <Icon className="size-7 text-red-500" />
              </div>
              <h4 className="text-xl font-black">{item.title}</h4>
              <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function AreaMap() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px] rounded-full border border-red-500/30 bg-black/60">
      <div className="absolute inset-8 rounded-full border border-dashed border-red-500/25" />
      <div className="absolute inset-20 rounded-full border border-red-500/20" />

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.75, 0.35] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/30 blur-xl"
      />

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="h-5 w-5 rounded-full bg-red-500 shadow-[0_0_35px_rgba(239,68,68,.9)]" />
        <p className="mt-3 text-sm font-black uppercase">Warszawa</p>
      </div>

      {[
        ["Legionowo", "left-[37%] top-[8%]"],
        ["Marki", "right-[21%] top-[24%]"],
        ["Ząbki", "right-[36%] top-[36%]"],
        ["Wołomin", "right-[8%] top-[44%]"],
        ["Pruszków", "left-[9%] bottom-[23%]"],
        ["Piaseczno", "left-[43%] bottom-[8%]"],
        ["Otwock", "right-[19%] bottom-[21%]"],
      ].map(([city, pos]) => (
        <div key={city} className={`absolute ${pos}`}>
          <div className="mx-auto h-2 w-2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,.8)]" />
          <p className="mt-1 text-[10px] font-black md:text-xs">{city}</p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_10%_5%,rgba(220,38,38,.22),transparent_24%),radial-gradient(circle_at_85%_10%,rgba(220,38,38,.16),transparent_28%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50" />

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-[1480px] items-center justify-between px-4 py-3 md:px-10 md:py-4">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/benek-logo.png"
              alt="BENEK"
              width={74}
              height={74}
              className="h-11 w-11 object-contain md:h-14 md:w-14"
            />
            <div>
              <p className="text-2xl font-black leading-none md:text-3xl">BENEK</p>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-red-500 md:text-[10px]">
                TRANSPORT • WYKOPY
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-16 text-sm font-black md:flex">
            <a href="#uslugi" className="hover:text-red-500">Usługi</a>
            <a href="#teren" className="hover:text-red-500">Teren działania</a>
            <a href="#kontakt" className="hover:text-red-500">Kontakt</a>
          </div>

          <a
            href={phoneHref}
            className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-3 text-sm font-black shadow-xl shadow-red-600/35 transition hover:scale-105 md:gap-3 md:px-8 md:py-4 md:text-base"
          >
            <Phone className="size-4 md:size-5" />
            <span className="hidden sm:inline">{phoneDisplay}</span>
            <span className="sm:hidden">Dzwoń</span>
          </a>
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1480px] items-center gap-10 px-5 pb-10 pt-28 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-500/40 bg-red-600/10 px-4 py-2 text-xs font-black text-zinc-200 md:mb-8 md:px-5 md:py-3 md:text-sm"
          >
            <Sparkles className="size-4 text-red-500" />
            Warszawa i okolice • szybka wycena
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[3.05rem] font-black leading-[0.9] tracking-tighter sm:text-7xl lg:text-[6.2rem]"
          >
            ROBIMY
            <span className="block text-red-600">WYKOPY.</span>
            <span className="block">OGARNIAMY</span>
            <span className="block text-red-600">CAŁY TEREN.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-7 max-w-2xl text-base leading-7 text-zinc-300 md:mt-8 md:text-lg md:leading-8"
          >
            Specjalizujemy się w wykopach, niwelacji terenu, transporcie piachu
            i kompleksowych pracach ziemnych na terenie Warszawy i okolic.
            Szybkie terminy i konkretna robota.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10"
          >
            <a
              href="#kontakt"
              className="rounded-full bg-red-600 px-9 py-5 text-center text-lg font-black shadow-2xl shadow-red-600/40 transition hover:scale-105"
            >
              Darmowa wycena <ArrowRight className="ml-2 inline" />
            </a>

            <a
              href="#uslugi"
              className="rounded-full border border-white/20 bg-black/40 px-9 py-5 text-center text-lg font-black transition hover:border-red-500 hover:text-red-500"
            >
              Zobacz usługi
            </a>
          </motion.div>
        </div>

        <HeroPanel />
      </section>

      <section className="relative z-10 mx-auto flex w-full max-w-[1480px] flex-col gap-8 px-5 pb-10 md:px-10">
        <motion.div
          id="uslugi"
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 p-6 shadow-2xl backdrop-blur-xl md:rounded-[2.5rem] md:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,.18),transparent_35%)]" />

          <div className="relative">
            <p className="font-black uppercase tracking-[0.25em] text-red-500">Oferta</p>

            <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <h2 className="max-w-xl text-3xl font-black leading-none md:text-5xl">
                Kompleksowe prace ziemne
              </h2>

              <p className="max-w-md leading-7 text-zinc-400">
                Od transportu materiałów po przygotowanie terenu — szybko,
                konkretnie i bez zbędnych formalności.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {benefits.map(({ title, text, icon: Icon }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 md:p-7"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-red-600/0 blur-2xl transition group-hover:bg-red-600/25" />

                  <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/30 bg-red-600/10 shadow-lg shadow-red-600/10 transition group-hover:scale-110 group-hover:bg-red-600/20">
                    <Icon className="size-8 text-red-500" />
                  </div>

                  <h3 className="relative text-xl font-black">{title}</h3>
                  <p className="relative mt-3 leading-7 text-zinc-400">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          id="teren"
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/10 bg-black/55 p-6 shadow-2xl backdrop-blur-xl md:rounded-[2.5rem] md:p-12"
        >
          <p className="font-black uppercase tracking-[0.25em] text-red-500">Teren działania</p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">Warszawa i okolice</h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <AreaMap />

            <div className="grid grid-cols-1 gap-4 self-center sm:grid-cols-2 md:gap-5">
              {zones.map((zone) => (
                <div key={zone} className="flex items-center gap-3 text-lg font-bold">
                  <CheckCircle2 className="size-5 text-red-500" />
                  {zone}
                </div>
              ))}

              <a
                href={phoneHref}
                className="mt-4 rounded-2xl border border-white/15 bg-white/5 px-6 py-5 text-center font-black transition hover:border-red-500 hover:text-red-500 sm:col-span-2"
              >
                <MapPin className="mr-2 inline size-5" />
                Sprawdź dojazd
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="kontakt" className="relative z-10 mx-auto w-full max-w-[1480px] px-5 py-10 md:px-10">
        <div className="rounded-[2rem] border border-red-500/25 bg-gradient-to-br from-red-700 via-red-600 to-black p-1 shadow-2xl shadow-red-600/20 md:rounded-[2.5rem]">
          <div className="grid gap-8 rounded-[1.85rem] bg-black/85 p-6 md:grid-cols-2 md:rounded-[2.35rem] md:p-12">
            <div>
              <p className="font-black uppercase tracking-[0.3em] text-red-400">Kontakt</p>

              <h2 className="mt-4 text-4xl font-black leading-none md:text-5xl">
                Masz robotę do zrobienia?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                Zadzwoń albo napisz. Podaj lokalizację, zakres prac i termin.
                Oddzwonimy z konkretną wyceną.
              </p>
            </div>

            <div className="space-y-4">
              <a href={phoneHref} className="flex items-center gap-4 rounded-2xl bg-red-600 p-5 text-lg font-black md:text-xl">
                <Phone />
                {phoneDisplay}
              </a>

              <a href={`mailto:${email}`} className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 font-black">
                <Mail className="text-red-500" />
                <span className="break-all">{email}</span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 font-black">
                <MapPin className="text-red-500" />
                Warszawa i okolice
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-5 left-0 z-40 w-full px-4 md:hidden">
        <a
          href={phoneHref}
          className="flex items-center justify-center rounded-full bg-red-600 px-6 py-5 text-lg font-black shadow-2xl shadow-red-600/45"
        >
          <Phone className="mr-3" />
          Zadzwoń — {phoneDisplay}
        </a>
      </div>

      <footer className="relative z-10 border-t border-white/10 px-5 pb-28 pt-10 text-center text-xs font-bold uppercase tracking-[0.22em] text-zinc-500 md:pb-10">
        © 2025 BENEK — Wykopy • Transport piachu • Niwelacja • Wyburzenia
      </footer>
    </main>
  );
}