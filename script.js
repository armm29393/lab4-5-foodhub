{/* <li class="list-group-item">TEST</li> */}
const foods = {
  1: {
    name: 'ข้าวหน้าหมูไข่ดอง',
    space: 125,
  },
  2: {
    name: 'แซลมอน',
    space: 180,
  },
  3: {
    name: 'ไอศกรีม',
    space: 185,
  },
}

// const setFoods = (id, increment) => {
//   console.log('food id ==', id)
//   console.log('food ==', foods[id])
//   return foods[id] + 1
// }

const addOrder = (id) => {
  // let orderList = $("#orderList");
  // orderList.empty()
  // // ===== 1 =====
  // let item1 = document.createElement('li')
  // item1.setAttribute('class', 'list-group-item')
  // item1.appendChild(document.createTextNode("ข้าวหน้าหมูไข่ดอง"))
  // item1.appendChild(document.createTextNode(`      x ${setFoods(1, (id==1)?1:0)}`))
  // // ===== 2 =====
  // let item2 = document.createElement('li')
  // item2.setAttribute('class', 'list-group-item')
  // item2.appendChild(document.createTextNode("แซลมอน"))
  // item2.appendChild(document.createTextNode(`      x ${setFoods(2, (id==2)?1:0)}`))
  // // ===== 3 =====
  // let item3 = document.createElement('li')
  // item3.setAttribute('class', 'list-group-item')
  // item3.appendChild(document.createTextNode("ไอศกรีม"))
  // item3.appendChild(document.createTextNode(`      x ${setFoods(3, (id==3)?1:0)}`))
  // orderList.append(item1)
  // orderList.append(item2)
  // orderList.append(item3)
  
  let orderList = $("#orderList");
  let item = document.createElement('li')
  item.setAttribute('class', 'list-group-item')
  item.appendChild(document.createTextNode(foods[id].name))
  let x = document.createElement('span')
  x.setAttribute('style', `padding-left: ${foods[id].space}px;`)
  x.textContent = 'x1'
  item.appendChild(x)
  orderList.append(item)
}

const clearOrder = () => {
  let orderList = $("#orderList");
  orderList.empty()
}
