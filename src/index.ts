import type { Plugin } from 'vite'

interface Options {
    
}

const suffixRE = /\.vue$/

export default function(options?: Options): Plugin {
    return {
        name: 'vite-auto-skeleton',
        enforce: 'pre',
        transform(code, id) {
            if (suffixRE.test(id)) {
                
                console.log(code, 'id');
            }
            return code
        }
    }
}