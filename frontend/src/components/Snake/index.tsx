'use client';

import React, { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '@nextui-org/button';

import clsx from 'clsx';

import { useGetDictionaryClient } from 'context/dictionaryProvider';

import { appConfig } from 'utils/configs';

type Props = {
  points: number;
  setPoints: Dispatch<SetStateAction<number>>;
  highScore: number;
  containerWidth: number;
};

type DirectionT = 'up' | 'right' | 'down' | 'left';
type SnakeT = {
  direction: DirectionT;
  part: number[];
};

const Snake: React.FC<Props> = ({ points, setPoints, containerWidth, highScore }) => {
  //DICT
  const { helloPage: locale } = useGetDictionaryClient();
  //STATES
  const [direction, setDirection] = useState<DirectionT>('right');
  const [fruit, setFruit] = useState<number>(222);
  const [gameOver, setGameOver] = useState(false);
  const [firstStart, setFirstStart] = useState(true);
  const [snake, setSnake] = useState<SnakeT[]>([
    {
      direction: 'right',
      part: [186, 185, 184, 183],
    },
  ]);

  //REFS
  const speedRef = useRef(60);
  // VARIABLES
  const chunk = containerWidth / 20;

  const reset = () => {
    speedRef.current = 60;
    setPoints(0);
    setDirection('right');
    setSnake([
      {
        direction: 'right',
        part: [186, 185, 184, 183],
      },
    ]);
    setGameOver(false);
  };

  //functionally label snake pieces (bang) and return
  type Bang = `bang$${number}`;
  const pieces = (): (Bang | 'fruit' | '')[] => {
    const arr: (Bang | 'fruit' | '')[] = [];
    for (let i = 0; i < 600; i++) {
      let addToArr: boolean = false;
      let j = 0;
      while (j < snake.length) {
        if (snake[j].part.indexOf(i) >= 0) {
          addToArr = true;
          break;
        } else {
          addToArr = false;
        }
        j++;
      }
      if (addToArr) {
        arr.push(`bang$${i}`);
      } else if (i === fruit) {
        arr.push('fruit');
      } else {
        arr.push('');
      }
    }
    return arr;
  };

  //handle direction changes
  const turn = useCallback(
    (dir: DirectionT, opp: DirectionT) => {
      const tempSnake = [...snake];
      if (direction !== opp && direction !== dir) {
        setDirection(dir);
        tempSnake.unshift({
          direction: dir,
          part: [],
        });
      }
      setSnake(tempSnake);
    },
    [snake, direction]
  );

  useEffect(() => {
    //points and get longer after eating
    if (snake[0].part[0] === fruit) {
      setPoints((prev) => prev + 1);
      const sneak = [...snake];
      const firstSection = sneak[0];
      if (firstSection.direction === 'up') {
        const y = firstSection.part[0] - 20;
        if (y < 0) {
          firstSection.part.unshift(y + 600);
        } else {
          firstSection.part.unshift(y);
        }
      } else if (firstSection.direction === 'right') {
        const y = firstSection.part[0] + 1;
        if (y % 20 === 0) {
          firstSection.part.unshift(y + -20);
        } else {
          firstSection.part.unshift(y);
        }
      } else if (firstSection.direction === 'down') {
        const y = firstSection.part[0] + 20;
        if (y >= 600) {
          firstSection.part.unshift(y - 600);
        } else {
          firstSection.part.unshift(y);
        }
      } else if (firstSection.direction === 'left') {
        const y = firstSection.part[0] - 1;
        if (y % 20 === 19) {
          firstSection.part.unshift(y + 20);
        } else {
          firstSection.part.unshift(y);
        }
      }
      speedRef.current = speedRef.current - 1;
      setSnake(sneak);
      setFruit(Math.floor(Math.random() * Math.floor(600)));
    }

    //game over if you eat your tail
    let totalArr: number[] = [];
    for (let k = 0; k < snake.length; k++) {
      totalArr = [...totalArr, ...snake[k].part];
    }
    const head = snake[0].part[0];
    if (totalArr.filter((item) => item === head).length >= 2) {
      if (points > highScore) {
        fetch(`${appConfig.main.backAPI}/highscore`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: { score: points },
          }),
        });
      }
      setGameOver(true);
    }

    if (!gameOver && !firstStart) {
      //if GAME OVER pause events

      //listen for directions and update snake instructions accordingly
      const handleKeydown = (e: KeyboardEvent) => {
        switch (e.code) {
          case 'ArrowUp':
            e.preventDefault();
            turn('up', 'down');
            break;
          case 'ArrowRight':
            e.preventDefault();
            turn('right', 'left');
            break;
          case 'ArrowDown':
            e.preventDefault();
            turn('down', 'up');
            break;
          case 'ArrowLeft':
            e.preventDefault();
            turn('left', 'right');
            break;
        }
      };
      document.addEventListener('keydown', handleKeydown);

      //event interval
      const interval = setInterval(() => {
        //handle snake piece movement
        const dupSneak = [...snake];

        for (let i = snake.length - 1; i > 0; i--) {
          //increment through current snake and reduce to head direction
          if (dupSneak[i].part.length !== 0) {
            const next = dupSneak[i - 1];
            const chunk = dupSneak[i].part.shift() as number;
            next.part.push(chunk);
          } else {
            dupSneak.pop();
          }
        }

        //perform movement changes to each chunk
        const sneak = dupSneak;
        sneak.map((section) => {
          if (section.direction === 'right') {
            section.part.map((x: number, i: number) => {
              const y = x + 1;
              if (y % 20 === 0) {
                return (section.part[i] = y - 20);
              } else {
                return (section.part[i] = y);
              }
            });
          } else if (section.direction === 'up') {
            section.part.map((x: number, i: number) => {
              const y = x - 20;
              if (y < 0) {
                return (section.part[i] = y + 600);
              } else {
                return (section.part[i] = y);
              }
            });
          } else if (section.direction === 'left') {
            section.part.map((x: number, i: number) => {
              const y = x - 1;
              if (y % 20 === -1 || y % 20 === 19) {
                return (section.part[i] = y + 20);
              } else {
                return (section.part[i] = y);
              }
            });
          } else if (section.direction === 'down') {
            section.part.map((x: number, i: number) => {
              const y = x + 20;
              if (y >= 600) {
                return (section.part[i] = y - 600);
              } else {
                return (section.part[i] = y);
              }
            });
          }
          return '';
        });
        setSnake(sneak);
      }, speedRef.current);

      //remove interval and listeners
      return () => {
        clearInterval(interval);
        document.removeEventListener('keydown', handleKeydown);
      };
    }
  }, [turn, snake, direction, points, fruit, gameOver, firstStart, setPoints]);

  return (
    <div className='relative !bg-surfacePrimary/85'>
      <div className='flex flex-wrap' dir='ltr' style={{ width: containerWidth, height: containerWidth * 1.5 }}>
        {pieces().map((piece, i) => {
          return (
            <div
              key={'piece' + i}
              className={clsx([
                '',
                piece === 'fruit' && 'rounded-full bg-accent-green shadow-[0_0_8px_rgba(67,217,173,0.8)]',
                piece.includes('bang') && 'bg-accent-green',
                piece === `bang$${snake[0].part[0]}`
                  ? direction === 'up'
                    ? 'rounded-t-full'
                    : direction === 'right'
                      ? 'rounded-r-full'
                      : direction === 'down'
                        ? 'rounded-b-full'
                        : direction === 'left'
                          ? 'rounded-l-full'
                          : ''
                  : '',
              ])}
              style={{ width: chunk, height: chunk }}
            />
          );
        })}
      </div>
      {gameOver && (
        <div
          className='absolute inset-0 z-[2] flex min-h-full w-full flex-col items-center justify-end gap-4 bg-surfacePrimary/75 pb-8 backdrop-blur'
          style={{ height: containerWidth }}
        >
          <div className='w-full bg-surfacePrimary py-1 text-center text-xl text-accent-green shadow-[inset_1px_5px_11px_0px_rgba(2,18,27,0.71)]'>
            {locale.gameOver}
          </div>
          <span className='cursor-pointer text-sm text-tSecondary duration-500 hover:text-tPrimary/50' onClick={reset}>
            {locale.playAgain}
          </span>
        </div>
      )}
      {firstStart && (
        <div
          className='absolute inset-0 z-[2] flex min-h-full w-full flex-col items-center justify-end gap-4 bg-surfacePrimary/35 pb-8'
          style={{ height: containerWidth }}
        >
          <Button
            size='sm'
            className='rounded-lg bg-accent-orange text-sm text-tPrimary duration-500'
            onClick={() => setFirstStart(false)}
          >
            {locale.start}
          </Button>
        </div>
      )}
    </div>
  );
};

export default React.memo(Snake);
