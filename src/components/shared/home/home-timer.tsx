import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TimerItem } from "../";

interface Props {
  className?: string;
}

export const HomeTimer: FC<Props> = () => {
  const { t } = useTranslation("home");

  const [timeLeft, setTimeLeft] = useState({
    days: "0",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [prevValues, setPrevValues] = useState<Record<string, string>>({});
  const targetDate = new Date("2025-06-11T08:00:00").getTime();

  // Функция для вычисления оставшегося времени
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };

  useEffect(() => {
    // Первоначальный расчет
    const initialTime = calculateTimeLeft();
    if (initialTime) {
      setTimeLeft({
        days: initialTime.days.toString(),
        hours: initialTime.hours.toString().padStart(2, "0"),
        minutes: initialTime.minutes.toString().padStart(2, "0"),
        seconds: initialTime.seconds.toString().padStart(2, "0"),
      });
    }

    const timerInterval = setInterval(() => {
      const newTime = calculateTimeLeft();
      if (!newTime) {
        clearInterval(timerInterval);
        return;
      }

      // Обновляем предыдущие значения перед установкой новых
      setPrevValues({
        days: timeLeft.days,
        hours: timeLeft.hours,
        minutes: timeLeft.minutes,
        seconds: timeLeft.seconds,
      });

      setTimeLeft({
        days: newTime.days.toString(),
        hours: newTime.hours.toString().padStart(2, "0"),
        minutes: newTime.minutes.toString().padStart(2, "0"),
        seconds: newTime.seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [targetDate]); // Убрали зависимость от timeLeft

  const {
    days: daysLabel,
    hours: hoursLabel,
    minutes: minutesLabel,
    seconds: secondsLabel,
  } = t("timer", {
    returnObjects: true,
  }) as {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  return (
    <div className="flex flex-col scale-[0.7] fixed -left-4 top-1/3 gap-2 bg-[#E7E5E5] py-4 pr-4 rounded drop-shadow-md  z-[100]">
      <TimerItem
        value={timeLeft.days}
        prevValue={prevValues.days || timeLeft.days}
        label={daysLabel}
      />
      <TimerItem
        value={timeLeft.hours}
        prevValue={prevValues.hours || timeLeft.hours}
        label={hoursLabel}
      />
      <TimerItem
        value={timeLeft.minutes}
        prevValue={prevValues.minutes || timeLeft.minutes}
        label={minutesLabel}
      />
      <TimerItem
        value={timeLeft.seconds}
        prevValue={prevValues.seconds || timeLeft.seconds}
        label={secondsLabel}
      />
    </div>
  );
};
