import * as echarts from 'echarts';
import {useEffect, useRef} from "react";

export const LineBarChart = (props) => {
  const {option} = props
  const container = useRef(null)

  useEffect(() => {
      const width = document.documentElement.clientWidth
      container.current.style.height = `${(width - 20) * 1.2}px`
      let chartInstance = echarts.init(container.current);
      chartInstance.setOption(option)
  },[])


  return (
    <div ref={container}/>
  )
};