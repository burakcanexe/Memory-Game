import './App.css';
import Card from './components/Card';
import { useEffect, useState } from 'react';

const items = [
  "CSharp",
  "Go",
  "JS",
  "Python",
  "React",
  "Java",
  "NodeJS",
  "PHP",
  "SQL",
  "Swift"
]

function App() {
  const [clickable, setClickable] = useState(true)
  const [score, setScore] = useState(0)
  const [clickedItemFirst, setClickedItemFirst] = useState(null)
  const [clickedItemLast, setClickedItemLast] = useState(null)
  const [gameItems, setGameItems] = useState([])

  useEffect(() => {
    setup()
  }, [])

  const setup = () => {
    const allItems = [...items, ...items]
    const _gameItems = []
    allItems.sort(() => Math.random() - 0.5);
    allItems.map(item => {
      _gameItems.push({ name: item, show: false, success: false })
    })
    setGameItems(_gameItems);
  }

  const reset = () => {
    setup()
    setScore(0)
  }

  const onSelectItem = (item, index) => {
    if ((clickedItemFirst && clickedItemLast) || item.show || item.success || !clickable) return
    setClickable(false)
    setTimeout(() => {
      setClickable(true)
    }, 1000)
    const _gameItems = [...gameItems];
    _gameItems[index].show = true;
    setGameItems(_gameItems);


    if (!clickedItemFirst) {
      setClickedItemFirst(item)
      return
    }
    setClickedItemLast(item);
    if (item.name === clickedItemFirst.name) {
      setScore(score + 50)
      const _gameItems = []
      gameItems.map(x => {
        if (x.name === clickedItemFirst.name || x.name === item.name) {
          _gameItems.push({ name: x.name, show: true, success: true })
        } else {
          _gameItems.push({ name: x.name, show: false, success: x.success })
        }
      })
      setGameItems(_gameItems)
    } else {
      setScore(score - 10)
      setTimeout(() => {
        const _gameItems = []
        gameItems.map(x => {
          if (!x.success) {
            _gameItems.push({ name: x.name, show: false, success: false })
          } else {
            _gameItems.push({ name: x.name, show: false, success: true })
          }
        })
        setGameItems(_gameItems);
      }, 1000)
    }
    setClickedItemFirst(null)
    setClickedItemLast(null)
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className='text-[40px] font-bold'>Memory Game</h1>
      <button onClick={reset} className='px-[40px] py-[5px] bg-red-500 rounded-[5px] mt-[20px] font-semibold text-white'>Restart</button>
      <div className='mt-[20px] text-[20px]'>Score: <span className='font-semibold'>{score}</span></div>
      <div className='flex justify-center mt-[10px]'>
        {gameItems.length > 0 && (
          <div className='flex gap-[10px] justify-center flex-wrap w-[320px] md:w-[540px]'>
            {gameItems.map((item, index) => (
              <Card key={index} index={index} onClickHandler={onSelectItem} item={item} />
            ))}
          </div>
        )}
      </div>
      <span className='mt-[50px] mb-[10px]'>from <a href='https://burakcan.dev' target='_blank' className='text-slate-600 font-bold'>Burak Can Yıldırım</a></span>
    </div>
  );
}

export default App;
