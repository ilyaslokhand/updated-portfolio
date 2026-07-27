export default function ProfileCard({onNavigate}) {
  return (
    <div className="relative w-full max-w-[400px] desk:max-w-[480px] shrink-0 p-3 desk:p-5">

      {/* Border frame — sits UNDER the content panel */}
      <div
        className="absolute inset-0 z-0 border-2 border-border pointer-events-none"
        style={{ borderRadius: '240px 40px 40px 40px' }}
      />

      {/* Image — sits OVER the content panel */}
      <div
        className="relative z-30 w-full aspect-[480/775] overflow-hidden"
        style={{ borderRadius: '220px 30px 30px 30px' }}
      >
        <img
          src="/linkedin_ready_photo.png"
          alt="Ilyas Lokhand"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/85 to-transparent pt-24 pb-5 px-5 text-center">
          <h2 className="text-2xl desk:text-4xl font-bold text-white">Ilyas Lokhand</h2>
          <p className="mt-1 text-sm desk:text-base tracking-[2px] text-gray-300">
            FULL STACK DEVELOPER
          </p>
          <button
            onClick={() => onNavigate('portfolio')}
            className="mt-4 block w-full rounded-full bg-accent py-3 desk:py-4 text-center text-base desk:text-lg font-semibold text-black hover:brightness-110 transition"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}