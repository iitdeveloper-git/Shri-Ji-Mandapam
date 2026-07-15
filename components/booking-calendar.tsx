"use client";

import { useMemo, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, Minus, Plus, Tag } from "lucide-react";

type Props = {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onAvailability: () => void;
};

const toIso = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatShort = (value: string) =>
  value ? new Date(`${value}T00:00:00`).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" }) : "Select";

export function BookingCalendar({ startDate, endDate, onStartDateChange, onEndDateChange, onAvailability }: Props) {
  const initial = startDate ? new Date(`${startDate}T00:00:00`) : new Date();
  const [visibleMonth, setVisibleMonth] = useState(new Date(initial.getFullYear(), initial.getMonth(), 1));
  const [selectingEnd, setSelectingEnd] = useState(Boolean(startDate && !endDate));
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [promoOpen, setPromoOpen] = useState(false);
  const [promo, setPromo] = useState("");
  const today = toIso(new Date());

  const days = useMemo(() => {
    const year = visibleMonth.getFullYear();
    const month = visibleMonth.getMonth();
    const firstWeekday = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    return [...Array(firstWeekday).fill(null), ...Array.from({ length: totalDays }, (_, i) => new Date(year, month, i + 1))];
  }, [visibleMonth]);

  const nights = startDate && endDate
    ? Math.max(0, Math.round((new Date(`${endDate}T00:00:00`).getTime() - new Date(`${startDate}T00:00:00`).getTime()) / 86400000))
    : 0;

  function chooseDate(date: Date) {
    const value = toIso(date);
    if (value < today) return;
    if (!startDate || !selectingEnd || value < startDate) {
      onStartDateChange(value);
      onEndDateChange("");
      setSelectingEnd(true);
    } else {
      onEndDateChange(value);
      setSelectingEnd(false);
    }
  }

  const counter = (label: string, value: number, setValue: (value: number) => void, min: number) => (
    <div className="flex items-center justify-between py-2.5">
      <span className="text-sm font-semibold text-charcoal">{label}</span>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => setValue(Math.max(min, value - 1))} className="grid h-7 w-7 place-items-center rounded-full border border-crimson/20 text-crimson hover:bg-crimson hover:text-white" aria-label={`Remove ${label}`}><Minus className="h-3 w-3" /></button>
        <span className="w-5 text-center text-sm font-bold">{value}</span>
        <button type="button" onClick={() => setValue(value + 1)} className="grid h-7 w-7 place-items-center rounded-full border border-crimson/20 text-crimson hover:bg-crimson hover:text-white" aria-label={`Add ${label}`}><Plus className="h-3 w-3" /></button>
      </div>
    </div>
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-crimson/10 bg-white shadow-soft">
      <div className="border-b border-crimson/10 p-5">
        <div className="flex items-center justify-between">
          <button type="button" onClick={() => setVisibleMonth(new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1))} className="grid h-9 w-9 place-items-center rounded-full hover:bg-crimson-light" aria-label="Previous month"><ChevronLeft className="h-4 w-4" /></button>
          <div className="text-center"><p className="font-heading text-xl font-bold text-charcoal">{visibleMonth.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</p><button type="button" onClick={() => setVisibleMonth(new Date())} className="text-[10px] font-bold uppercase tracking-wider text-crimson">Today</button></div>
          <button type="button" onClick={() => setVisibleMonth(new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1))} className="grid h-9 w-9 place-items-center rounded-full hover:bg-crimson-light" aria-label="Next month"><ChevronRight className="h-4 w-4" /></button>
        </div>
        <div className="mt-5 grid grid-cols-7 text-center text-[10px] font-bold uppercase text-charcoal/45">{["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((day) => <span key={day}>{day}</span>)}</div>
        <div className="mt-2 grid grid-cols-7 gap-1">
          {days.map((date, index) => {
            if (!date) return <span key={`blank-${index}`} />;
            const value = toIso(date);
            const disabled = value < today;
            const selected = value === startDate || value === endDate;
            const inRange = startDate && endDate && value > startDate && value < endDate;
            return <button key={value} type="button" disabled={disabled} onClick={() => chooseDate(date)} className={`aspect-square rounded-md text-xs font-semibold transition ${selected ? "bg-crimson text-white shadow" : inRange ? "bg-gold/45 text-crimson" : disabled ? "cursor-not-allowed text-charcoal/20" : "text-charcoal hover:bg-crimson-light hover:text-crimson"}`}>{date.getDate()}</button>;
          })}
        </div>
        <p className="mt-3 text-center text-[10px] font-semibold text-charcoal/50">{selectingEnd ? "Now select checkout / event end date" : "Select your check-in / event date"}</p>
      </div>

      <div className="grid grid-cols-3 border-b border-crimson/10 p-4 text-center">
        <div><p className="text-[9px] font-bold uppercase text-charcoal/40">Check-in</p><p className="mt-1 text-xs font-bold">{formatShort(startDate)}</p></div>
        <div className="border-x border-crimson/10"><p className="text-[9px] font-bold uppercase text-charcoal/40">Check-out</p><p className="mt-1 text-xs font-bold">{formatShort(endDate)}</p></div>
        <div><p className="text-[9px] font-bold uppercase text-charcoal/40">Nights</p><p className="mt-1 text-xs font-bold">{nights || "—"}</p></div>
      </div>

      <div className="divide-y divide-crimson/10 px-5 py-2">{counter("Rooms / spaces", rooms, setRooms, 1)}{counter("Adults", adults, setAdults, 1)}{counter("Kids", kids, setKids, 0)}</div>

      <div className="p-5 pt-2">
        <button type="button" onClick={onAvailability} disabled={!startDate} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-crimson px-5 font-bold text-white transition hover:bg-crimson-dark disabled:cursor-not-allowed disabled:opacity-45"><CalendarDays className="h-4 w-4" /> Check availability</button>
        <button type="button" onClick={() => setPromoOpen(!promoOpen)} className="mt-3 flex w-full items-center justify-center gap-2 text-xs font-bold text-crimson"><Tag className="h-3.5 w-3.5" /> I have a promo code</button>
        {promoOpen ? <div className="mt-3 flex gap-2"><input value={promo} onChange={(event) => setPromo(event.target.value.toUpperCase())} placeholder="Promo code" className="min-w-0 flex-1 rounded-lg border border-crimson/15 px-3 py-2 text-xs font-bold outline-none focus:border-crimson" /><button type="button" onClick={() => promo && alert(`Promo code ${promo} will be verified by our booking desk.`)} className="rounded-lg bg-charcoal px-3 text-xs font-bold text-white">Apply</button></div> : null}
      </div>
    </div>
  );
}
