import { type } from './type/index'

// sider 收缩
export function toggleMenu(collapsed) {
  return {
    type: type.TOGGLE_MENU,
    collapsed
  }
}