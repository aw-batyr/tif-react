export const TimerItem = ({
  value,
  label,
  prevValue,
}: {
  value: string;
  label: string;
  prevValue: string;
}) => (
  <div className="timer-item flex flex-col items-center justify-center bg-teritary p-1 rounded-[2px]">
    <div className="relative font-bold h-10 ">
      <span
        className={`absolute -translate-x-1/2 black flex text-center text-white text-transparent size-10 sm:text-3xl text-xl leading-none transition-all duration-300 ${
          prevValue !== value ? " opacity-0" : " opacity-100"
        }`}
      >
        {prevValue}
      </span>
      <span
        className={`absolute -translate-x-1/2 black text-center bg-gradient-to-t from-white to-surface_high text-transparent bg-clip-text  sm:text-3xl text-xl leading-none transition-all duration-300 ${
          prevValue !== value ? "opacity-100" : "opacity-0"
        }`}
      >
        {value}
      </span>
    </div>
    <div className="label normal sm:text-lg text-base text-[#FACFAE] text-center">
      {label}
    </div>
  </div>
);
