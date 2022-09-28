import * as echarts from 'echarts';
import {useEffect, useRef} from "react";

export const LineBarChart = (props) => {
  const {option} = props
  const container = useRef(null)
  const chart = useRef(null)
  useEffect(() => {
    const width = document.documentElement.clientWidth
    container.current.style.height = `${(width - 20) * 1.2}px`
    chart.current = echarts.init(container.current);
    chart.current.setOption(option)
  }, [])

  useEffect(() => {
    chart.current.setOption(option)
  }, [option])


  return (
    <div ref={container}/>
  )
};