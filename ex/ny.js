let val = []

r = val.push('pool')
console.log(val, r)
y = val.push("")
x = val.push("")
console.log(val, r, y, x)

val.pop()



tic = [[],[],[]]

tic[2][2] = "xy"
console.log(tic, tic[2][0])
val.unshift("Mind")

console.log(val, r, y, x)
v = val.shift()
console.log(v)

list1 = [3, 4, 5, 6]
list2 = [56, 'ert', '23']
list3 = list1 + list2
list4 = list1.concat(list2)
console.log(list4 )
console.log( list3 )
console.log(list4.indexOf(4))
console.log(list4.join("*"))
console.log(list4.indexOf("q"))
console.log(list4.includes("maps"), "\n", list4.reverse(), "\n", list4.sort())