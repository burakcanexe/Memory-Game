import React, { useState } from 'react'
import question from '../assets/img/question-mark.png'
import js from '.././assets/img/js.png'
import cs from '.././assets/img/c-sharp.png'
import go from '.././assets/img/go-lang.png'
import py from '.././assets/img/python.png'
import react from '.././assets/img/react.png'
import node from '.././assets/img/nodejs.png'
import java from '.././assets/img/java.png'
import php from '.././assets/img/php.png'
import sql from '.././assets/img/sql-server.png'
import swift from '.././assets/img/swift.png'


function Card({ item, onClickHandler, index }) {

  const [width, setWidth] = useState(100)

  const onSelectItem = () => {
    onClickHandler(item, index)
    setWidth(0);
    setTimeout(() => {
      setWidth(100);
    }, 100)
  }

  return (
    <div onClick={onSelectItem} className='w-[100px] h-[100px] cursor-pointer flex justify-center'>
      <div style={{ width }} className='h-[100px] bg-slate-200 rounded-[10px] flex justify-center items-center duration-200'>
        {(item.show || item.success) ? (
          <>
            {item.name === 'JS' && <img src={js} alt={item.name} className='w-[50px] h-[50px] opacity-70' />}
            {item.name === 'CSharp' && <img src={cs} alt={item.name} className='w-[50px] h-[50px] opacity-70' />}
            {item.name === 'Go' && <img src={go} alt={item.name} className='w-[50px] h-[50px] opacity-70' />}
            {item.name === 'Python' && <img src={py} alt={item.name} className='w-[50px] h-[50px] opacity-70' />}
            {item.name === 'React' && <img src={react} alt={item.name} className='w-[50px] h-[50px] opacity-70' />}
            {item.name === 'NodeJS' && <img src={node} alt={item.name} className='w-[50px] h-[50px] opacity-70' />}
            {item.name === 'Java' && <img src={java} alt={item.name} className='w-[50px] h-[50px] opacity-70' />}
            {item.name === 'PHP' && <img src={php} alt={item.name} className='w-[50px] h-[50px] opacity-70' />}
            {item.name === 'SQL' && <img src={sql} alt={item.name} className='w-[50px] h-[50px] opacity-70' />}
            {item.name === 'Swift' && <img src={swift} alt={item.name} className='w-[50px] h-[50px] opacity-70' />}
          </>
        ) : (
          <img src={question} alt={item} className='w-[50px] h-[50px] opacity-70' />
        )}
      </div>
    </div>
  )
}

export default Card
