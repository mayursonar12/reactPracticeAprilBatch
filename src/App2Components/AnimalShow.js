import React from 'react'
import bird from '../svg/bird.svg'
import cat from '../svg/cat.svg'
import dog from '../svg/dog.svg'
import gator from '../svg/gator.svg'
import heart from '../svg/heart.svg'
import horse from '../svg/horse.svg'

const svgMap = {
  "bird": bird,
  "cat": cat,
  "dog": dog,
  "gator": gator,
  "heart": heart,
  "horse": horse
}

const AnimalShow = ({type}) => {
  return (
    <div>
      <img src={svgMap[type]}></img>
    </div>
  )
}

export default AnimalShow;

