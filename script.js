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

const addOrder = (id) => {
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
