// eslint-disable-next-line max-len
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Color picker @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import Picker from 'vanilla-picker'
import { allPaths } from '../load-illustrations/state/all-paths.js'
import { pastColor } from '../load-illustrations/state/past-color.js'
let newColor
export const setupColorPicker = () => {
    const parent = document.querySelector('#parent')
    if (parent) {
        const picker = new Picker(parent)
        picker.onChange = function (color) {
            // Fill allPaths with paths of SVGs inside 'img-container' div (undraw illustrations)
            if (!allPaths.current) {
                allPaths.current = Array.from(document.querySelectorAll('.img-container'))
                    .map((a) => Array.from(a.children[0].querySelectorAll('*')))
                    .flat()
            }
            parent.style.background = color.hex
            newColor = color.hex
            allPaths.current.forEach((path) => {
                if (path.getAttribute('fill') === pastColor.current) {
                    path.setAttribute('fill', newColor)
                }
            })
            pastColor.current = newColor
            // TODO: unselect radio box
        }
    }
}
