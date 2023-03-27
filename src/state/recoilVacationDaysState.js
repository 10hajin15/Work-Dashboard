import { atom } from 'recoil';
import workTimeData from '../data/workTimeData.js'

const recoilData = []
workTimeData.filter((item) => {
  if(item.isVacation) {
    recoilData.push(item.date)
  };
})

export const recoilVacationDaysState = atom({
  key: 'recoilVacationDaysState',
  default: recoilData
});