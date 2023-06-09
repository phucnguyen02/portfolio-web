import React from 'react'
import '../styles/Skills.css'

function Skills() {
  return (
    <div className='skills'>
        <div className='skills'>
        <ol className='list'>
          <li className='item'>
            <h2>Frontend:</h2>
            <span>ReactJS, HTML, CSS, NPM</span>
          </li>

          <li className='item'>
            <h2>Backend:</h2>
            <span>NodeJS, ExpressJS, MySQL, Sequelize, AWS, SQLite3, Flask, SQL</span>
          </li>

          <li className='item'>
            <h2>Languages:</h2>
            <span>Python3, JavaScript, Java, C/C++, C#</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Skills;