// console.log('🟢 1')

// setTimeout(() => console.log('🔴 2'), 0)

// Promise.resolve()
//     .then(() => {
//         console.log('🟡 3')
//     })
//     .then(() => {
//         console.log('🟡 4')
//     })

// setTimeout(() => console.log('🔴 5'), 0)

// console.log('🟢 6')

// queueMicrotask(() => console.log('⚪ 7'))

// Promise.resolve().then(() => {
//     console.log('🟡 8')
// })

// console.log('🟢 9')

console.log('A')

setTimeout(() => console.log('B'), 0)

Promise.resolve().then(() => {
    console.log('C')
    queueMicrotask(() => console.log('D'))
})

queueMicrotask(() => console.log('E'))

setTimeout(() => console.log('F'), 0)

console.log('G')


