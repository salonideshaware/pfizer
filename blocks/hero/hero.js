import {
    createElement,
} from '../../scripts/scripts.js';
export default function decorate(block) {
    const demo = document.createElement('ul');
    block.append('ul');

}
