import React, {useRef, useEffect} from 'react'
import { Seat } from 'seat-core'
import type {ISeatComponent} from 'seat-core'

type Props = {
  component: ISeatComponent
  compProps?: Record<string, any>
  onEmit?: (ev: any) => any
}

const SeatReact = (props: Props) => {

  const domRef = useRef<HTMLDivElement>(null)
  const seatRef = useRef<Seat>()

  useEffect(()=>{
    if(domRef.current && !seatRef.current){
      seatRef.current = new Seat(props.component, domRef.current, props.compProps)
      seatRef.current.onEmit(ev=>{
        props.onEmit?.(ev)
      })
    }
  },[domRef])

  useEffect(()=>{
    if(seatRef.current) {
      seatRef.current.updateProps(props.compProps || {})
    }
  },[props.compProps])

  return (
    <div ref={domRef}></div>
  )
}

export default SeatReact