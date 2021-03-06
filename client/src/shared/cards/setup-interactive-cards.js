/**
 * This style Cards in a way or another
 */
import tippy from 'tippy.js'
import { LIS } from '../../helpers/lis.js'
import { share } from './share.js'
export const setupInteractiveCards = async () => {
    return new Promise(function (resolve, reject) {
        if (!LIS.classExists(['card', 'card-body'])) {
            return resolve('### function "setupInteractiveCards" ignored well')
        }

        try {
            const instances = tippy('.deactivated', {
                content: 'Deactivated, you can reactivate it again!',
            })
            const instances2 = tippy('.nonapproved', {
                content: 'Not yet approved, wait for approval!',
            })
            document.querySelector('.sharer').addEventListener('click', function (e) {
                var id = e.target.id,
                    item = e.target
                share(item)
            })
            return resolve('### function "setupInteractiveCards" run successfully')
        } catch (error) {
            console.log(error.message)
            return reject(new Error('### function "setupInteractiveCards" failed'))
        }
    })
}
