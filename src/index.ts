import type { Plugin } from 'vite'

interface Options {
    
}

export default function(options?: Options): Plugin {
    return {
        name: 'vite-auto-skeleton',
        transform(code, id) {
            console.log(id, 'id');
        }
    }
}