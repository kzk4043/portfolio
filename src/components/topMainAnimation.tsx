import { clsx } from 'clsx';
import React from 'react';
import '@acab/reset.css';

const TopMainAnimation: React.FC = () => {
  return (
    <div className="flex h-[calc(100vh_-_96px)] items-center justify-center overflow-hidden">
      <div className="summerdream relative">
        <div className="sea absolute left-[-300px] top-[-300px]">
          <div className="surface absolute h-[600px] w-[600px] animate-top-surface overflow-hidden bg-top-animation-water"></div>
        </div>
        <div className="ship absolute left-[-50px] top-[-15px]">
          <div className="rotate">
            <div className="move">
              <div className="body">
                <div className="waves">
                  <div className="bodywaves">
                    {[...Array(50)].map((_, i) => (
                      <div className="wave" key={i}>
                        <div className="graphic" />
                      </div>
                    ))}
                  </div>
                  <div className="oarwaves -left">
                    {[...Array(20)].map((_, i) => (
                      <div className="wave" key={i}>
                        <div className="graphic" />
                      </div>
                    ))}
                  </div>
                  <div className="oarwaves -right">
                    {[...Array(20)].map((_, i) => (
                      <div className="wave" key={i}>
                        <div className="graphic" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="base h-[30px] w-[100px] rounded-[45%] bg-top-animation-base before:absolute before:left-[2px] before:top-[2px] before:h-[26px] before:w-[96px] before:rounded-[45%] before:bg-top-animation-sub" />
                <div className="board -front absolute right-[20px] top-[5px] h-[20px] w-[10px] rounded-[2px] bg-top-animation-base" />
                <div className="board -back absolute left-[20px] top-[5px] h-[20px] w-[10px] rounded-[2px] bg-top-animation-base" />
              </div>
              <div className="oars absolute left-[50px] top-[-30px]">
                <div className="oar -left absolute left-[50%] top-0">
                  <div className="row -left">
                    <div className="depth -left">
                      <div className="graphic -left relative h-[40px] w-[3px] bg-top-animation-base before:absolute before:left-[-3px] before:top-0 before:h-[15px] before:w-[9px] before:rounded-[5px_5px_100%_100%] before:bg-top-animation-base" />
                    </div>
                  </div>
                </div>
                <div className="oar -right absolute left-[50%] top-0 origin-[50%_45px] scale-y-[-1]">
                  <div className="row -right">
                    <div className="depth -right">
                      <div className="graphic -right relative h-[40px] w-[3px] bg-top-animation-base before:absolute before:left-[-3px] before:top-0 before:h-[15px] before:w-[9px] before:rounded-[5px_5px_100%_100%] before:bg-top-animation-base" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="human absolute left-[40px] top-0">
                <div className="legs">
                  <div className="leg -left absolute left-[-10px] top-[16px] h-[8px] w-[20px] rounded-[40%] bg-top-animation-foot before:absolute before:left-[-4px] before:top-[1px] before:h-[7px] before:w-[5px] before:rounded-[40%] before:bg-white" />
                  <div className="leg -right absolute left-[-10px] top-[6px] h-[8px] w-[20px] rounded-[40%] bg-top-animation-foot before:absolute before:left-[-4px] before:top-[-1px] before:h-[7px] before:w-[5px] before:rounded-[40%] before:bg-white" />
                </div>
                <div className="hat absolute h-[30px] w-[30px] rounded-full bg-top-animation-hat before:absolute before:left-[7px] before:top-[7px] before:h-[16px] before:w-[16px] before:rounded-full before:border before:border-top-animation-base" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute bottom-2 right-[21px] text-sm">
        copied from{' '}
        <a href="https://codepen.io/YusukeNakaya/pen/mdVZLmY">Codepen</a>
      </p>
    </div>
  );
};

export default TopMainAnimation;
