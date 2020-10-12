export const De = ( a = [] ) => ({
    unir : ( plantilla ) => a.reduce((acc,d,i)=>acc+plantilla(d,i),""),
    mostrar : (i) => ({
        plantilla : (p) => p(a[i])
    }),
    t : a.length
})