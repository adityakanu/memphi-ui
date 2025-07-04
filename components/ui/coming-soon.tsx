export function ComingSoon() {
  return (
    <div className="text-center">
      <div className="bg-retro-1 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-3xl font-bold text-black mb-4 font-sans uppercase">
          More Components Coming Soon! 🚀
        </h2>
        <p className="text-black text-lg mb-6">
          We&apos;re working hard to bring you more Memphis-inspired components. 
          Stay tuned for inputs, cards, modals, and more!
        </p>
        <div className="flex justify-center space-x-4">
          <div className="w-12 h-12 bg-retro-1 border-4 border-black rounded-full transform rotate-12 animate-bounce"></div>
          <div className="w-12 h-12 bg-retro-2 border-4 border-black transform -rotate-12 animate-bounce delay-100"></div>
          <div className="w-12 h-12 bg-retro-9 border-4 border-black rounded-full transform rotate-45 animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
} 