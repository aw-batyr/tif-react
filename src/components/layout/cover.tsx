import { FC } from "react";

interface Props {
  title: string;
}

export const Cover: FC<Props> = ({ title }) => {
  return (
    <div className="relative flex items-center h-[116px] md:h-[216px] w-full justify-center">
      <img
        src="/cover.png"
        className="-z-10 absolute size-full object-cover top-0 left-0"
      />
      <h1 className="text-on_primary md:text-5xl text-3xl">{title}</h1>
    </div>
  );
};
