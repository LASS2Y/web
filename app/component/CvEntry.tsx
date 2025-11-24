import { ReactNode } from "react";

type CvEntry = {
  title: string;
  employer: string;
  children: ReactNode;
};

export default function CvEntrty(props: CvEntry) {
  return (
    <div className="p-4 border border-slate-200 rounded-xl shadow mx-4 my-8 hover:bg-blue-300 py-2 px-2">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-sky-700">{props.title}</h3>
        <h4 className="mb-2 italic text-slate-700">{props.employer}</h4>
      </div>
      {props.children}
    </div>
  );
}
