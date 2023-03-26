import { atom } from 'recoil';
import worktime from '../data/worktime.js'

const recoilData = []
worktime.filter((item) => {
  if(item.isVacation) {
    recoilData.push(item.date.getDate())
  };
})

export const recoilVacationDaysState = atom({
  key: 'recoilVacationDaysState',
  default: recoilData
});