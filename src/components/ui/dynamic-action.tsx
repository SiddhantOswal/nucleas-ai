
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ActionItem {
  id: string;
  label: string;
  icon: React.ElementType;
  content: React.ReactNode;
  dimensions: {
    width: number;
    height: number;
  };
}

export interface DynamicActionBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  actions: ActionItem[];
}

const DynamicActionBar = React.forwardRef<
  HTMLDivElement,
  DynamicActionBarProps
>(({ actions, className, ...props }, ref) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeAction = activeIndex !== null ? actions[activeIndex] : null;

  const BUTTON_BAR_HEIGHT = 56;

  const containerAnimate = activeAction
    ? {
        width: activeAction.dimensions.width,
        height: activeAction.dimensions.height + BUTTON_BAR_HEIGHT,
      }
    : {
        width: 410,
        height: BUTTON_BAR_HEIGHT,
      };

  const transition = { type: "spring", stiffness: 400, damping: 35 };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseLeave={() => setActiveIndex(null)}
      {...props}
    >
      <motion.div
        className="flex flex-col overflow-hidden rounded-2xl bg-black/5 backdrop-blur-xl"
        animate={containerAnimate}
        transition={transition}
        initial={{ width: 410, height: BUTTON_BAR_HEIGHT }}
      >
        <div className="flex-grow overflow-hidden">
          <AnimatePresence>
            {activeAction && (
              <motion.div
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                {activeAction.content}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="flex flex-shrink-0 items-center justify-center gap-2 px-2"
          style={{ height: `${BUTTON_BAR_HEIGHT}px` }}
        >
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onMouseEnter={() => setActiveIndex(index)}
                className="flex items-center justify-center gap-2 rounded-2xl py-3 px-4 text-zinc-800 transition-colors duration-300 hover:bg-zinc-950 hover:text-white"
              >
                <Icon className="size-6" />
                <span className="font-bold">{action.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
});

DynamicActionBar.displayName = "DynamicActionBar";

const AppsContent = () => (
  <div className="flex flex-col items-center p-4">
    <div className="flex w-[95%] cursor-pointer items-center gap-3 rounded-2xl py-3 duration-300 hover:bg-black/5 hover:px-3">
      <div className="h-16 w-16 shrink-0 rounded-xl bg-blue-100 p-4 flex items-center justify-center">
        <span className="text-blue-600 font-bold">CDP</span>
      </div>
      <div className="flex w-full flex-col items-start">
        <p className="font-bold">Real-time CDP</p>
        <p className="opacity-80">Data Platform</p>
      </div>
      <span className="block shrink-0 rounded-lg border border-black/50 py-1 px-2 text-sm opacity-80">
        Live
      </span>
    </div>
    <div className="flex w-[95%] cursor-pointer items-center gap-3 rounded-2xl py-3 duration-300 hover:bg-black/5 hover:px-3">
      <div className="h-16 w-16 shrink-0 rounded-xl bg-purple-100 p-4 flex items-center justify-center">
        <span className="text-purple-600 font-bold">AI</span>
      </div>
      <div className="flex w-full flex-col items-start">
        <p className="font-bold">AI Analytics</p>
        <p className="opacity-80">Smart Insights</p>
      </div>
      <span className="block shrink-0 rounded-lg border border-black/50 py-1 px-2 text-sm opacity-80">
        Beta
      </span>
    </div>
    <div className="mt-4 h-[2px] w-[95%] bg-black/10"></div>
  </div>
);

const ComponentsContent = () => (
  <div className="flex flex-col items-center gap-1 py-4 px-6">
    {[
      { name: "Pixel Tracker", tag: "Events", date: "Active" },
      { name: "Smart Routing", tag: "Geo", date: "Live" },
      { name: "Integrations", tag: "CRM", date: "50+" },
    ].map((item) => (
      <div key={item.name} className="group w-full">
        <div className="mx-auto flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl py-2 duration-300 group-hover:w-[95%] group-hover:bg-black/5 group-hover:px-3">
          <div className="flex items-center gap-3">
            <div className="size-6 shrink-0 bg-green-500 rounded opacity-75"></div>
            <span className="font-bold">{item.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="block shrink-0 rounded-lg border border-black/50 py-1 px-2 text-sm opacity-80">
              {item.tag}
            </span>
            <span>{item.date}</span>
          </div>
        </div>
      </div>
    ))}
    <div className="mt-4 h-[2px] w-full bg-black/10"></div>
  </div>
);

const NotesContent = () => (
  <div className="flex flex-col items-center gap-1 p-4">
    {[
      { name: "Customer Journey Map", date: "Dec, 24" },
      { name: "Attribution Analysis", date: "Nov, 24" },
    ].map((item) => (
      <div key={item.name} className="group w-full">
        <div className="mx-auto flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl py-2 duration-300 group-hover:w-[95%] group-hover:bg-black/5 group-hover:px-3">
          <div className="flex items-center gap-3">
            <div className="size-6 bg-orange-500 rounded"></div>
            <span className="font-bold">{item.name}</span>
          </div>
          <span>{item.date}</span>
        </div>
      </div>
    ))}
    <div className="mt-4 h-[2px] w-full bg-black/10"></div>
  </div>
);

export const DemoOne = () => {
  const actions: ActionItem[] = [
    {
      id: "apps",
      label: "Platform",
      icon: () => <div className="w-6 h-6 bg-blue-500 rounded"></div>,
      content: <AppsContent />,
      dimensions: { width: 500, height: 234 },
    },
    {
      id: "components",
      label: "Features",
      icon: () => <div className="w-6 h-6 bg-green-500 rounded"></div>,
      content: <ComponentsContent />,
      dimensions: { width: 460, height: 206 },
    },
    {
      id: "notes",
      label: "Insights",
      icon: () => <div className="w-6 h-6 bg-orange-500 rounded"></div>,
      content: <NotesContent />,
      dimensions: { width: 480, height: 148 },
    },
  ];

  return (
    <div className="flex h-[450px] w-full items-end justify-center rounded-lg bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 p-4 pb-14">
      <DynamicActionBar actions={actions} />
    </div>
  );
};

export default DynamicActionBar;
