export const defaultState = {
  users: [{
    id: 'U1',
    name: 'Dev'
  },
  {
    id: 'U2',
    name: 'Boss'
  }],
  groups: [{
    name: 'To Do',
    id: 'G1',
    owner: 'U1'
  },
  {
    name: 'In progress',
    id: 'G2',
    owner: 'U1'
  },
  {
    name: 'Done',
    id: 'G3',
    owner: 'U1'
  }],
  tasks: [{
    name: 'Do test',
    id: 'T1',
    group: 'G1',
    owner: 'U1',
    isComplete: false
  },
  {
    name: 'Do boss stuff',
    id: 'T2',
    group: 'G1',
    owner: 'U2',
    isComplete: false
  }],
  comments: [{
    owner: 'U1',
    id: 'C1',
    task: 'T1',
    content: 'First comment'
  }]
}
