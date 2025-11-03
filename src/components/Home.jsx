import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <nav className="flex w-full items-center justify-between bg-red-200 p-5 py-8">
          <h1 className="text-xl">MessengerApp</h1>
          <div className="flex gap-10">
            <a className="text-xl" href="/register">
              Registrieren
            </a>
            <a className="text-xl" href="/login">
              Login
            </a>
          </div>
        </nav>
        <div className="m-12 text-center">
          <p>Der Messenger, der (fast) alle Probleme löst.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <div className="rounded-md bg-slate-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <p>Sicher</p>
          </div>
          <div className="rounded-md bg-slate-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <p>Einfach</p>
          </div>
          <div className="rounded-md bg-slate-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <p>Super gemacht</p>
          </div>
          <div className="rounded-md bg-slate-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <p>Durchdacht</p>
          </div>
          <div className="rounded-md bg-slate-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <p>Überzeugend</p>
          </div>
          <div className="rounded-md bg-slate-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <p>Innovativ</p>
          </div>
          <div className="rounded-md bg-slate-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <p>Daten geschützt</p>
          </div>
          <div className="rounded-md bg-slate-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <p>Perfekt für jedermann</p>
          </div>
          <div className="rounded-md bg-slate-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <p>Lieben die Kunden</p>
          </div>
          <div className="rounded-md bg-slate-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <p>Ohne Werbung</p>
          </div>
          <div className="rounded-md bg-slate-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <p>Meine Daten sind sicher</p>
          </div>
          <div className="rounded-md bg-slate-100 p-6 transition-shadow duration-300 hover:shadow-lg">
            <p>Meine erste Wahl</p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
