import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CompteursListe from '../components/CompteursListe';

export default function Acceuil() {
  return (
    <main className='bg-slate-200 w-full h-screen '>
      <Navbar />
      <section className='container mx-auto border-2 h-screen'>
        <CompteursListe />
        <Outlet />
      </section>
    </main>
  );
}
