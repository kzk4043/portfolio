import React from 'react';

const AnimationBird: React.FC<{
  topDiff?: number;
  leftDiff?: number;
  delay: number;
  wingFlapTiming?: number;
  isReverse?: boolean;
  color?: string;
}> = ({
  topDiff = 0,
  leftDiff = 0,
  delay = 0,
  wingFlapTiming = 1,
  isReverse = false,
  color = '#0b1013',
}) => {
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
      className="base absolute h-[15%] w-[15%] origin-[0_-220%]"
      style={{
        top: `${82 + topDiff * 1}%`,
        left: `${50 + leftDiff * 2}%`,
        animation: `rotate ${isReverse ? 100 : 50}s linear ${
          isReverse ? 'reverse' : ''
        } infinite -${delay}s`,
      }}
    >
      <div
        className="bird h-full w-full"
        style={{ transform: isReverse ? 'scale(-1,1)' : undefined }}
      >
        <div
          className="body1 absolute left-0 top-0 h-[5%] w-[20%]"
          style={{
            backgroundColor: color,
            clipPath: 'polygon(0 100%, 100% 100%, 70% 30%)',
          }}
        />
        <div
          className="body1 absolute left-[1%] top-[5%] h-[2%] w-[5%]"
          style={{
            backgroundColor: color,
            opacity: 0.6,
            clipPath: 'polygon(0 0, 100% 0, 60% 100%)',
          }}
        />
        <div
          className={`wing-l ${wingFlapL[wingFlapTiming]} absolute left-[8%] top-[5%] h-[15%] w-[5%]`}
          style={{
            backgroundColor: color,
            clipPath: 'polygon(0 0, 100% 0, 10% 100%)',
          }}
        />
        <div
          className={`wing-r ${wingFlapR[wingFlapTiming]} absolute left-[8%] top-[-10%] h-[15%] w-[5%]`}
          style={{
            backgroundColor: color,
            opacity: 0.6,
            clipPath: 'polygon(0 100%, 30% 0, 100% 100%)',
          }}
        />
      </div>
    </div>
  );
};

const AboutMainAnimation: React.FC = () => {
  return (
    <div className="relative aspect-square w-full">
      <div className="ground">
        {/* 木 */}
        {[...Array(70)].map((_, i) => {
          return (
            <div
              className="tree absolute left-[50%] top-[77%] h-[15%] w-[15%] origin-[0_-180%]"
              style={{
                animation: `rotate 100s linear infinite ${
                  -Math.random() * 100
                }s`,
              }}
            >
              <div
                className="h-[50%] w-[30%] -translate-x-1/2"
                style={{
                  height: `${35 + Math.random() * 20}%`,
                  width: `${15 + Math.random() * 20}%`,
                }}
              >
                <svg
                  className="box h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M50,25 C45,20 0,25 20,40 C5,40 5,50 20,50 C10,55 15,65 30,60 C20,65 35,80 36,80 C30,85 35,90 45,90 C45,100 55,100 60,80 C67,83 75,70 65,68 C70,70 75,50 70,45 C75,55 85,40 80,35 C90,30 75,20 75,23 Z"
                    fill={`hsl(${40 + Math.random() * 80}, 80%, 60%)`}
                  />
                  <path
                    d="M40,0 L42,15 L43,37 L20,47 L43,42 L50,70 L55,55 L68,60 L55,50 L56,37 L73,40 L56,32 L60,0 Z"
                    fill={`hsl(${30 + Math.random() * 10}, 80%, 45%)`}
                  />
                </svg>
              </div>
            </div>
          );
        })}
        {/* 家 */}
        {[...Array(13)].map((_, i) => {
          const mainRandom = Math.random();
          const mainColor = `hsl(${mainRandom * 360} 80% 60%)`;
          const mainColor20 = `hsl(${mainRandom * 360} 80% 60%/ .4)`;
          const doorColor = `hsl(${mainRandom * 360 + 180} 80% 60%)`;

          return (
            <div
              className="house absolute left-[50%] top-[77%] h-[15%] w-[15%] origin-[0_-180%] rotate-180"
              style={{
                animation: `rotate 100s linear infinite ${
                  // 富士山とエッフェル塔にかぶらないようにする
                  -(30 + Math.random() * 70)
                }s`,
              }}
            >
              <div
                className="h-[50%] w-[40%] -translate-x-1/2"
                style={{
                  height: `${40 + Math.random() * 20}%`,
                  width: `${30 + Math.random() * 20}%`,
                }}
              >
                <svg
                  className="box h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {/* 家 */}
                  <path
                    d="M10,0 L10,70 L50,95 L70,82 L70,95 L80,95 L80,77 L90,70 L90,0 Z M22,42 L22,62 L42,62 L42,42 Z M58,42 L58,62 L78,62 L78,42 Z M42,68 L42,80 L58,80 L58,68 Z"
                    fill={mainColor}
                    fill-rule="evenodd"
                  />
                  {/* 屋根 */}
                  <path
                    d="M5,65 L50,95 M50,95 L95,65"
                    stroke={`hsl(${30 + Math.random() * 10}, 80%, 45%)`}
                    stroke-width="7"
                  />
                  {/* ドア */}
                  <path
                    d="M20,0 L20,30 C20,40 40,40 40,30 L40,30 L40,0 Z"
                    fill={doorColor}
                  />
                  <circle cx="35" cy="25" r="2" fill="white" />
                  {/* 窓 */}
                  <path
                    d="M22,42 L22,62 L42,62 L42,42 Z M22,52 L42,52 M32,42 L32,62"
                    stroke="white"
                    stroke-width="2"
                    fill={mainColor20}
                  />
                  <path
                    d="M58,42 L58,62 L78,62 L78,42 Z M58,52 L78,52 M68,42 L68,62"
                    stroke="white"
                    stroke-width="2"
                    fill={mainColor20}
                  />
                  <path
                    d="M42,68 L42,80 L58,80 L58,68 Z M42,74 L58,74 M50,68 L50,80"
                    stroke="white"
                    stroke-width="2"
                    fill={mainColor20}
                  />
                </svg>
              </div>
            </div>
          );
        })}
        {/* ビル */}
        {[...Array(5)].map((_, index) => {
          return (
            <div
              className="building absolute left-[50%] top-[77%] h-[15%] w-[15%] origin-[0_-180%]"
              style={{
                animation: `rotate 100s linear infinite ${
                  // 富士山とエッフェル塔にかぶらないようにする
                  -(30 + Math.random() * 70)
                }s`,
              }}
            >
              <div
                className="h-[65%] w-[40%] -translate-x-1/2"
                style={{
                  height: `${55 + Math.random() * 20}%`,
                  width: `${30 + Math.random() * 10}%`,
                  backgroundColor: `hsl(${Math.random() * 360} 30% 50%)`,
                }}
              >
                {[...Array(5)].map((_, i) => {
                  return [...Array(5)].map((_, j) => {
                    return (
                      <div
                        className={`absolute top-[5%] h-[10%] w-[15%] bg-[#bbecf4]`}
                        style={{
                          top: `${30 + 13 * i}%`,
                          left: `${5 + 19 * j}%`,
                        }}
                      />
                    );
                  });
                })}
              </div>
            </div>
          );
        })}
        {/* エッフェル塔 */}
        <div className="eiffel absolute left-[50%] top-[77%] h-[15%] w-[15%] origin-[0_-180%] animate-[rotate_100s_linear_infinite_-20s]">
          <div className="h-[100%] w-[70%] -translate-x-1/2">
            <svg
              className="box h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 Q40,20 47,95 L53,95 Q60,20 100,0"
                fill="hsl(340, 80%, 60%)"
              />
              <path
                d="M28,27 L25,32 L75,32 72,27 Z"
                fill="hsl(340, 80%, 60%)"
              />
              <path
                d="M36,47 L35,52 L65,52 64,47 Z"
                fill="hsl(340, 80%, 60%)"
              />
              <path
                stroke-width="3"
                d="M28,30 L72,30 M37,50 L63,50"
                stroke="white"
                stroke-dasharray="3 2"
              />
              <path
                stroke-width="3"
                d="M50,95 L50,100"
                stroke="hsl(340, 80%, 60%)"
              />
              <path
                stroke-width="4"
                d="M46,94 L54,94 M46,90 L54,90 "
                stroke="hsl(340, 80%, 60%)"
                stroke-linecap="round"
              />
              <path d="M30,0 C30,35 70,35 70,0 Z" fill="white" />
            </svg>
          </div>
        </div>
        {/* 富士山 */}
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
              />
            </div>
          </div>
        </div>
        {/* 車 */}
        {[...Array(5)].map(() => {
          const isReverse = Math.random() > 0.7;

          return (
            <div
              className="car absolute left-[50%] top-[77%] h-[15%] w-[15%] origin-[0_-180%]"
              style={{
                animation: `rotate ${
                  (isReverse ? 70 : 30) + Math.random() * 30
                }s linear ${isReverse ? 'reverse' : ''} infinite -${
                  Math.random() * 50
                }s`,
              }}
            >
              <div
                className="h-[35%] w-[35%] -translate-x-1/2"
                style={{ transform: isReverse ? 'scale(-1,1)' : undefined }}
              >
                {/* 車体 */}
                <div
                  className="body absolute left-[0%] top-[28%] h-[70%] w-[100%] rounded"
                  style={{
                    backgroundColor: `hsl(${
                      180 + Math.random() * 180
                    } 80% 60%)`,
                    clipPath:
                      'polygon(96% 0, 100% 6%, 100% 33%, 88% 70%, 41% 70%, 30% 48%, 5% 40%, 0 31%, 0 6%, 6% 0)',
                  }}
                />
                {/* ドア */}
                <div
                  className="body absolute left-[0%] top-[28%] h-[70%] w-[100%] rounded bg-gray-200"
                  style={{
                    clipPath:
                      'polygon(35% 30%, 60% 30%, 60% 60%, 44% 60%, 35% 40%)',
                  }}
                />
                <div
                  className="body absolute left-[0%] top-[28%] h-[70%] w-[100%] rounded bg-gray-200"
                  style={{
                    clipPath:
                      'polygon(67% 30%, 90% 30%, 90% 40%, 85% 60%, 67% 60%)',
                  }}
                />
                {/* タイヤ */}
                <div className="tire absolute left-[25%] top-[18%] h-[25%] w-[25%] rounded-full bg-text-main">
                  <div className="tire absolute left-[50%] top-[50%] h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200" />
                </div>
                <div className="tire absolute left-[65%] top-[18%] h-[25%] w-[25%] rounded-full bg-text-main">
                  <div className="tire absolute left-[50%] top-[50%] h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="earth">
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto aspect-square w-[56%] rounded-full border-[5px] border-white" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto aspect-square w-[55%] rounded-full border-[15px] border-[hsl(10,80%,60%)]" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto aspect-square w-[54%] animate-rotate rounded-full border-4 border-dotted" />
        {/* 海 */}
        {[...Array(10)].map((_, i) => {
          return (
            <div
              className="absolute bottom-0 left-0 right-0 top-0 m-auto aspect-square animate-[rotate_8s_linear_reverse_infinite_-2s] rounded-full"
              style={{
                width: `${51 - i * 2}%`,
                borderWidth: '10px',
                borderColor: `hsl(${180 + Math.random() * 50}, 80%, ${
                  65 - i * 2
                }%)`,
                borderTopColor: `${
                  Math.random() > 0.4
                    ? `hsl(${180 + Math.random() * 50}, 80%, ${65 - i * 3}%)`
                    : undefined
                }`,
                animation: `rotate ${30 + Math.random() * 10}s linear ${
                  Math.random() > 0.75 ? 'reverse' : ''
                } infinite ${-Math.random() * 50}s`,
              }}
            />
          );
        })}
      </div>
      <div className="air">
        {/* タイガーモス号 */}
        <div className="base absolute left-[50%] top-[-5%] h-[15%] w-[15%] origin-[0_350%] animate-[rotate_70s_linear_reverse_infinite]">
          <div className="laputa h-[80%] w-[80%] -translate-x-1/2">
            <svg
              className="box h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* くちばし */}
              <path d="M11,67 L5,70 L11,73 Z" fill="hsl(20 50% 50%)" />
              {/* 本体 */}
              <path
                d="M17,69 L28,65 L73,65 L73,73 L17,73 Z"
                fill="hsl(20 50% 50%)"
              />
              <path
                d="M30,69 L70,69"
                stroke="white"
                stroke-width="3"
                stroke-dasharray="3 2"
              />
              {/* バルーン */}
              <path
                d="M50,67 C20,67 20,30 50,30 L80,40 L85,40 L85,50 C60,65 80,65 70,65 Z"
                fill="hsl(20 50% 50%)"
              />
              {/* 操舵翼？後ろの翼 */}
              <path
                d="M85,40 C85,30 98,30 100,40 L97,65 C95,70 90,70 88,65 L85,50"
                fill="hsl(20 50% 50%)"
              />
              {/* 下の出っ張り */}
              <path
                d="M35,73 L60,73 L60,85 L45,85 C35,85 35,70 35,70 Z"
                fill="hsl(20 50% 50%)"
              />
              {/* 羽 */}
              <path d="M20,60 L25,60 L65,70 L50,70 Z" fill="hsl(20 50% 50%)" />
              {/* 後ろのプロペラシャフト */}
              <path
                d="M70,67 90,67"
                stroke="hsl(20 50% 50%)"
                stroke-width="1"
              />
              {/* プロペラ */}
              <g
                className="origin-[20px_60px]"
                style={{ transform: 'rotateY(60deg)' }}
              >
                <path
                  className="main-r origin-[20px_60px] animate-[rotate_1s_linear_infinite]"
                  d="M8,60 32,60 M20,48 20,72 M11,51 29,69 M29,51 11,69"
                  stroke="hsl(40 90% 60%)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </g>
              <g
                className="origin-[50px_70px]"
                style={{ transform: 'rotateY(60deg)' }}
              >
                <path
                  className="main-l origin-[50px_70px] animate-[rotate_1s_linear_infinite]"
                  d="M38,70 62,70 M50,58 50,82 M41,61 59,79 M59,61 41,79"
                  stroke="hsl(40 90% 60%)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </g>
              {/* 後ろのプロペラ */}
              <g
                className="back-1 origin-[76px_67px]"
                style={{ transform: 'rotateY(60deg)' }}
              >
                <path
                  className="back-1 origin-[76px_67px] animate-[rotate_1s_linear_infinite]"
                  d="M71,67 81,67 M76,62 76,72 M73,64 79,70 M79,64 73,70"
                  stroke="hsl(40 90% 40%)"
                  stroke-width="1"
                  stroke-linecap="round"
                />
              </g>
              <g
                className="back-2 origin-[79px_67px]"
                style={{ transform: 'rotateY(60deg)' }}
              >
                <path
                  className="back-2 origin-[79px_67px] animate-[rotate_1s_linear_infinite]"
                  d="M74,67 84,67 M79,62 79,72 M76,64 82,70 M82,64 76,70"
                  stroke="hsl(40 90% 40%)"
                  stroke-width="1"
                  stroke-linecap="round"
                />
              </g>
              <g
                className="back-3 origin-[82px_67px]"
                style={{ transform: 'rotateY(60deg)' }}
              >
                <path
                  className="back-3 origin-[82px_67px] animate-[rotate_1s_linear_infinite]"
                  d="M77,67 87,67 M82,62 82,72 M79,64 85,70 M85,64 79,70"
                  stroke="hsl(40 90% 40%)"
                  stroke-width="1"
                  stroke-linecap="round"
                />
              </g>
              <g
                className="back-4 origin-[85px_67px]"
                style={{ transform: 'rotateY(60deg)' }}
              >
                <path
                  className="back-4 origin-[85px_67px] animate-[rotate_1s_linear_infinite]"
                  d="M80,67 90,67 M85,62 85,72 M82,64 88,70 M88,64 82,70"
                  stroke="hsl(40 90% 40%)"
                  stroke-width="1"
                  stroke-linecap="round"
                />
              </g>
              {/* 船首 */}
              <circle cx="15" cy="70" r="5" fill="hsl(20 50% 50%)" />
            </svg>
          </div>
        </div>
        {/* 鳥 */}
        {[...Array(3)].map((_, i) => {
          return (
            <AnimationBird
              topDiff={i}
              leftDiff={i}
              delay={i * 0.3}
              wingFlapTiming={i}
            />
          );
        })}
        {[...Array(5)].map((_, i) => {
          return (
            <AnimationBird
              topDiff={Math.random() * 3}
              leftDiff={Math.random() * 3}
              delay={Math.random() * 20 + i * 3}
              wingFlapTiming={i % 3}
              isReverse={Math.random() > 0.6}
              color={`hsl(${Math.random() * 360} 100% 35%)`}
            />
          );
        })}
        {/* 飛行機 */}
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
    </div>
  );
};

export default AboutMainAnimation;
