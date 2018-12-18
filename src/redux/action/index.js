// import { type } from './type/index'


export const type = {
  TOGGLE_MENU: 'TOGGLE_MENU'
}
// sider 收缩
export function toggleMenu(collapsed) {
  return {
    type: type.TOGGLE_MENU,
    collapsed
  }
}