import React from 'react';

const AboutMainAnimation: React.FC = () => {
  return (
    <div className="relative aspect-square w-full">
      <div className="buildings">
        <div className="building absolute left-[50%] top-[77%] h-[15%] w-[15%] origin-[0_-180%] animate-rotate">
          <div className="h-[65%] w-[40%] -translate-x-1/2 bg-[#888a91]">
            {[...Array(4)].map((_, i) => {
              return [...Array(5)].map((_, j) => {
                return (
                  <div
                    className={`absolute top-[5%] h-[14%] w-[15%] bg-[#bbecf4]`}
                    style={{
                      top: `${25 + 18 * i}%`,
                      left: `${5 + 19 * j}%`,
                    }}
                  />
                );
              });
            })}
          </div>
        </div>
        <div className="mountain">
          <div className="base absolute left-[50%] top-[77%] h-[15%] w-[15%] origin-[0_-180%] animate-[rotate_100s_linear_infinite_-10s]">
            <div
              className="relative h-[100%] w-[100%] -translate-x-1/2 bg-text-main"
              style={{ clipPath: 'polygon(0 0, 100% 0%, 60% 60%, 40% 60%)' }}
            >
              <div
                className="absolute bottom-0 right-0 h-[60%] w-full bg-white"
                style={{
                  clipPath:
                    'polygon(28% 0, 40% 20%, 45% 0%, 50% 10%, 60% 0%, 62% 15%, 72% 0%, 59% 32%, 41% 32%)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="earth">
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto aspect-square w-[56%] rounded-full border-[5px] border-white" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto aspect-square w-[55%] rounded-full border-[15px] border-[hsl(10,80%,60%)]" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto aspect-square w-[54%] animate-rotate rounded-full border-4 border-dotted" />
        {[...Array(8)].map((_, i) => {
          return (
            <div
              className="absolute bottom-0 left-0 right-0 top-0 m-auto aspect-square animate-[rotate_8s_linear_reverse_infinite_-2s] rounded-full border-4"
              style={{
                width: `${51 - i * 2}%`,
                borderColor: `hsl(${Math.random() * 360}, 80%, 60%)`,
                borderTopColor: 'transparent',
                animation: `rotate ${8 + Math.random() * 8}s linear ${
                  Math.random() > 0.7 ? 'reverse' : ''
                } infinite ${-Math.random() * 5}s`,
              }}
            />
          );
        })}
      </div>
      <div className="air">
        {[...Array(3)].map((_, i) => {
          const wingFlapL = [
            'animate-wing-flap-l-1',
            'animate-wing-flap-l-2',
            'animate-wing-flap-l-3',
          ];
          const wingFlapR = [
            'animate-wing-flap-r-1',
            'animate-wing-flap-r-2',
            'animate-wing-flap-r-3',
          ];

          return (
            <div
              className="base absolute h-[15%] w-[15%] origin-[0_-210%]"
              style={{
                top: `${81 + i * 1}%`,
                left: `${50 + i * 2}%`,
                animation: `rotate 50s linear infinite ${-i * 0.3}s`,
              }}
            >
              <div className="bird">
                <div
                  className="body1 absolute left-0 top-0 h-[5%] w-[20%] bg-text-black"
                  style={{
                    clipPath: 'polygon(0 100%, 100% 100%, 70% 30%)',
                  }}
                />
                <div
                  className="body1 absolute left-[1%] top-[5%] h-[2%] w-[5%] bg-text-main-80"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 60% 100%)',
                  }}
                />
                <div
                  className={`wing-l ${wingFlapL[i]} absolute left-[8%] top-[5%] h-[15%] w-[5%] bg-text-black`}
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 10% 100%)',
                  }}
                />
                <div
                  className={`wing-r ${wingFlapR[i]} absolute left-[8%] top-[-10%] h-[15%] w-[5%] bg-text-main-80`}
                  style={{
                    clipPath: 'polygon(0 100%, 30% 0, 100% 100%)',
                  }}
                />
              </div>
            </div>
          );
        })}
        <div className="base absolute left-[50%] top-[80%] h-[15%] w-[15%] origin-[0_-200%] animate-[rotate_30s_linear_infinite]">
          <div className="airplane h-[100%] w-[100%] -translate-x-1/2">
            <div
              className="body absolute left-0 top-1/2 h-[30%] w-[60%] bg-[#50b09c]"
              style={{
                clipPath:
                  'polygon(23% 63%, 7% 59%, 0% 50%, 1% 41%, 6% 38%, 36% 36%, 51% 1%, 59% 0%, 55% 35%, 83% 35%, 94% 41%, 100% 90%, 93% 90%, 82% 58%)',
              }}
            >
              {[...Array(9)].map((_, i) => {
                return (
                  <div
                    className="window absolute top-[44%] h-[9%] w-[5%] bg-[#eee]"
                    style={{ left: `${17 + i * 7}%` }}
                  />
                );
              })}
            </div>
            <div
              className="body absolute left-0 top-1/2 h-[30%] w-[60%] bg-[#50b09c60]"
              style={{
                clipPath: 'polygon(39% 63%, 67% 82%, 70% 75%, 58% 58%)',
              }}
            />
          </div>
        </div>
      </div>
      {/* 削除予定 */}
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto aspect-square h-[4%] w-[54%] rounded-full text-center text-xl">
        作成中
      </div>
    </div>
  );
};

export default AboutMainAnimation;
