import type { ComponentType } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  CreditCard,
  Eye,
  FileWarning,
  Plus,
  TrendingUp,
} from "lucide-react";
import { cn } from "cn";

import { buttonVariants } from "@/components/ui/button";

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: ComponentType<{ className?: string }>;
  tone: string;
};

const metrics: Metric[] = [
  {
    label: "Visitas a la landing",
    value: "1.284",
    detail: "+12,4% frente a la semana anterior",
    icon: Eye,
    tone: "bg-[#eef4fb] text-[#285878]",
  },
  {
    label: "Citas de hoy",
    value: "4",
    detail: "2 pagadas · 2 con pago pendiente",
    icon: CalendarDays,
    tone: "bg-[#e8f5ee] text-[#1f7a4d]",
  },
  {
    label: "Pagos pendientes",
    value: "2",
    detail: "$ 18.000 por confirmar",
    icon: CreditCard,
    tone: "bg-[#fef3c7] text-[#b45309]",
  },
  {
    label: "Sin ficha de evolución",
    value: "3",
    detail: "Clientes activos que requieren seguimiento",
    icon: FileWarning,
    tone: "bg-[#fde8e8] text-[#b42318]",
  },
];

type Appointment = {
  time: string;
  name: string;
  initials: string;
  channel: string;
  service: string;
  paid: boolean;
  avatar: string;
};

const appointments: Appointment[] = [
  {
    time: "08:00",
    name: "Juan Pérez",
    initials: "JP",
    channel: "WhatsApp",
    service: "Fisioterapia",
    paid: true,
    avatar: "bg-[#285878]",
  },
  {
    time: "09:00",
    name: "Lisa Gómez",
    initials: "LG",
    channel: "WhatsApp",
    service: "Rehabilitación",
    paid: true,
    avatar: "bg-[#0e7c66]",
  },
  {
    time: "15:00",
    name: "María Rodríguez",
    initials: "MR",
    channel: "Chatbot",
    service: "Terapia manual",
    paid: false,
    avatar: "bg-[#3e7cb1]",
  },
  {
    time: "19:00",
    name: "Carlos Medina",
    initials: "CM",
    channel: "Chatbot",
    service: "Fisioterapia",
    paid: false,
    avatar: "bg-[#b05810]",
  },
];

type Reservation = {
  name: string;
  initials: string;
  date: string;
  channel: string;
  status: "confirmed" | "pending";
  label: string;
  avatar: string;
};

const reservations: Reservation[] = [
  {
    name: "Daniel Peña",
    initials: "DP",
    date: "Martes · 10:00",
    channel: "Chatbot",
    status: "confirmed",
    label: "Confirmada · QR enviado",
    avatar: "bg-[#285878]",
  },
  {
    name: "María Rodríguez",
    initials: "MR",
    date: "Martes · 15:00",
    channel: "Chatbot",
    status: "pending",
    label: "Reservada · sin pagar",
    avatar: "bg-[#3e7cb1]",
  },
  {
    name: "Lisa Gómez",
    initials: "LG",
    date: "Miércoles · 09:00",
    channel: "WhatsApp",
    status: "confirmed",
    label: "Confirmada · QR enviado",
    avatar: "bg-[#0e7c66]",
  },
  {
    name: "Carlos Medina",
    initials: "CM",
    date: "Jueves · 19:00",
    channel: "Chatbot",
    status: "pending",
    label: "Reservada · sin pagar",
    avatar: "bg-[#b05810]",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
            Panel principal
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#0c1420]">
            Inicio
          </h1>
          <p className="mt-0.5 text-sm text-[#64748b]">
            Resumen general de la actividad de Energy-Phys
          </p>
        </div>
        <a
          href="/citas"
          className={cn(
            buttonVariants({ size: "sm" }),
            "gap-1.5 bg-[#285878] px-3 text-white hover:bg-[#1f4763]"
          )}
        >
          <Plus className="size-3.5" />
          Nueva cita
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="relative rounded-xl border border-[#eceef1] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
          >
            <div
              className={cn(
                "flex size-8 items-center justify-center rounded-lg",
                metric.tone
              )}
            >
              <metric.icon className="size-4" />
            </div>
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.1em] text-[#64748b]">
              {metric.label}
            </p>
            <p className="mt-1 text-2xl font-semibold leading-none tracking-tight text-[#0c1420]">
              {metric.value}
            </p>
            <p className="mt-1.5 text-[11px] text-[#94a3b8]">{metric.detail}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.65fr_1fr]">
        <section className="rounded-xl border border-[#eceef1] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
          <div className="flex flex-wrap items-center gap-2 border-b border-[#eceef1] px-4 py-3">
            <div className="flex items-center gap-2">
              <CalendarDays className="size-4 text-[#285878]" />
              <h2 className="text-sm font-semibold text-[#0c1420]">
                Citas de hoy
              </h2>
            </div>
            <span className="rounded-full bg-[#f1f4f7] px-2 py-0.5 text-[10px] font-medium text-[#64748b]">
              4 programadas
            </span>
            <a
              href="/citas"
              className="ml-auto flex items-center gap-1 text-[11px] font-medium text-[#285878] hover:underline"
            >
              Ver calendario
              <ArrowUpRight className="size-3" />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[10px] uppercase tracking-[0.12em] text-[#94a3b8]">
                  <th className="px-4 py-2.5 font-medium">Hora</th>
                  <th className="px-4 py-2.5 font-medium">Paciente</th>
                  <th className="px-4 py-2.5 font-medium">Servicio</th>
                  <th className="px-4 py-2.5 font-medium">Pago</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr
                    key={`${appointment.time}-${appointment.name}`}
                    className="border-t border-[#f1f4f7]"
                  >
                    <td className="px-4 py-3 font-mono text-xs text-[#64748b]">
                      {appointment.time}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={cn(
                            "flex size-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white",
                            appointment.avatar
                          )}
                        >
                          {appointment.initials}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[13px] font-medium text-[#0c1420]">
                            {appointment.name}
                          </p>
                          <p className="text-[11px] text-[#94a3b8]">
                            {appointment.channel}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-[#475569]">
                      {appointment.service}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium",
                          appointment.paid
                            ? "bg-[#e8f5ee] text-[#1f7a4d]"
                            : "bg-[#fef3c7] text-[#b45309]"
                        )}
                      >
                        {appointment.paid ? (
                          <CheckCircle2 className="size-3" />
                        ) : (
                          <Clock className="size-3" />
                        )}
                        {appointment.paid ? "Pagado" : "Pendiente"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="flex flex-col rounded-xl border border-[#eceef1] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
          <div className="flex items-center gap-2 border-b border-[#eceef1] px-4 py-3">
            <CreditCard className="size-4 text-[#285878]" />
            <h2 className="text-sm font-semibold text-[#0c1420]">
              Cobros del mes
            </h2>
            <a
              href="/pagos"
              className="ml-auto text-[11px] font-medium text-[#285878] hover:underline"
            >
              Gestionar
            </a>
          </div>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#94a3b8]">
                Ingresos confirmados
              </p>
              <div className="mt-1 flex items-end gap-2">
                <p className="text-2xl font-semibold tracking-tight text-[#0c1420]">
                  $ 246.000
                </p>
                <span className="mb-1 inline-flex items-center gap-0.5 rounded-full bg-[#e8f5ee] px-1.5 py-0.5 text-[10px] font-medium text-[#1f7a4d]">
                  <TrendingUp className="size-3" />
                  +8,2%
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#64748b]">Objetivo mensual</span>
                <span className="font-medium text-[#0c1420]">92%</span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#f1f4f7]">
                <div className="h-full w-[92%] rounded-full bg-[#285878]" />
              </div>
            </div>

            <div className="space-y-2 border-t border-[#f1f4f7] pt-3">
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-[#64748b]">Consultas pagadas</span>
                <span className="font-medium text-[#0c1420]">12</span>
              </div>
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-[#64748b]">Pagos pendientes</span>
                <span className="font-medium text-[#b45309]">2</span>
              </div>
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-[#64748b]">QR enviados</span>
                <span className="font-medium text-[#0c1420]">14</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="rounded-xl border border-[#eceef1] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
        <div className="flex flex-wrap items-center gap-2 border-b border-[#eceef1] px-4 py-3">
          <h2 className="text-sm font-semibold text-[#0c1420]">
            Reservas recientes
          </h2>
          <span className="rounded-full bg-[#f1f4f7] px-2 py-0.5 text-[10px] font-medium text-[#64748b]">
            Canal WhatsApp
          </span>
          <span className="ml-auto text-[11px] text-[#94a3b8]">
            Últimas 24 horas
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-[0.12em] text-[#94a3b8]">
                <th className="px-4 py-2.5 font-medium">Paciente</th>
                <th className="px-4 py-2.5 font-medium">Fecha</th>
                <th className="px-4 py-2.5 font-medium">Canal</th>
                <th className="px-4 py-2.5 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr
                  key={`${reservation.name}-${reservation.date}`}
                  className="border-t border-[#f1f4f7]"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white",
                          reservation.avatar
                        )}
                      >
                        {reservation.initials}
                      </span>
                      <span className="text-[13px] font-medium text-[#0c1420]">
                        {reservation.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[13px] text-[#475569]">
                    {reservation.date}
                  </td>
                  <td className="px-4 py-3 text-[13px] text-[#475569]">
                    {reservation.channel}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium",
                        reservation.status === "confirmed"
                          ? "bg-[#e8f5ee] text-[#1f7a4d]"
                          : "bg-[#fef3c7] text-[#b45309]"
                      )}
                    >
                      {reservation.label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
