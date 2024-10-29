import cronexiaLogo from '/cronexia.svg';

interface INavbarProps {}

export default function Navbar() {
  return (
    <header className='bg-slate-200 md:p-2 lg:p-4'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        {/* lg+  */}
        <nav className='relative flex items-center justify-start gap-x-6 h-16 bg-slate-100/70 lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6'>
          <a href='#' title='' className='flex'>
            <img
              className='w-auto h-12 lg:h-12'
              src={cronexiaLogo}
              alt='Cronexia Logo'
            />
          </a>
          <h1 className='text-4xl font-semibold'>Compteurs</h1>
        </nav>
      </div>
    </header>
  );
}
