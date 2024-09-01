'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import './Snake.css';

type Props = {
  color1: string;
  color2: string;
  backgroundColor: string;
};

type DirectionT = 'up' | 'right' | 'down' | 'left';
type SnakeT = {
  direction: DirectionT;
  part: number[];
};

const Snake: React.FC<Props> = (props) => {
  const [dim, setDim] = useState<number>(0);
  const [chunk, setChunk] = useState<number>(0);
  const [direction, setDirection] = useState<DirectionT>('right');
  const [fruit, setFruit] = useState<number>(26);
  const [points, setPoints] = useState<number>(0);
  const [game, setGame] = useState<boolean>(false);
  const width = typeof window !== 'undefined' ? window.innerWidth : 0;
  const speedRef = useRef(110);
  const [snake, setSnake] = useState<SnakeT[]>([
    {
      direction: 'right',
      part: [186, 185, 184, 183],
    },
  ]);

  const reset = () => {
    speedRef.current = 100;
    setPoints(0);
    setDirection('right');
    setSnake([
      {
        direction: 'right',
        part: [186, 185, 184, 183],
      },
    ]);
    setGame(false);
  };

  const pieces = (): ('bang' | 'fruit' | '')[] => {
    //functionally label snake pieces (bang) and return
    const arr: ('bang' | 'fruit' | '')[] = [];
    for (let i = 0; i < 400; i++) {
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
        arr.push('bang');
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
    (dir: DirectionT, opp: string) => {
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
    //determine relative dimensions of game portal
    if (width >= 800) {
      setDim(width * 0.35);
    } else if (width < 800) {
      setDim(width * 0.9);
    }
    setChunk(dim / 20);

    //points and get longer after eating
    if (snake[0].part[0] === fruit) {
      setPoints(points + 1);
      const sneak = [...snake];
      const firstSection = sneak[0];
      if (firstSection.direction === 'up') {
        const y = firstSection.part[0] - 20;
        if (y < 0) {
          firstSection.part.unshift(y + 400);
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
        if (y >= 400) {
          firstSection.part.unshift(y - 400);
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
      speedRef.current = speedRef.current - 2;
      setSnake(sneak);
      setFruit(Math.floor(Math.random() * Math.floor(400)));
    }

    //gameover if you eat your tail
    let totalArr: number[] = [];
    for (let k = 0; k < snake.length; k++) {
      totalArr = [...totalArr, ...snake[k].part];
    }
    const head = snake[0].part[0];
    if (totalArr.filter((item) => item === head).length >= 2) setGame(true);

    if (!game) {
      //if GAMEOVER pause events

      //listen for directions and update snake instructions accordingly
      const handleKeydown = (e: KeyboardEvent) => {
        //let tempSnake: any = [...snake];
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
                return (section.part[i] = y + 400);
              } else {
                return (section.part[i] = y);
              }
            });
          } else if (section.direction === 'left') {
            section.part.map((x: number, i: number) => {
              const y = x - 1;
              if (y % 20 === 19) {
                return (section.part[i] = y + 20);
              } else {
                return (section.part[i] = y);
              }
            });
          } else if (section.direction === 'down') {
            section.part.map((x: number, i: number) => {
              const y = x + 20;
              if (y >= 400) {
                return (section.part[i] = y - 400);
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
  }, [turn, width, dim, chunk, snake, direction, points, fruit, game]);

  return (
    <div className='snake-container' id='snake-container'>
      <div className='game-border' style={{ width: dim, height: dim, backgroundColor: props.backgroundColor }}>
        {pieces().map((piece, i) => {
          return (
            <div
              key={'piece' + i}
              style={
                piece === 'bang'
                  ? { width: chunk, height: chunk, backgroundColor: props.color1 }
                  : piece === 'fruit'
                    ? { width: chunk, height: chunk, backgroundColor: props.color2 }
                    : { width: chunk, height: chunk }
              }
            />
          );
        })}
        {game && (
          <div className='game-splash' style={{ height: dim }}>
            <div>Game Over!</div>
            <button onClick={() => reset()}>Play Again</button>
          </div>
        )}
      </div>
      <div className='point-bar' style={{ width: dim }}>
        <div style={{ color: props.color2 }}>Score: {points}</div>
      </div>
      {width <= 1024 && (
        <div className='snake-mobile-buttons' style={{ width: dim, margin: 'auto' }}>
          <div>
            <button onClick={() => turn('up', 'down')}>&#8593;</button>
          </div>
          <div>
            <button onClick={() => turn('left', 'right')}>&#8592;</button>
            <button onClick={() => turn('right', 'left')}>&#8594;</button>
          </div>
          <div>
            <button onClick={() => turn('down', 'up')}>&#8595;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Snake;
