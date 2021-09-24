import React from 'react'

// components/image.jsx
export default function image({src, alt}){
  <picture>
    <source srcset={require(`images/${src}?webp`)} type='image/webp' />
    <img src={src} alt={alt} />
  </picture>
}