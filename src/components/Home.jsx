import { Component } from "react";
import Snowfall from "react-snowfall";

function Home() {
  const currentmonth = new Date().getMonth();
  const isSnowing = currentmonth === 11 || currentmonth === 0 || currentmonth === 1; //in den Wintermonaten Dezember, Januar, Februar

  return (
    <div className="flex min-h-screen flex-col">
      {isSnowing && <Snowfall />}
      <nav className="flex h-24 w-full items-center justify-between bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800 p-5">
        <h1 className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent">MessengerApp</h1>
        <div className="flex gap-10">
          <a className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent" href="/register">
            Registrieren
          </a>
          <a className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent transition-all duration-300" href="/login">
            Login
          </a>
        </div>
      </nav>
      <div className="w-full flex-1 bg-gradient-to-r from-green-300 via-violet-600 to-cyan-400">
        <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
          <Card text="Sicher" />
          <Card text="Einfach" />
          <Card text="Super gemacht" />
          <Card text="Durchdacht" />
          <Card text="Überzeugend" />
          <Card text="Innovativ" />
          <Card text="Daten geschützt" />
          <Card text="Perfekt für jedermann" />
          <Card text="Lieben die Kunden" />
          <Card text="Ohne Werbung" />
          <Card text="Meine Daten sind sicher" />
          <Card text="Meine erste Wahl" />
        </div>
      </div>
    </div>
  );
}

export default Home;

function Card({ text }) {
  return (
    <div className="rounded-md bg-slate-100 p-5 transition-all duration-300 hover:cursor-pointer hover:bg-slate-200 hover:shadow-2xl">
      <p>{text}</p>
    </div>
  );
}
