"use client";
import { useEffect, useState } from "react";
import { IcSearchHome, IcCalendar, IcKey, IcChat, IcShield, IcCard } from "./CribsIcons";
import IPhone from "./IPhone";
import { HomeScreen, ChatThreadScreen, InspectScreen, PayScreen, MoveInScreen, SupportScreen } from "./AppScreens";

const STEPS = [
  { icon: IcSearchHome, title: "Search & Discover", desc: "Browse verified listings filtered by location, budget, and property type. Every listing is inspected before it goes live.", screen: HomeScreen },
  { icon: IcChat, title: "Connect & Chat", desc: "Chat with landlords and verified agents through the app. Ask questions, see every fee upfront, and schedule inspections in one place.", screen: ChatThreadScreen },
  { icon: IcCalendar, title: "Inspect & Verify", desc: "Take a virtual tour or book a physical inspection in one tap. See the actual property before you commit to anything.", screen: InspectScreen },
  { icon: IcCard, title: "Pay Securely", desc: "Make payments through the platform with full protection. Your money is held safely until you confirm move-in.", screen: PayScreen },
  { icon: IcKey, title: "Move In", desc: "Get your keys and settle in. Book move-in services like cleaning and logistics right from the app.", screen: MoveInScreen },
  { icon: IcShield, title: "Stay Protected", desc: "Ongoing support for maintenance, disputes, and renewals. We're with you through the whole tenancy, not just the deal.", screen: SupportScreen },
];

const DURATION = 6000;

export default function HowItWorksStepper() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % STEPS.length), DURATION);
    return () => window.clearTimeout(t);
  }, [active, paused]);

  return (
    <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center">
      {/* steps */}
      <div className="reveal order-2 lg:order-1 flex flex-col gap-2" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const on = i === active;
          return (
            <button
              key={s.title}
              type="button"
              onClick={() => setActive(i)}
              className="step-item text-left rounded-[16px] relative overflow-hidden cursor-pointer"
              style={{
                background: on ? "var(--card)" : "transparent",
                border: `1px solid ${on ? "var(--card-border-hover)" : "transparent"}`,
              }}
            >
              <div className="flex items-center gap-4 px-4 sm:px-5 pt-4 pb-4">
                <span className="flex-shrink-0 inline-flex transition-all duration-300" style={{ color: on ? "var(--gold)" : "var(--dim)", transform: on ? "scale(1.08)" : "none" }}>
                  <Icon size={32} />
                </span>
                <span className="text-[1rem] sm:text-[1.08rem] font-bold transition-colors" style={{ color: on ? "var(--cream)" : "var(--text)" }}>{s.title}</span>
              </div>
              <div className={`mnav ${on ? "open" : ""}`}>
                <div>
                  <p className="text-[0.86rem] leading-[1.65] px-4 sm:px-5 pb-5 sm:pl-[4.5rem]" style={{ color: "var(--text-2)" }}>{s.desc}</p>
                </div>
              </div>
              {on && (
                <span className="absolute left-0 bottom-0 h-[3px] w-full" style={{ background: "var(--card-2)" }}>
                  <span key={active} className="step-progress block h-full" style={{ background: "var(--gold)", animationDuration: `${DURATION}ms`, animationPlayState: paused ? "paused" : "running" }} />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* phone */}
      <div className="reveal reveal-d1 order-1 lg:order-2 flex justify-center">
        <div className="float-slow">
          <IPhone width={250} className="lg:hidden"><Screens active={active} /></IPhone>
          <IPhone width={290} className="hidden lg:block"><Screens active={active} /></IPhone>
        </div>
      </div>
    </div>
  );
}

function Screens({ active }: { active: number }) {
  return (
    <div className="relative h-full">
      {STEPS.map((s, i) => {
        const Screen = s.screen;
        return (
          <div
            key={s.title}
            className="absolute inset-0 transition-all duration-500"
            style={{ opacity: i === active ? 1 : 0, transform: i === active ? "none" : "translateY(10px)", pointerEvents: i === active ? "auto" : "none" }}
            aria-hidden={i !== active}
          >
            <Screen />
          </div>
        );
      })}
    </div>
  );
}
